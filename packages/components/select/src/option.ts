import { PropType ,ExtractPropTypes } from 'vue'

export const optionProps = {
    label: {
        type: String,
        default: 'label'
    },
    value: {
        type: [String, Number, Boolean, Object] as PropType<String | Number | Boolean | Object>,
        default: 'value'
    }
} as const

export type OptionProps = ExtractPropTypes<typeof optionProps>