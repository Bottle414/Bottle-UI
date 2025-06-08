📘 [English](README.md) | 📙 [简体中文](README-zh.md)


# Bottle-UI 组件库🎉
Hi，这是我学习Vue3组件封装和通信、练习手搓CSS、熟悉TS的产物, 同时也作为Web期末大作业发布了🦝。

文档Vercel地址:[https://bottle-ui-eta.vercel.app](https://bottle-ui-eta.vercel.app)

![npm version](https://img.shields.io/npm/v/@bottle414/bottle-ui)
![downloads](https://img.shields.io/npm/dt/@bottle414/bottle-ui)
![license](https://img.shields.io/npm/l/@bottle414/bottle-ui)

## 安装🔧
<details>
  <summary>npm</summary>
  
```js
npm i @bottle414/bottle-ui
```
</details>
<details>
  <summary>pnpm</summary>
  
```js
  pnpm i @bottle414/bottle-ui
```
</details>
<details>
  <summary>yarn</summary>
  
```js
  yarn add @bottle414/bottle-ui
```
</details>

## 使用📏
### 1.导入样式文件
```bash
import '../node_modules/@bottle414/bottle-ui/dist/shared.css'
```

### 导入 Volar 类型提示(可选)
```bash
import '../node_modules/@bottle414/bottle-ui/dist/types/bottle-ui.es.d.ts'
```

### 导入组件
可以全局导入也可以局部导入

#### 全局导入示例🌟
```js
import { createApp } from 'vue'
import App from './App.vue'
import BottleUI from '@bottle414/bottle-ui'

const app = create(App)
app.use(BottleUI)
app.mount()
```

#### 部分导入示例🍊
可以在项目入口注册
```js
import { createApp } from 'vue'
import App from './App.vue'
import { BButton, BIcon } from '@bottle414/bottle-ui'

const app = createApp(App)
app.use(BButton)
app.use(BIcon)
app.mount('#app')
```

或者直接在组件内部导入
```js
<template>
    <BButton> Hello! <BButton/>
<template/>

<script>
    import { BButton } from '@bottle414/bottle-ui'
<script/>
```

然后就可以使用啦！🎉🦝

## 待办
- [ ] 完成用户自定义主题覆盖

- [ ] 完成测试文件编写

- [ ] 提供更好的可访问性支持

- [ ] 提供更好的兼容性支持

- [ ] 优化虚拟列表

- [x] 添加提交流水线

- [ ] 考虑: 适配 web component