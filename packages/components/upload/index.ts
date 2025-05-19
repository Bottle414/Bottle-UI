/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

// 进行整合组件，最终实现导出
import Upload from './src/upload.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BUpload = withInstall(Upload)
export * from './src/upload'// 导出所有类型

export default BUpload

declare module 'vue' {
    export interface GlobalComponents {
        BUpload: typeof BUpload
    }
}