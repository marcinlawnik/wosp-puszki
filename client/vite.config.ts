/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    alias: [
      { find: 'less', replacement: path.resolve(__dirname, './src/less/') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components/') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils/') },
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets/') },
      { find: '@', replacement: path.resolve(__dirname, './src/') },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#CF1322',
          'btn-primary-bg': '#CF1322',
          //fonts
          'font-size-base': '16px',
          'font-size-lg': '24px',
          'heading-1-size': '40px',
          'heading-2-size': '32px',
          'text-color-secondary': '#CF1322',
        },

        javascriptEnabled: true,
      },
    },
  },
});
