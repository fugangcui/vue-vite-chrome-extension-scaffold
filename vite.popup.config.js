import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { CRX_OUTDIR } from './globalConfig'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
    // 指定输出路径
    outDir: CRX_OUTDIR,
    },
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
