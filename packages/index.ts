/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

// export * from './theme-chalk/src/index.scss' 无法被ts识别
import './theme-chalk/src/index.scss'// 触发vite打包css文件

import Components from './components'
import { App, Component } from 'vue'

const install = (app: App) => {
    Object.entries<Component>(Components).forEach(([key, component]) => {
        app.component(key, component)
    })
}

export default install