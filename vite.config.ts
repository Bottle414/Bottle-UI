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
        // rollupTypes: true 加上这句可以正常生成组件提示，但没有props提示。移除之后可以有props提示，但是在各种export * from 'xxx'的位置会报错（用新的项目测试可以发现），怀疑是因为文件名有.d.ts后缀，但export那里却没有导致的
        // 除了这个问题，还有虽然在package.json配置了type文件的指向，但依旧需要在main.ts里显示引入才有类型提示(引入之后有提示了，但也会显示export * from 'xxx', 找不到文件)
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