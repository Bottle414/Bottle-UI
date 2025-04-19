// 进行整合组件，最终实现导出
import Upload from './src/upload.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BUpload = withInstall(Upload)
export default BUpload

export * from './src/upload'// 导出所有类型

declare module 'vue' {
    export interface GlobalComponents {
        BUpload: typeof Upload
    }
}