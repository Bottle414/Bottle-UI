/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

import { ExtractPropTypes, PropType } from "vue"

export type ShadowType = 'always' | 'hover' | 'never'

export const cardProps = {
    shadow: {
        type: String as PropType<ShadowType>,
        default: 'hover'
    },
    bodyStyle: {
        type: [Object, Array, String] as PropType<Object | Array<any> | String>,
        default: ''
    },
    bodyClass: {
        type: String,
        default: ''
    }
}as const

export type CardProps = ExtractPropTypes<typeof cardProps>