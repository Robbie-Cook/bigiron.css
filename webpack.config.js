const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },

  mode: 'production',
  target: 'web',

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  // Make sure dependents don't require fs (css)
  node = {
    fs: 'empty'
  },

  module: {
    noParse: /react-docs/,
    rules: [
      {
        test: /(\.ts(x?))|(\.jsx?)$/,
        exclude: [/node_modules/, path.resolve(__dirname, '../react-docs')],
        include: path.resolve(__dirname, 'src/index.ts'),
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /react-docs/],
        use: [
          {
            loader: 'raw-loader'
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader'
      }
    ]
  },

  // externals: {
  //   'react': 'react', // Case matters here
  //   'react-dom' : 'react-dom' // Case matters here
  // },
  externals: [nodeExternals()],
  plugins: []
}
