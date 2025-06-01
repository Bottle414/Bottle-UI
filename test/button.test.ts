import { mount } from '@vue/test-utils'
import { BButton } from '@bottle-ui/components/button'

/*
    vitest: 核心测试框架
    jsdom: 模拟浏览器环境
    @testing-library/vue: 编写符合用户行为的测试
    @testing-library/jest-dom: 提供更多 DOM matchers
    @vue/test-utils: Vue 官方测试工具（如挂载组件）
*/

describe('button props test', () => {
    test('test for round', () => {
        const wrapper = mount(BButton, {
            props: {
                round: true
            }
        })
        expect(wrapper.classes()).toContain('is-round')
    })

    test('test for disabled', () => {
        const wrapper = mount(BButton, {
            props: {
                disabled: true
            }
        })

        expect(wrapper.find('button').element.disabled).toBe(true)
    })
    
})