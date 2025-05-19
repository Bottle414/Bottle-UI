/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

import { h, defineComponent } from 'vue'
// 手搓的三角形，暂定
export default defineComponent({
  name: 'expandIcon',
  render() {
    return h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 16 16',
        width: '16',
        height: '16',
        fill: 'currentColor'
      },
      [
        h('path', {
          d: 'M4 6l4 4 4-4z' // 一个向下的三角形
        })
      ]
    )
  }
})
