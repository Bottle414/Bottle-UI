# 安装

```js
npm install @bottle414/bottle-ui
```

<br>

# 导入样式文件
```js
import '../node_modules/@bottle414/bottle-ui/dist/shared.css'
```

<br>

# 导入volar组件提示
```js
import '../node_modules/@bottle414/bottle-ui/dist/index.d.ts'
```
<br>


# 导入组件
## 全局导入
只需在main.js导入并注册，即可全局使用
```js
import { createApp } from 'vue'
import App from './App.vue'
import BottleUI from '@bottle414/bottle-ui'

const app = createApp(App)
app.use(BottleUI)
app.mount('#app')
```

## 部分导入
手动导入所需的组件
```js
import { createApp } from 'vue'
import App from './App.vue'
import { BButton, BIcon } from '@bottle414/bottle-ui'

const app = createApp(App)
app.use(BButton)
app.use(BIcon)
app.mount('#app')
```
或者在文件内部
```js
<template>
    <BButton> Hello! <BButton/>
<template/>

<script>
    import { BButton } from '@bottle414/bottle-ui'
<script/>
```
<br/>

:tada:然后就可以使用啦！

<br/>

# 功能演示
