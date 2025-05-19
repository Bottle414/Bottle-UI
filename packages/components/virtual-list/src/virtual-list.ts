/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

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
    dynamic: Boolean,// 是否启用动态加载
    items: {
      type: Array,
      default: () => []
    }
} as const

export type VirtualListProps = ExtractPropTypes<typeof virtualListProps>