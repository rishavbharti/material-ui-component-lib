import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.js',
    external: ['react', '@emotion/react', '@emotion/styled', '@mui/material'],
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      babel({ exclude: 'node_modules/**' }),
      commonjs(),
      terser(),
      filesize(),
    ],
  },
];
