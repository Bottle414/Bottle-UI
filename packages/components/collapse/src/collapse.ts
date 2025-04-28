import { ExtractPropTypes, PropType } from "vue"

const collapseProps = {
    accordion: Boolean
} as const

export type CollapseProps = ExtractPropTypes<typeof collapseProps>