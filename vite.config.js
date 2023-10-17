import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // 指定dev环境端口号
    port: 9000,

    // 自动打开浏览器
    open: '/'
  },
  resolve: {
    // 设置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [vue()],
})
