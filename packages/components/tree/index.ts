import Tree from './src/tree.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BTree = withInstall(Tree)// use方式, 具名导出 用在多个组件一起导出的场景里，只引入想要的组件
export default BTree// 默认导出, 简单

declare module 'vue' {// 让ts自动识别注册的全局组件, 可以自动补全组件标签
    export interface ClobalComponents {
        BTree: typeof BTree
    }
}

export * from './src/tree'