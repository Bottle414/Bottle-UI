// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [vue(), dts({
        entryRoot: 'packages',
        outDir: 'packages/dist/types',
        include: ['packages/components'],
        staticImport: true,
        rollupTypes: true
    })],
  resolve: {
    alias: {
      '@bottle-ui': path.resolve(__dirname, './packages'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.ts'), // 注意这里指向 packages 下的 index.ts
      name: 'BottleUI',
      fileName: (format) => `bottle-ui.${format}.js`,
      formats: ['es', 'umd']
    },
    outDir: 'packages/dist', 
    // cssCodeSplit: false, // CSS 注入组件 这样打包会变大，但是即插即用
    rollupOptions: {
      external: ['vue'], // 避免vue版本冲突
      output: {
        exports: 'named', // 👈 加上这个，确保 default 被导出！
        globals: {
          vue: 'Vue', // 外部依赖的全局变量名
        }
      }
    }
  }
})