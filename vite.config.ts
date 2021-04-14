import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ],
  },
  optimizeDeps: {
    include: ['element-plus/lib/locale/lang/zh-cn']
  }
})
