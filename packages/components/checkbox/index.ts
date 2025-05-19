/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

import Checkbox from './src/checkbox.vue'
import { withInstall } from '@bottle-ui/utils/withInstall'

export const BCheckbox = withInstall(Checkbox)
export * from './src/checkbox'

export default BCheckbox

declare module 'vue' {
    export interface GlobalComponents {
        BCheckbox: typeof BCheckbox
    }
}