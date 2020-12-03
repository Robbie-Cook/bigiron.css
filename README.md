<p align="center">
  <a href="https://www.npmjs.com/package/water.css"><img align="center" src="https://img.shields.io/npm/v/water.css.svg" alt="NPM page"></a>
  <a href="https://www.producthunt.com/posts/water-css"><img align="center" src="https://img.shields.io/badge/on-product%20hunt-blue.svg" alt="On Product Hunt"></a>
  <a href="https://github.com/kognise/water.css/pulls"><img align="center" src="https://img.shields.io/github/contributors-anon/kognise/water.css" alt="Contributors"></a>
  <a href="https://github.com/kognise/water.css/blob/master/LICENSE.md"><img align="center" src="https://img.shields.io/github/license/kognise/water.css.svg" alt="MIT license"></a>
</p>

<br>

<h1 align="center">bigiron.css</h1>
<h3 align="center">Forked from water.css</h3>
<p align="center">🌊 A drop-in collection of CSS styles to make simple websites just a little nicer</p>


<br>

## Goals

- Responsive
- Themeable
- Good browser support (works on my old kindle's browser :P)
- Tiny size
- Beautiful
- No classes

##

Just stick this in your `<head>`:

### 🌙/☀ Automatic Theme:

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css">`

### 🌙 Dark Theme:

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.min.css">`

### ☀ Light Theme:

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.min.css">`

<br>

A **preview** of the different themes is available [on the **demo page**](https://watercss.kognise.dev/#installation)! ⚡

## Theming

Do you want to make some adjustments or build your own theme completely different from the official dark or light themes? Since Water.css is built with CSS variables this is super easy to do! Here's a list list of all the variables you can change to your liking:

- `--background-body`
- `--background`
- `--background-alt`
- `--selection`
- `--text-main`
- `--text-bright`
- `--text-muted`
- `--links`
- `--focus`
- `--border`
- `--code`
- `--animation-duration`
- `--button-hover`
- `--scrollbar-thumb`
- `--scrollbar-thumb-hover`
- `--form-placeholder`
- `--form-text`
- `--variable`
- `--highlight`
- `--select-arrow`

### Runtime theming

> ⚠ If you use a version with support for legacy browsers like Internet Explorer, skip to [Compiling your own theme](#compiling-your-own-theme)!

Water.css uses Custom Properties (_"CSS variables"_) to define its base styles such as colors. These can be changed and overwritten right in the browser.

Because of this, you can simply add your own stylesheet to the page and set your own CSS variables there. As long as your stylesheet comes after Water.css in the HTML, your values will override the default ones and your theme is applied!

This short example will use Water.css, but color all links red:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/water.css@2/out/water.min.css" />
<style>
  :root {
    --links: red;
  }
</style>
```

If you want to change a value for dark or light mode only, use a media query like this:

```html
<style>
  :root {
    --links: blue; /* Always applied */
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --links: yellow; /* Only applied in dark mode (overrides blue) */
    }
  }
</style>
```

### Compiling your own theme

If you are targeting browsers without support for CSS Custom Properties such as Internet Explorer, runtime theming is not an option. To apply your own theming, you'll need to make your changes in the source files themselves, then re-compile the CSS files. This works like the following:

- Clone the repository to your machine
- Run `yarn` to install dependencies
- Make the theming changes you want in `src/variables-*.css`
- Run `npm build` to compile the CSS files
- Use the compiled files in the `out/` directory on your site

You also might want to check out the [Contributing Guide](https://github.com/kognise/water.css/tree/master/.github/CONTRIBUTING.md) as it contains further information about the build setup.

## Contributing

Water.css becomes better for everyone when people like you help make it better!

Check out our [Contributing Guide](.github/CONTRIBUTING.md) to learn how to get started.  
And thanks for taking the time to contribute! :)
