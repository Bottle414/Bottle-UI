// 进行整合组件，最终实现导出
import Icon from './src/icon.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BIcon = withInstall(Icon)
export default BIcon

export * from './src/icon'// 导出所有类型

declare module 'vue' {
    export interface GlobalComponents {
        BIcon: typeof Icon
    }
}