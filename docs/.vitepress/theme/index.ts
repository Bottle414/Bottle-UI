// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Example from '../vitepress/example.vue'
import Table from '../vitepress/table.vue'
import './style.css'
import '@Bottle-UI/theme-chalk/src/index.scss'// 全局引入自己的样式, 不需要一遍一遍引入

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // ...
    app.component('Example', Example)
    app.component('Table', Table)
  }
} satisfies Theme