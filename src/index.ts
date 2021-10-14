// @ts-ignore
import lightVariables from './themes/variables-light.scss';
// @ts-ignore
import darkVariables from './themes/variables-dark.scss';
import postcss from 'postcss';

// @ts-ignore
const postcssJs = require('postcss-js');

/**
 * Get the CSS variables from a theme
 */
function getCssVariablesObject(str: string): Record<string, any> {
  // @ts-ignore
  const decs = postcssJs.objectify(postcss.parse(str))?.[':root'];

  let obj: { [T: string]: any } = {};
  const decsEntries = Object.entries(decs);
  for (const [key, dec] of decsEntries) {
    obj[key] = dec;
  }
  return obj;
}

export const lightProperties = getCssVariablesObject(lightVariables);
export const darkProperties = getCssVariablesObject(darkVariables);

/**
 * Set a theme in CSS (light or dark)
 */
export function setTheme(
  mode: 'light' | 'dark',
  domElement: HTMLElement = document.body
) {
  let data = lightProperties;
  if (mode === 'dark') {
    data = darkProperties;
  }

  const dataEntries = Object.entries(data);
  for (const [key, value] of dataEntries) {
    domElement.style.setProperty(key, value);
  }
}
