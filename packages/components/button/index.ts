/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

// 进行整合组件，最终实现导出
import Button from './src/button.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'
// 重新回到原始导出方式
export * from './src/button'

export const BButton = withInstall(Button)
export default BButton

declare module 'vue' {
    export interface GlobalComponents {
        BButton: typeof BButton
    }
}