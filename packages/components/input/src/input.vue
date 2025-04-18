<template>
    <div :class="[ns.b()]">
        <span v-if="slots.prefix" :class="ns.e('prefix')">
            <slot name="prefix"></slot>
        </span>
        <label>
            {{ label }}
            <!-- prettier-ignore -->
            <input
                :class="ns.e('inner')"
                :type="showPassword ? (passwordVisiable ? 'text' : 'password') : type"
                v-bind="attrs"
                :placeholder="placeholder"
                :clearable="clearable"
                :disabled="disabled"
                :readonly="readonly"
                @input="handleInput"
                @change="handleChange"
                @blur="handleBlur"
                @clear="handleClear"
                @focus="handleFocus"
                ref="input"
            />
        </label>
        <!-- 如果输入了多余的属性，直接绑定输入框 -->
        <span v-if="slots.suffix" :class="ns.e('suffix')">
            <slot name="suffix"></slot>
            <BIcon v-if="showVisible" @click="handlePasswordVisible">E</BIcon>
            <BIcon v-if="showClear" @click="handlePasswordClear">X</BIcon>
        </span>
    </div>
</template>

<script lang="ts" setup>
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import BIcon from '@bottle-ui/components/icon'
    import { inputEmits, inputProps } from './input'
    import { formItemContextKey } from '@bottle-ui/components/form/src/form-item'
    import {
		computed,
        nextTick,
        ref,
        useAttrs,
        useSlots,
        useTemplateRef,
        watch,
        inject
    } from 'vue'

    const ns = useNamespace('input')
    const props = defineProps(inputProps)
    const emits = defineEmits(inputEmits)
    const attrs = useAttrs()
    const slots = useSlots()
    const input = useTemplateRef<HTMLInputElement>('input')
    const passwordVisiable = ref(false)

    // 注入属性
    const formItemContext = inject(formItemContextKey)

    function setNativeValue(value: string | number) {
        const inputEle = input.value
        if (inputEle) {
            inputEle.value = String(props.modelValue)
        }
    }

    function focus() {
        nextTick(() => {
            // 渲染完毕后重新获取焦点
            input.value?.focus()
        })
    }

	const showVisible = computed(() => {
		// 同时满足以下条件才能可见
		return props.modelValue && props.showPassword && !props.disabled && !props.readonly
	})

	const showClear = computed(() => {
		// 同时满足以下条件才能可见
		return props.modelValue && props.clearable && !props.disabled && !props.readonly
	})

    function handlePasswordVisible() {
        passwordVisiable.value = !passwordVisiable.value
        focus()
    }

	function handlePasswordClear() {
		const inputEle = input.value
        if (inputEle){
			inputEle.value = ''
		}
        focus()
    }

    function handleInput(e: Event) {
        const value = (e.target as HTMLInputElement).value
        emits('input', value)
        emits('update:modelValue', value)
    }

    function handleChange(e: Event) {
        const value = (e.target as HTMLInputElement).value
        emits('change', value)
    }

    function handleBlur(e: FocusEvent) {
        // 触发blur时候的校验
        formItemContext?.validate('blur')
        emits('blur', e)
    }

    function handleClear(e: Event) {
        emits('clear')
    }

    function handleFocus(e: FocusEvent) {
        emits('focus', e)
    }

    watch(
        () => props.modelValue,
        (value) => {
            // 触发change校验 触发了form-item的
            formItemContext?.validate('change')
            setNativeValue(value)
        }
    )

    defineOptions({
        name: 'BInput',
        inheritAttrs: false
    })
</script>
