// 进行整合组件，最终实现导出
import Input from './src/input.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BInput = withInstall(Input)
export default BInput

export * from './src/input' // 导出所有类型
