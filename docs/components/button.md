<script setup>
import { ref } from 'vue'
import BButton from '@Bottle-UI/components/button'
import BIcon from '@Bottle-UI/components/icon'

</script>

# Button 按钮

## 基础用法
使用type、round、circle来定义按钮样式

<Example class='example'>
    <BButton type='success'>Success</BButton>
    <BButton type='warning'>Warning</BButton>
    <BButton type='error'>Error</BButton>
    <BButton type='info'>Info</BButton>
    <BButton type='success' round>Success</BButton>
    <BButton type='warning' round>Warning</BButton>
    <BButton type='error' round>Error</BButton>
    <BButton type='info' round>Info</BButton>
    <BButton type='success' circle>Success</BButton>
    <BButton type='warning' circle>Warning</BButton>
    <BButton type='error' circle>Error</BButton>
    <BButton type='info' circle>Info</BButton>
</Example>

## 禁用状态
使用disabled属性设置按钮禁用
<Example>
    <BButton type='success' disabled>Success</BButton>
    <BButton type='success' round disabled>Success</BButton>
    <BButton type='success' circle disabled>Success</BButton>
    <template #text>
        没有插进去啊
        算了
    </template>
</Example>

## 按钮图标
直接将图标嵌入按钮

<Example>
    <BButton>
        Icon
        <BIcon color="#eef" :size="20" :depth="4">
            X
        </BIcon>
    </BButton>
</Example>

## 加载状态
使用loading属性使按钮变为加载状态(按钮加载时会变为禁用)

<Example>
    <BButton loading>Loading</BButton>
</Example>

## 改变大小
通过设置size属性来改变按钮大小

<Example>
    <BButton size='large'>Large</BButton>
    <BButton size='large' round>Large</BButton>
    <BButton size='medium'>Medium</BButton>
    <BButton size='samll'>Small</BButton>
    <BButton size='samll' circle>Small</BButton>
    <BButton style="width: 100px; height: 40px;" round>Custom</BButton>
</Example>

# Button API
## Button Attributes

<Table></Table>

<style module>
</style>