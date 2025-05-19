/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

import { withInstall } from '@bottle-ui/utils/withInstall'
import Select from './src/select.vue'

export const BSelect = withInstall(Select)
export * from './src/select'

export default BSelect

declare module 'vue' {
    export interface GlobalComponents {
        BSelect: typeof BSelect
    }
}