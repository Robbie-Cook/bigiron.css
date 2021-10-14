import React, { useState } from 'react';

export const Options: React.VFC<{
  cssState: 'normal' | 'light' | 'dark' | 'variables-only';
  setCssState: Function;
}> = (props) => {
  return (
    <form id="theme-form">
      <input
        type="radio"
        value="auto"
        onClick={() => props.setCssState('normal')}
        checked={props.cssState === 'normal'}
        name="theme"
        id="theme-auto"
      />
      <label htmlFor="theme-auto">Automatic 🌙 / ☀</label>

      <input
        type="radio"
        value="dark"
        onClick={() => props.setCssState('dark')}
        checked={props.cssState === 'dark'}
        name="theme"
        id="theme-dark"
      />
      <label htmlFor="theme-dark">Dark theme 🌙</label>

      <input
        type="radio"
        value="light"
        onClick={() => props.setCssState('light')}
        checked={props.cssState === 'light'}
        name="theme"
        id="theme-light"
      />
      <label htmlFor="theme-light">Light theme ☀</label>

      <input
        type="radio"
        value="variables-only"
        onClick={() => props.setCssState('variables-only')}
        checked={props.cssState === 'variables-only'}
        name="theme"
        id="variables-only"
      />
      <label htmlFor="variables-only">Variables only 👨‍💻</label>
    </form>
  );
};
