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
    logo: '/public/logo.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/getting-started.md' },
      { text: '组件实例', link: '/components/button' }
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
            { text: 'Input', link: '/components/input' },
            { text: 'Collapse', link: '/components/collapse' },
            { text: 'Form', link: '/components/form' },
            { text: 'Progress', link: '/components/progress' },
            { text: 'VirtualList', link: '/components/virtualList' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bottle414/Bottle-UI.git', ariaLabel: 'github'  },
      { icon: 'bilibili', link: 'https://space.bilibili.com/503461496?spm_id_from=333.1007.0.0', ariaLabel: 'author bilibili' },
    ]
  },
  markdown: {
    config(md) {
        md.use(vitepressDemoPlugin)
    }
  }
})