import { onMounted, onUnmounted, ref } from 'vue'

/**
 * 处理自动滚动, 默认滚动
 */

// 可选参数
export interface scrollOptions {
    threshold: number// 滚动阈值
    onHandleScroll: (...args: any[]) => any// 处理滚动
    onAddScroll: (...args: any[]) => any// 处理滚动添加
    onRemoveScroll: (...args: any[]) => any// 处理滚动移除
}

export type ScrollOptions = Partial<scrollOptions>

export function useAutoScroll (elem: HTMLElement, options: ScrollOptions = {}) {
    const shouldAutoScroll = ref(true)

    const { threshold = 50 , onHandleScroll, onAddScroll, onRemoveScroll} = options

    const handleScroll = () => {
        if (!elem) return
        const distance = elem.scrollHeight - elem.scrollTop - elem.clientHeight
        shouldAutoScroll.value = distance < threshold
        if (onHandleScroll) onHandleScroll()
    }

    const scrollToBottom = () => {
        if (elem && shouldAutoScroll.value) {
            elem.scrollTop = elem.scrollHeight
        }
    }

    const resetAutoScroll = () => {
        shouldAutoScroll.value = true
    }

    onMounted(() => {
        if (elem) {
            elem.addEventListener('scroll', handleScroll)
            if (onAddScroll) onAddScroll()
        }
    })

    onUnmounted(() => {
        if (elem) {
            elem.removeEventListener('scroll', handleScroll)
            if (onRemoveScroll) onRemoveScroll()
        }
    })

    return {
        shouldAutoScroll,
        scrollToBottom,
        resetAutoScroll
    }
}