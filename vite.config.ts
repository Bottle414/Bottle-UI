// vite.config.ts
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@Bottle-UI': path.resolve(__dirname, 'E:/Bottle-UI/packages'),
    },
  },
})