/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Example from '../vitepress/example.vue'
import Table from '../vitepress/table.vue'
import './style.css'
import '../../node_modules/@bottle414/bottle-ui/dist/shared.css'// 全局引入自己的样式, 不需要一遍一遍引入
import BotttleUI from '@bottle414/bottle-ui'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // ...
    app.component('Example', Example)
    app.component('Table', Table)
    app.use(BotttleUI)
  }
} satisfies Theme