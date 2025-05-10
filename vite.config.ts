// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@bottle-ui': path.resolve(__dirname, './packages'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.ts'), // 注意这里指向 packages 下的 index.ts
      name: 'BottleUI',
      fileName: (format) => `bottle-ui.${format}.js`
    },
    outDir: 'packages/dist', 
  }
})