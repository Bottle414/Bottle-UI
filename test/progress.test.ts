import { mount } from '@vue/test-utils'
import BProgress from '@bottle-ui/components/progress'

describe('BProgress Props Test', () => {
    test('should render line progress with correct percentage and style', () => {
        const wrapper = mount(BProgress, {
            props: {
                type: 'line',
                percentage: 60,
                width: 300,
                height: 20,
                color: '#ccc'
            }
        })

        const line = wrapper.find('.b-progress__line')
        expect(line.exists()).toBe(true)
        expect(line.attributes('role')).toBe('progressbar')
        expect(line.attributes('aria-valuenow')).toBe('60')
        expect(line.element.getAttribute('style')).toContain('width: 60%')
        expect(line.element.getAttribute('style')).toContain(
            'background: rgb(204, 204, 204)'
        )
    })

    test('should render correct status class', async () => {
        const wrapper = mount(BProgress, {
            props: {
                percentage: 80,
                status: 'error'
            }
        })

        const bar = wrapper.find('.b-progress__line')
        expect(bar.classes()).toContain('is-error')
    })

    test('should render as circle progress', () => {
        const wrapper = mount(BProgress, {
            props: {
                type: 'circle',
                percentage: 75
            }
        })

        const circle = wrapper.find('svg')
        expect(circle.exists()).toBe(true)
        expect(wrapper.find('.b-progress__circle').exists()).toBe(true)
    })

    test('should render as dashboard progress', () => {
        const wrapper = mount(BProgress, {
            props: {
                type: 'dashboard',
                percentage: 40
            }
        })

        const dashboard = wrapper.find('.b-progress__dashboard')
        expect(dashboard.exists()).toBe(true)
    })

    test('should apply indeterminate class when true', () => {
        const wrapper = mount(BProgress, {
            props: {
                indeterminate: true,
                type: 'line'
            }
        })

        expect(wrapper.find('.b-progress__line').classes()).toContain(
            'is-indeterminate'
        )
    })

    test('should render percentage text', () => {
        const wrapper = mount(BProgress, {
            props: {
                percentage: 88
            }
        })

        const text = wrapper.find('.b-progress__text')
        expect(text.text()).toContain('88%')
    })
})
