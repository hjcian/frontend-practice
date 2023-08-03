import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import resolve from 'rollup-plugin-node-resolve';
// import alias from '@rollup/plugin-alias';
import path from 'path';

export default () => {
  return defineConfig({
    plugins: [react()],
    // resolve: {
    //   alias: {
    //     'vis-data/peer/esm/vis-data.js': 'vis-data/peer/esm/vis-data.js',
    //   },
    // },
    // build: {
    //   rollupOptions: {
    //     plugins: [resolve()],
    //   },
    // },
  });
};
