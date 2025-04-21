import { ExtractPropTypes } from 'vue'

export const switchProps = {
    modelValue: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    activeColor: {
        type: String,
        default: '#BEBE'
    },
    inactiveColor: {
        type: String,
        default: '#C0CCDA'
    },
    activeText: {
        type: String,
        default: ''
    },
    inactiveText: {
        type: String,
        default: ''
    }
}

export type SwitchProps = ExtractPropTypes<typeof switchProps>

export const switchEmits = {
    'update:modelValue': (val: boolean) => val
}

export type SwitchEmits = typeof switchEmits
