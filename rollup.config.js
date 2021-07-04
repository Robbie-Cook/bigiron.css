const rollupTypescript = require('@rollup/plugin-typescript');
const rollupScss = require('rollup-plugin-scss');
import { string } from 'rollup-plugin-string';
import url from '@rollup/plugin-url';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist/',
    format: 'cjs',
  },
  plugins: [
    rollupTypescript({
      tsconfig: false,
      allowSyntheticDefaultImports: true,
      jsx: 'react',
    }),
    // rollupScss({ output: 'dist/index.css' }),
    string({
      include: '**/*.scss',
    }),
    url(),
  ],
};
