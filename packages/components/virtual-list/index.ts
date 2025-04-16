// 进行整合组件，最终实现导出
import VirtualList from './src/vertual-list.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BVirtualList = withInstall(VirtualList)
export default BVirtualList

export * from './src/virtual-list'