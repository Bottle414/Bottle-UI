import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  title: "Bottle-UI",
  description: "一个自制 Vue3 组件库",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/getting-started.md' },
      { text: '组件实例', link: '/components' }
    ],
    sidebar: {
      '/components':[
        {
          text: '组件示例',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'Card', link: '/components/card' },
            { text: 'Tooltip', link: '/components/tooltip' },
            { text: 'Switch', link: '/components/switch' },
            { text: 'Tree', link: '/components/tree' },
            { text: 'Upload', link: '/components/upload' },
            { text: 'Input', link: '/components/Input' },
            { text: 'Progress', link: '/components/Progress' },
            { text: 'VirtualList', link: '/components/virtualList' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config(md) {
        md.use(vitepressDemoPlugin)
    }
  }
})