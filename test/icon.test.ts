import { mount } from '@vue/test-utils'
import BIcon from '@bottle-ui/components/icon'

describe('BIcon Props & Slots Test', () => {
    test('should render with default class', () => {
        const wrapper = mount(BIcon)
        expect(wrapper.classes()).toContain('b-icon')
    })

    test('should apply color style when color prop is passed', () => {
        const wrapper = mount(BIcon, {
            props: {
                color: 'red'
            }
        })
        expect(wrapper.attributes('style')).toContain('color: red;')
    })

    test('should apply opacity when depth is passed', () => {
        const wrapper = mount(BIcon, {
            props: {
                depth: 2
            }
        })
        expect(wrapper.attributes('style')).toContain('opacity: 0.5;')
    })

    test('should apply font-size when size is passed', () => {
        const wrapper = mount(BIcon, {
            props: {
                size: 24
            }
        })
        expect(wrapper.attributes('style')).toContain('font-size: 24px;')
    })

    test('should apply all styles together', () => {
        const wrapper = mount(BIcon, {
            props: {
                color: 'blue',
                depth: 3,
                size: 32
            }
        })
        const style = wrapper.attributes('style')
        expect(style).toContain('color: blue;')
        expect(style).toContain('opacity: 0.75;')
        expect(style).toContain('font-size: 32px;')
    })

    test('should render slot content', () => {
        const wrapper = mount(BIcon, {
            slots: {
                default: '<svg class="custom-icon" />'
            }
        })
        expect(wrapper.find('.custom-icon').exists()).toBe(true)
    })
})
