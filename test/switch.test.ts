import { mount } from '@vue/test-utils'
import BSwitch from '@bottle-ui/components/switch'

describe('BSwitch Props & Events Test', () => {
    test('should render with default state (off)', () => {
        const wrapper = mount(BSwitch)
        expect(wrapper.classes()).not.toContain('is-active')
    })

    test('should apply active class and background when modelValue is true', () => {
        const wrapper = mount(BSwitch, {
            props: {
                modelValue: true,
                activeColor: '#ff0000'
            }
        })
        expect(wrapper.classes()).toContain('is-active')
        expect(wrapper.attributes('style')).toContain('background: #ff0000;')
    })

    test('should apply inactive background when modelValue is false', () => {
        const wrapper = mount(BSwitch, {
            props: {
                modelValue: false,
                inactiveColor: '#ccc'
            }
        })
        expect(wrapper.attributes('style')).toContain('background: rgb(204, 204, 204);')
    })

    test('should render activeText when active', () => {
        const wrapper = mount(BSwitch, {
            props: {
                modelValue: true,
                activeText: 'ON'
            }
        })
        expect(wrapper.text()).toContain('ON')
    })

    test('should render inactiveText when inactive', () => {
        const wrapper = mount(BSwitch, {
            props: {
                modelValue: false,
                inactiveText: 'OFF'
            }
        })
        expect(wrapper.text()).toContain('OFF')
    })

    test('should emit update:modelValue when clicked', async () => {
        const wrapper = mount(BSwitch, {
            props: {
                modelValue: false
            }
        })

        await wrapper.find('input[type="checkbox"]').trigger('change')
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')![0]).toEqual([true])
    })

    test('should not emit when disabled', async () => {
        const wrapper = mount(BSwitch, {
            props: {
                modelValue: false,
                disabled: true
            }
        })

        await wrapper.find('input[type="checkbox"]').trigger('change')
        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    test('should have disabled class when disabled', () => {
        const wrapper = mount(BSwitch, {
            props: {
                disabled: true
            }
        })
        expect(wrapper.classes()).toContain('is-disabled')
    })
})
