/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

// vite.config.ts
/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            entryRoot: 'packages',
            outDir: 'packages/dist/types',
            include: ['packages/components'],
            staticImport: true,
            rollupTypes: true // 加上这句可以正常生成组件提示，但没有props提示。移除之后可以有props提示，但是在各种export * from 'xxx'的位置会报错（用新的项目测试可以发现），怀疑是因为文件名有.d.ts后缀，但export那里却没有导致的
            // 除了这个问题，还有虽然在package.json配置了type文件的指向，但依旧需要在main.ts里显示引入才有类型提示(引入之后有提示了，但也会显示export * from 'xxx', 找不到文件)
        })
    ],
    css: {
      postcss: './postcss.config.js'
    },
    resolve: {
        alias: {
            '@bottle-ui': path.resolve(__dirname, './packages')
        }
    },
    test: {
        environment: 'jsdom',
        globals: true,
        include: ['test/**/*.test.ts'],
        coverage: {
            reporter: ['text', 'html'],
            include: ['packages/components/**/*.vue']
        }
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
                    vue: 'Vue' // 外部依赖的全局变量名
                }
            }
        }
    }
})

/*
  当你使用 vitest --coverage（或类似命令）时，Vitest 使用 c8（基于 V8 引擎）生成代码覆盖率报告，它会在默认的 coverage/ 目录下生成以下内容：
  文件/文件夹	说明
  index.html	打开这个文件即可查看图形化的覆盖率报告（推荐 ✅）
  files/ 或 html/	是 HTML 视图报告的资源（每个文件的覆盖详情页面）
  .json, .js, .lcov	是机器可读的覆盖率原始数据，可以用于 CI/CD 或上传到像 Coveralls、Codecov 这种平台
  .ts/.vue 等源码的对应 .js 转换版本	是为了支持 JS 引擎收集覆盖信息时准确映射到源代码的文件

  reporter: ['text'] 就只输出到终端
  reporter: ['html'] 就只生成 HTML 页面

  vitest run test/button.test.ts --coverage
  这样只生成你关心组件的覆盖率。
*/
