import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import vue from '@vitejs/plugin-vue'

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
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    resolve: {
      alias: {
        '@bottle-ui': resolve('E:/Bottle-UI/packages')
      }
    }
  }
  // vite: {
  //   plugins: [vue()],
  //   resolve: {
  //     alias: {
  //       '@bottle-ui/button': resolve('E:/Bottle-UI/packages/components/button'),
  //       '@bottle-ui/input': resolve('E:/Bottle-UI/packages/components/button'),
  //       // 添加更多组件别名
  //     }
  //   }
  // }
})