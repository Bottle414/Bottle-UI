/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

import { createApp } from 'vue'
import App from './App.vue'
import { BIcon } from '@bottle-ui/components/icon'
import "@bottle-ui/theme-chalk/src/index.scss"

const app = createApp(App)
app.mount('#app')
app.use(BIcon)