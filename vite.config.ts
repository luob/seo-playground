import { defineConfig } from 'vite'

import { resolve } from "path"
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve(__dirname, './src')
      }
    ]
  },
  plugins: [
    reactRefresh()
  ],
  base: "./"
})
