// export * from './theme-chalk/src/index.scss' 无法被ts识别
import './theme-chalk/src/index.scss'// 触发vite打包css文件

import Components from './components'
import { App } from 'vue'

const install = (app: App) => {
    Object.entries(Components).forEach(([key, component]) => {
        app.component(key, component)
    })
}

export default install