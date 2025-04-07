import { createApp } from 'vue'
import App from './App.vue'
import { BIcon } from '@bottle-ui/components/icon'

const app = createApp(App)
app.mount('#app')
app.use(BIcon)