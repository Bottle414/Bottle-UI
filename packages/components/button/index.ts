// 进行整合组件，最终实现导出
import Button from './src/button.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BButton = withInstall(Button)
export default BButton

export * from './src/button'// 导出所有类型

declare module 'vue' {
    export interface GlobalComponents {
        BButton: typeof Button
    }
}