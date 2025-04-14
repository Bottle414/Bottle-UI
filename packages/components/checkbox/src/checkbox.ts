// checkbox所需要的一些属性与类型
import { ExtractPropTypes, PropType } from 'vue'// 两个自带的泛型共聚

export const checkboxProps = {
    label: String,
    color: String,
    size: [Number, String] as PropType<String | Number>,
    value: [String, Number] as PropType<String | Number>,
    checked: Boolean,
    indeterminate: Boolean,
    disabled: Boolean
} as const// 变成只读的

// 抽离对象类型，而不是推导出Constructor
export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>