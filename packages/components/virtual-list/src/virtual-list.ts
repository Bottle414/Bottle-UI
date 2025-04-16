import { ExtractPropTypes, PropType } from "vue"

export const virtualListProps = {
    size: {
      type: Number,
      default: 30
    },
    remain: {
      type: Number,
      default: 8
    },
    items: {
      type: Array,
      default: () => []
    }
} as const

export type VirtualListProps = ExtractPropTypes<typeof virtualListProps>