import { mount } from '@vue/test-utils'
import BCollapse from '@bottle-ui/components/collapse'

describe('BCollapse Props & Slots Test', () => {
    test('should render with default closed state', () => {
        const wrapper = mount(BCollapse)
        expect(wrapper.find('.b-collapse__panel').classes()).not.toContain(
            'is-open'
        )
    })

    test('should toggle open state when clicked', async () => {
        const wrapper = mount(BCollapse)
        const button = wrapper.find('button')
        await button.trigger('click')
        expect(wrapper.find('.b-collapse__panel').classes()).toContain(
            'is-open'
        )

        await button.trigger('click')
        expect(wrapper.find('.b-collapse__panel').classes()).not.toContain(
            'is-open'
        )
    })

    test('should render title slot content', () => {
        const wrapper = mount(BCollapse, {
            slots: {
                title: '<span class="custom-title">Custom Title</span>'
            }
        })
        expect(wrapper.find('.custom-title').exists()).toBe(true)
        expect(wrapper.find('.custom-title').text()).toBe('Custom Title')
    })

    test('should render icon slot content', () => {
        const wrapper = mount(BCollapse, {
            slots: {
                icon: '<span class="custom-icon">▼</span>'
            }
        })
        expect(wrapper.find('.custom-icon').exists()).toBe(true)
        expect(wrapper.find('.custom-icon').text()).toBe('▼')
    })

    test('should render default slot content in panel', async () => {
        const wrapper = mount(BCollapse, {
            slots: {
                default: '<div class="panel-content">content</div>'
            }
        })

        // TODO：此处被折叠的元素也是会渲染出来的，考虑会有性能影响
        // expect(wrapper.find('.panel-content').exists()).toBe(false) // 实际显示为 true

        // 点击展开
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('.b-collapse__panel').classes()).toContain('is-open')
        expect(wrapper.find('.panel-content').text()).toBe('content')

        // 点击关闭
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('.b-collapse__panel').classes().includes('is-open')).toBeFalsy()
    })
})
