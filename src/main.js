import { createApp } from 'vue'
import App from '@/App.vue'
// 全局样式
import '@/common/styles/frame.styl'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 设置antd默认语言为中文
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
app.mount('#app')
