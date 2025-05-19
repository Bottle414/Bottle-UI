/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

// 进行整合组件，最终实现导出
import VirtualList from './src/vertual-list.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BVirtualList = withInstall(VirtualList)
export * from './src/virtual-list'

export default BVirtualList

declare module 'vue' {
    export interface GlobalComponents {
        BVirtualList: typeof BVirtualList
    }
}