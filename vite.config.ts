import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
    proxy: {
      '/api/v3': {
        target: 'https://iam.cn-north-4.myhuaweicloud.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      '/api/v1': {
        target: 'https://4909b78e1e2a4e1b83728649b69752f2.apig.cn-north-4.huaweicloudapis.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
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
