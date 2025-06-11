import { mount } from '@vue/test-utils'
import { BButton } from '@bottle-ui/components/button'

/*
    vitest: 核心测试框架
    jsdom: 模拟浏览器环境
    @testing-library/vue: 编写符合用户行为的测试
    @testing-library/jest-dom: 提供更多 DOM matchers
    @vue/test-utils: Vue 官方测试工具（如挂载组件）
*/

describe('BButton Props & Events', () => {
    test('renders with default props and class', () => {
        const wrapper = mount(BButton)
        expect(wrapper.classes()).toContain('b-button')
        expect(wrapper.classes()).toContain('b-button--default')
        expect(wrapper.classes()).toContain('b-button--32') // 注意：size 默认为 '32'
    })

    test('applies type and size classes', () => {
        const wrapper = mount(BButton, {
            props: {
                type: 'primary',
                size: 'large'
            }
        })
        expect(wrapper.classes()).toContain('b-button--primary')
        expect(wrapper.classes()).toContain('b-button--large')
    })

    test('applies round and circle classes', () => {
        const wrapper = mount(BButton, {
            props: {
                round: true,
                circle: true
            }
        })
        expect(wrapper.classes()).toContain('is-round')
        expect(wrapper.classes()).toContain('is-circle')
    })

    test('disabled and loading state', () => {
        const wrapper = mount(BButton, {
            props: {
                disabled: true
            }
        })
        expect(wrapper.attributes('disabled')).toBeDefined()
        expect(wrapper.classes()).toContain('is-disabled')
    })

    test('loading shows loading icon and hides slot icon', () => {
        const wrapper = mount(BButton, {
            props: {
                loading: true
            },
            slots: {
                default: 'Click Me',
                icon: '<span class="custom-icon">ICON</span>'
            }
        })
        expect(wrapper.find('.is-loading').exists()).toBe(true)
        expect(wrapper.find('.custom-icon').exists()).toBe(false)
    })

    test('renders default and icon slot when not loading', () => {
        const wrapper = mount(BButton, {
            slots: {
                default: 'Text',
                icon: '<span class="icon-test">ICON</span>'
            }
        })
        expect(wrapper.text()).toContain('Text')
        expect(wrapper.find('.icon-test').exists()).toBe(true)
    })

    test('emits click and mousedown', async () => {
        const wrapper = mount(BButton)
        await wrapper.trigger('click')
        await wrapper.trigger('mousedown')

        expect(wrapper.emitted('click')).toBeTruthy()
        expect(wrapper.emitted('mousedown')).toBeTruthy()
    })

    test('click triggers scrollTo when toTop is true', async () => {
        const scrollToMock = vi.fn()
        Object.defineProperty(window, 'scrollTo', { value: scrollToMock })

        const wrapper = mount(BButton, {
            props: {
                toTop: true
            }
        })

        await wrapper.trigger('click')
        expect(scrollToMock).toHaveBeenCalledWith({
            top: 0,
            behavior: 'smooth'
        })
    })
})
