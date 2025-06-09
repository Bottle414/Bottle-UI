/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

import { ExtractPropTypes, PropType } from "vue"

export interface Position {
  top: number,
  bottom: number,
  height: number
}

export const virtualListProps = {
    size: {
      type: Number,
      default: 30
    },
    bufferScale: {
      type: Number,
      default: .2
    },
    height: {
      type: Number,
      default: 200
    },
    items: {
      type: Array,
      default: () => []
    }
} as const

export type VirtualListProps = ExtractPropTypes<typeof virtualListProps>