export * from './components'
export * from './hooks'
export * from './utils'
export * from './theme-chalk/src/index.scss'

import Components from './components'
import { App } from 'vue'

const install = (app: App) => {
    Object.entries(Components).forEach(([key, component]) => {
        app.component(key, component)
    })
}

export default install