// @ts-ignore
import lightVariables from './variables-light.scss'
// @ts-ignore
import darkVariables from './variables-dark.scss'
import css from "css";


/**
 * Get the CSS variables from a theme
 */
function getCssVariablesObject(str: string): Record<string, any> {
	// @ts-ignore
	const decs = css.parse(str)?.stylesheet?.rules[0]?.declarations;
	let obj: {[T: string]: any} = {};
	for (const dec of decs) {
		obj[dec.property] = dec.value;
	}
	return obj;
}

export const lightProperties = getCssVariablesObject(lightVariables);
export const darkProperties = getCssVariablesObject(darkVariables);

/**
 * Set a theme in CSS (light or dark)
 */
export function setTheme(mode: "light" | "dark") {
	let data = lightProperties;
  if (mode === "dark") {
		data = darkProperties;
	}
	
	console.log(darkProperties);
	
  const dataEntries = Object.entries(data);
  for (const [key, value] of dataEntries) {
		document.body.style.setProperty(key, value);
  }
}
