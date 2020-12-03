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

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bigiron.css@2/out/bigiron.min.css">`

### 🌙 Dark Theme:

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bigiron.css@2/out/dark.min.css">`

### ☀ Light Theme:

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bigiron.css@2/out/light.min.css">`

<br>

## Theming

Do you want to make some adjustments or build your own theme completely different from the official dark or light themes? Since Bigiron.css is built with CSS variables this is super easy to do! Here's a list list of all the variables you can change to your liking:

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

Bigiron.css uses Custom Properties (_"CSS variables"_) to define its base styles such as colors. These can be changed and overwritten right in the browser.

Because of this, you can simply add your own stylesheet to the page and set your own CSS variables there. As long as your stylesheet comes after Bigiron.css in the HTML, your values will override the default ones and your theme is applied!

This short example will use Bigiron.css, but color all links red:

```html
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
- Run `npm i` to install dependencies
- Make the theming changes you want in `src/variables-*.css`
- Run `npm build` to compile the CSS files
- Use the compiled files in the `out/` directory on your site

## Contributing

Bigiron.css becomes better for everyone when people like you help make it better!