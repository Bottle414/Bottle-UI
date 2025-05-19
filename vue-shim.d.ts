/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}