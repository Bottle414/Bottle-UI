<template>
    <!-- <BIcon color="#bcc" :size="500" :depth="4">
        <AndroidOutlined/>
    </BIcon>
    <BIcon>
      <AndroidOutlined/>
    </BIcon> -->
    
    <!-- <BButton color="#eef" size="12" :loading="true" @click="handler">
        Click here to send message
    </BButton> -->
    <BCheckbox label="12" color="#bebe" v-model="checkvalue" :indeterminate="true">Hi</BCheckbox>
    <BTooltip content="Hello" background="#333">
        <BButton size="5"/>
    </BTooltip>
    <BSelect>
        <BOption value="3333"></BOption>
    </BSelect>
    
    <BTree :data="data" :keyField="'key'" v-model:selectedKeys="selected"></BTree>

    <BVirtualList :items="items">
        <template #default="{ data }">
            <p>{{ data }}</p>
        </template>
    </BVirtualList>
</template>

<script lang='ts' setup>
// import BIcon from '@bottle-ui/components/icon';
import BTree from '@bottle-ui/components/tree'
import BCheckbox from '@bottle-ui/components/checkbox'
import BButton from '@bottle-ui/components/button'
import BSelect from '@bottle-ui/components/select'
import BOption from '@bottle-ui/components/select'
import BTooltip from '@bottle-ui/components/tooltip'
import BVirtualList from '@bottle-ui/components/virtual-list'
import type { TreeOption } from '@bottle-ui/components/tree'
import { ref, watch } from 'vue'

const selected = ref([])
const items = ref([1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,11,2,1,1,1,1,1,1,11,2,1,1,1,1,1,1,1])// 假数据

const checkvalue = ref(false)

watch(checkvalue, () => {
    console.log('checkvalue: ' + checkvalue.value);
})

watch(selected, () => {
    console.log('selectedout', selected.value);
})

const asyncload = async (node: TreeOption) => {// 模拟异步加载
  // 模拟异步接口
  await new Promise(resolve => setTimeout(resolve, 3000))

  // 返回新的子节点数据（注意是 TreeOption[] 结构）
  return [
    { key: '3', label: '异步子节点1', children:[] , disabled: true},
    { key: '4', label: '异步子节点2', children: [{
        key: '5',
        label: 'Hi'
    }], isLeaf: false }
  ]
}

function handler(){
    console.log('kkkk');
}

function handlerLoad(){
    console.log('load');
}

const data = [
    {
        label: "Node 1",
        key: "1",
        isLeaf: false,
        children: [
            {
                label: "Node 1.1",
                key: "1.1",
                disabled: true,
                children: []
            },
            {
                label: "Node 1.2",
                key: "1.2",
                children: []
            }
        ]
    },
    {
        label: "Node 2",
        key: "2",
        children: []
    }
];

</script>

<style scoped>
  
</style>