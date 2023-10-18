# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Project structure

```

├─ /.vscode
├─ /node_modules
├─ /public
|  ├─ /images               <--图片目录
|  |  └─ app.png            <--插件图标
|  ├─ favicon.ico           <--这个没有也行，用不到
|  ├─ insert.js             <--插入到目标页面执行的js（非必须，视业务需求而定）
|  └─ manifest.json         <--插件的配置文件
├─ /src
|  ├─ /api                  <-- api目录
|  |  └─ index.js           <-- api库
|  ├─ /background           <--background script开发目录
|  |  └─ index.js           <--background script主文件
|  ├─ /common               <-- 全局公用目录
|  |  ├─ /fonts             <-- 字体文件目录
|  |  ├─ /images            <-- 图片文件目录
|  |  ├─ /js                <-- 公用js文件目录
|  |  └─ /styles            <-- 公用样式文件目录
|  ├─ /content              <--content script开发目录
|  |  ├─ /components        <--content 组件目录
|  |  ├─ /images            <--content 图片目录
|  |  ├─ content.vue        <--content script入口页面文件
|  |  ├─ element-plus.scss  <-- 专为content script定制的特殊element-plus样式命名空间
|  |  └─ index.js           <--content script主文件
|  ├─ /popup                <--popup开发目录
|  |  ├─ /components        <--popup 组件目录
|  |  ├─ /router            <--popup 路由配置目录
|  |  |  └─ index.js        <--popup 路由配置文件
|  |  ├─ /views             <--popup 页面目录
|  |  ├─ main.js            <--popup 主文件
|  |  └─ popup.vue          <--popup 入口页面文件
|  └─ mock.js              <-- mock数据文件
├─.gitignore
├─ build.js                 <-- 补充的build脚本文件
├─ globalConfig.js          <-- 全局配置文件
├─ index.html               <-- popup页面入口
├─ package.json
├─ vite.popup.config.js       <-- popup的Vite配置文件
├─ vite.content.config.js     <-- content的Vite配置文件
├─ vite.background.config.js  <-- background的Vite配置文件
└─ yarn.lock
```

### Manifest File

```
{
  "name": "Chrome插件V3",
  "version": "1.0",
  "description": "基于Vite的chrome插件V3 Demo",
  // Chrome Extension 版本号，3表示MV3
  "manifest_version": 3,
  // background script配置（根目录为最终build生成的插件包目录）
  "background": {
    "service_worker": "background.js"
  },
  // content script配置
  "content_scripts": [
    {
      // 应用于哪些页面地址（可以使用正则，<all_urls>表示匹配所有地址）
      "matches": ["<all_urls>"],
      // 注入到目标页面的css，注意不要污染目标页面的样式
      "css": ["content.css"],
      // 注入到目标页面js，这个js是在沙盒里运行，与目标页面是隔离的，没有污染问题。
      "js": ["content.js"],
      // 代码注入的时机，可选document_start、document_end、document_idle（默认）
      "run_at": "document_end"
    }
  ],
  // 申请chrome extension API权限
  "permissions": ["storage","declarativeContent"],
  // 插件涉及的外部请求地址，暂未发现影响跨域请求，猜测是用于上架商店时方便审核人员查阅
  "host_permissions":[],
  // 如果向目标页面插入图片或者js，需要在这里授权插件本地资源（以下仅为示例）。
  "web_accessible_resources": [
    {
      "resources": [ "/images/app.png" ],
      "matches": ["<all_urls>"]
    },
    {
      "resources": [ "insert.js" ],
      "matches": ["<all_urls>"]
    }
  ],
  // popup页面配置
  "action": {
    // popup页面的路径（根目录为最终build生成的插件包目录）
    "default_popup": "index.html",
    // 浏览器插件按钮的图标
    "default_icon": {
      "16": "/images/app.png",
      "32": "/images/app.png",
      "48": "/images/app.png",
      "128": "/images/app.png"
    },
    // 浏览器插件按钮hover显示的文字
    "default_title": "Vue CRX MV3"
  },
  // 插件图标，图省事的话，所有尺寸都用一个图也行
  "icons": {
    "16": "/images/app.png",
    "32": "/images/app.png",
    "48": "/images/app.png",
    "128": "/images/app.png"
  }
}
```

### 样式命名规范

```
G-xx： 表示全局样式，用来定义公用样式。

P-xx:  表示页面样式，用来设置页面的背景色、尺寸、定制化调整在此页面的组件样式。

M-xx:  表示组件样式，专注组件本身样式。

```

Reference: 
- [基于Vite4+Vue3的Chrome插件开发教程](https://zhuanlan.zhihu.com/p/651319607)