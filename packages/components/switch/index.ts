// 进行整合组件，最终实现导出
import Switch from './src/switch.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BSwitch = withInstall(Switch)
export * from './src/switch'// 导出所有类型

export default BSwitch

declare module 'vue' {
    export interface GlobalComponents {
        BSwitch: typeof BSwitch
    }
}