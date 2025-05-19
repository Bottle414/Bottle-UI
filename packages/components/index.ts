/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

// 提供按需导入方法
export * from './button'
// export * from './calendar'
export * from './card'
export * from './checkbox'
export * from './form'
export * from './icon'
export * from './input'
export * from './progress'
export * from './select'
export * from './switch'
export * from './upload'
export * from './tooltip'
export * from './tree'
export * from './collapse'
export * from './virtual-list'

// 此处声明全局注册函数
import BButton from './button'
import BCard from './card'
import BCheckbox from './checkbox'
import { BForm, BFormItem } from './form'
import BIcon from './icon'
import BInput from './input'
import BProgress from './progress'
import BSelect from './select'
import BSwitch from './switch'
import BUpload from './upload'
import BTooltip from './tooltip'
import BTree from './tree'
import BVirtualList from './virtual-list'
import BCollapse from './collapse'

const allComponents = { BButton, BCard, BCheckbox, BForm, BFormItem, BIcon, BProgress, BSelect, BInput, BSwitch, BUpload, BTooltip, BTree, BVirtualList, BCollapse }
export default allComponents