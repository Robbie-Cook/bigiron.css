const gulp = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const sourcemaps = require('gulp-sourcemaps')
const bytediff = require('gulp-bytediff')
const browserSync = require('browser-sync').create()
const chalk = require('chalk')
const rename = require('gulp-rename')
const filter = require('gulp-filter')
const flatten = require('gulp-flatten')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const posthtml = require('gulp-posthtml')
const htmlnano = require('htmlnano')
const sizereport = require('gulp-sizereport')
const postcssCssVariables = require('postcss-css-variables')
const postcssImport = require('postcss-import')
const postcssInlineSvg = require('postcss-inline-svg')
const postcssColorModFunction = require('postcss-color-mod-function').bind(null, {
  /* Use `.toRGBLegacy()` as other methods can result in lots of decimals */
  stringifier: (color) => color.toRGBLegacy()
})

const sass = require('gulp-sass')
sass.compiler = require('node-sass')

const paths = {
  styles: { src: 'src/builds/*.scss', dest: 'dist', watch: ['src/**/*.css', 'src/**/*.css'] }
}

// https://stackoverflow.com/a/20732091
const humanFileSize = (size) => {
  const i = Math.floor(Math.log(size) / Math.log(1024))
  return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
}

const formatByteMessage = (source, data) => {
  const prettyStartSize = humanFileSize(data.startSize)
  let message = ''

  if (data.startSize !== data.endSize) {
    const change = data.savings > 0 ? 'saved' : 'gained'
    const prettySavings = humanFileSize(Math.abs(data.savings))
    let prettyEndSize = humanFileSize(data.endSize)

    if (data.endSize > data.startSize) prettyEndSize = chalk.yellow(prettyEndSize)
    if (data.endSize < data.startSize) prettyEndSize = chalk.green(prettyEndSize)

    message = chalk`${change} ${prettySavings} (${prettyStartSize} -> {bold ${prettyEndSize}})`
  } else message = chalk`kept original filesize. ({bold ${prettyStartSize}})`

  return chalk`{cyan ${source.padStart(12, ' ')}}: {bold ${data.fileName}} ${message}`
}

const style = () => {
  const startDiff = () => bytediff.start()
  const endDiff = (source) => bytediff.stop((data) => formatByteMessage(source, data))

  return (
    gulp
      .src(paths.styles.src)
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([postcssImport(), postcssColorModFunction(), postcssInlineSvg()]))

      .pipe(startDiff())
      .pipe(postcss([postcssCssVariables({ preserve: true })]))
      .pipe(endDiff('css variables'))

      .pipe(startDiff())
      .pipe(postcss([autoprefixer()]))
      .pipe(endDiff('autoprefixer'))

      .pipe(sourcemaps.write('.'))
      .pipe(flatten()) // Put files in dist/*, not dist/builds/*
      .pipe(gulp.dest(paths.styles.dest))

      .pipe(filter('**/*.css')) // Remove sourcemaps from the pipeline

      // <minifying>
      // .pipe(startDiff())
      // .pipe(postcss([cssnano({ preset: ['default', { svgo: { floatPrecision: 0 } }] })]))
      // .pipe(endDiff('minification'))
      // .pipe(rename({ suffix: '.min' }))
      // </minifying>

      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(paths.styles.dest))

      .pipe(filter('**/*.css')) // Remove sourcemaps from the pipeline
      .pipe(sizereport({ gzip: true, total: false, title: 'SIZE REPORT' }))
  )
}

// const startDevServer = () => {
//   browserSync.init({ server: { baseDir: './dist/docs' } })

//   gulp.watch(paths.styles.watch, gulp.series(style, browserReload))
//   gulp.watch(paths.docs.src, gulp.series(docs, browserReload))
// }

const build = gulp.parallel(style)
// const watch = gulp.series(build, startDevServer)
const watch = build

module.exports.build = build
module.exports.watch = watch
