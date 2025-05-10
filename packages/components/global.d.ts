// global.d.ts 提供全局导出时的组件提示
declare module 'vue' {
    export interface GlobalComponents {
        BButton: typeof import('./button/index')['BButton']
        BCard: typeof import('./card/index')['BCard']
        BCheckbox: typeof import('./checkbox/index')['BCheckbox']
    }
}
  
export {}  