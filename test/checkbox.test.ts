import { mount } from '@vue/test-utils'
import BCheckbox from '@bottle-ui/components/checkbox'

describe('BCheckbox Props & Slots Test', () => {
    test('should render checkbox with default props', () => {
        const wrapper = mount(BCheckbox)
        expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
        expect(wrapper.classes()).toContain('b-checkbox')
    })

    test('should render label via prop', () => {
        const wrapper = mount(BCheckbox, {
            props: {
                label: 'test label'
            }
        })
        expect(wrapper.text()).toContain('test label')
    })

    test('should render content via default slot', () => {
        const wrapper = mount(BCheckbox, {
            slots: {
                default: 'slot content'
            }
        })
        expect(wrapper.text()).toContain('slot content')
    })

    test('should bind modelValue correctly (boolean)', () => {
        const wrapper = mount(BCheckbox, {
            props: {
                modelValue: true
            }
        })
        const input = wrapper.find('input[type="checkbox"]')
        expect((input.element as HTMLInputElement).checked).toBe(true)
    })

    test('should support trueValue and falseValue', async () => {
        const wrapper = mount(BCheckbox, {
            props: {
                modelValue: 'off',
                trueValue: 'on',
                falseValue: 'off'
            }
        })
        const input = wrapper.find('input[type="checkbox"]')
        await input.setValue(true)

        const [[val]] = wrapper.emitted('update:modelValue')!
        expect(val).toBe('on')
    })

    test('should apply disabled attribute', () => {
        const wrapper = mount(BCheckbox, {
            props: {
                disabled: true
            }
        })
        const input = wrapper.find('input[type="checkbox"]')
        expect(input.attributes('disabled')).toBeDefined()
    })

    test('should set indeterminate on mount and watch', async () => {
        const wrapper = mount(BCheckbox, {
            props: {
                indeterminate: true
            }
        })
        const input = wrapper.find('input[type="checkbox"]')
            .element as HTMLInputElement
        expect(input.indeterminate).toBe(true)

        await wrapper.setProps({ indeterminate: false })
        expect(input.indeterminate).toBe(false)
    })

    test('should apply custom checkbox color via CSS variable', () => {
        const color = '#ff6600'
        const wrapper = mount(BCheckbox, {
            props: {
                color
            }
        })
        const label = wrapper.find('label').element as HTMLElement
        const style = getComputedStyle(label)
        expect(style.getPropertyValue('--checkbox-color').trim()).toBe(color)
    })

    test('should apply custom checkbox size via CSS variable', () => {
        const size = '20px'
        const wrapper = mount(BCheckbox, {
            props: {
                size
            }
        })
        const label = wrapper.find('label').element as HTMLElement
        const style = getComputedStyle(label)
        expect(style.getPropertyValue('--checkbox-size').trim()).toBe(size)
    })
})

describe('BCheckbox Events Test',() => {
    test('should emit update:modelValue and change event', async () => {
        const wrapper = mount(BCheckbox, {
            props: {
                modelValue: false
            }
        })
        const input = wrapper.find('input[type="checkbox"]')
        await input.setValue(true)

        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('change')).toBeTruthy()

        const [[val]] = wrapper.emitted('update:modelValue')!
        expect(val).toBe(true)
    })
})