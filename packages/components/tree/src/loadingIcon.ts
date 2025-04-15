import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'LoadingIcon',
  render() {
    return h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 50 50',
        width: '16',
        height: '16',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '4',
        'stroke-linecap': 'round',
        class: 'b-tree__icon b-tree__icon--loading'
      },
      [
        h('circle', {
          cx: '25',
          cy: '25',
          r: '20',
          'stroke-opacity': '0.3'
        }),
        h('path', {
          d: 'M45 25a20 20 0 0 1-20 20'
        })
      ]
    )
  }
})
