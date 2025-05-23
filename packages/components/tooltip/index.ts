/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

// 进行整合组件，最终实现导出
import Tooltip from './src/tooltip.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BTooltip = withInstall(Tooltip)
export * from './src/tooltip'// 导出所有类型

export default BTooltip

declare module 'vue' {
    export interface GlobalComponents {
        BTooltip: typeof BTooltip
    }
}