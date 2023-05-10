import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'rolled.web-ifc-viewer.js',
  output: {
    file: "dist/rolled.web-ifc-viewer.js",
    format: 'iife'
  },
  plugins: [ nodeResolve(), commonjs() ]
};
