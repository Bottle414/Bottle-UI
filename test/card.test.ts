import { mount } from '@vue/test-utils'
import BCard from '@bottle-ui/components/card'

describe('BCard Props & Slots Test', () => {
    test('should render with default shadow (hover)', () => {
        const wrapper = mount(BCard)
        expect(wrapper.classes()).toContain('is-hover')
    })

    test('should render with custom shadow (always)', () => {
        const wrapper = mount(BCard, {
            props: {
                shadow: 'always'
            }
        })
        expect(wrapper.classes()).toContain('is-always')
    })

    test('should apply custom bodyClass', () => {
        const wrapper = mount(BCard, {
            props: {
                bodyClass: 'custom-body'
            }
        })
        expect(wrapper.find('.b-card__body').classes()).toContain('custom-body')
    })

    test('should apply inline style to body', () => {
        const wrapper = mount(BCard, {
            props: {
                bodyStyle: 'padding: 10px; background-color: red;'
            }
        })
        const bodyEl = wrapper.find('.b-card__body').element as HTMLElement
        expect(bodyEl.style.padding).toBe('10px')
        expect(bodyEl.style.backgroundColor).toBe('red')
    })

    test('should render header slot', () => {
        const wrapper = mount(BCard, {
            slots: {
                header: '<div class="test-header">Header</div>'
            }
        })
        expect(wrapper.find('.b-card__header').exists()).toBe(true)
        expect(wrapper.find('.test-header').text()).toBe('Header')
    })

    test('should render footer slot', () => {
        const wrapper = mount(BCard, {
            slots: {
                footer: '<div class="test-footer">Footer</div>'
            }
        })
        expect(wrapper.find('.b-card__footer').exists()).toBe(true)
        expect(wrapper.find('.test-footer').text()).toBe('Footer')
    })
})
