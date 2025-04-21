// 进行整合组件，最终实现导出
import Switch from './src/switch.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BSwitch = withInstall(Switch)
export default BSwitch

export * from './src/switch'// 导出所有类型