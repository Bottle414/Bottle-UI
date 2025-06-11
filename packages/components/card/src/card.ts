/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

import { ExtractPropTypes, PropType } from "vue"
import type { StyleValue } from "vue"

export type ShadowType = 'always' | 'hover' | 'never'

export const cardProps = {
    shadow: {
        type: String as PropType<ShadowType>,
        default: 'hover'
    },
    bodyStyle: {
        type: String as PropType<StyleValue>,
        default: ''
    },
    bodyClass: {
        type: String,
        default: ''
    }
}as const

export type CardProps = ExtractPropTypes<typeof cardProps>