import { mount } from '@vue/test-utils'
import BTooltip from '@bottle-ui/components/tooltip'

describe('BTooltip Props & Slots Test', () => {
    test('should render default placement (bottom)', () => {
        const wrapper = mount(BTooltip, {
            props: {
                content: 'Hello Tooltip'
            }
        })
        const contentEl = wrapper.find('.b-tooltip__content')
        expect(contentEl.exists()).toBe(true)
        expect(contentEl.classes()).toContain('is-bottom')
    })

    test('should render custom placement (top)', () => {
        const wrapper = mount(BTooltip, {
            props: {
                placement: 'top',
                content: 'Top Tooltip'
            }
        })
        const contentEl = wrapper.find('.b-tooltip__content')
        expect(contentEl.classes()).toContain('is-top')
    })

    test('should render with light theme', () => {
        const wrapper = mount(BTooltip, {
            props: {
                light: true,
                content: 'Light Tooltip'
            }
        })
        const contentEl = wrapper.find('.b-tooltip__content')
        expect(contentEl.classes()).toContain('is-light')
    })

    test('should render correct content', () => {
        const wrapper = mount(BTooltip, {
            props: {
                content: 'Tooltip Content'
            }
        })
        expect(wrapper.find('.b-tooltip__content').text()).toBe(
            'Tooltip Content'
        )
    })

    test('should render default slot', () => {
        const wrapper = mount(BTooltip, {
            props: {
                content: 'Tooltip'
            },
            slots: {
                default: '<button>Hover me</button>'
            }
        })
        expect(wrapper.find('button').exists()).toBe(true)
        expect(wrapper.find('button').text()).toBe('Hover me')
    })
})
