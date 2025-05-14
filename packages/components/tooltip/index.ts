// 进行整合组件，最终实现导出
import Tooltip from './src/tooltip.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BTooltip = withInstall(Tooltip)
export default BTooltip

export * from './src/tooltip'// 导出所有类型

declare module 'vue' {
    export interface GlobalComponents {
        BTooltip: typeof Tooltip
    }
}