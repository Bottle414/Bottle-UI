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
      { icon: 'bilibili', link: 'https://www.bilibili.com/video/BV1TdJ3zVEin/?spm_id_from=333.1387.homepage.video_card.click&vd_source=7190a99cb1b105a55f87b34cf43e9d4f', ariaLabel: 'bilibili' },
    ]
  },
  markdown: {
    config(md) {
        md.use(vitepressDemoPlugin)
    }
  }
})