/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

import { ExtractPropTypes } from "vue"

const collapseProps = {
    accordion: Boolean
} as const

export type CollapseProps = ExtractPropTypes<typeof collapseProps>