// 进行整合组件，最终实现导出
import Tree from './src/tree.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BTree = withInstall(Tree)
export * from './src/tree'// 导出所有类型

export default BTree

declare module 'vue' {
    export interface GlobalComponents {
        BTree: typeof BTree
    }
}