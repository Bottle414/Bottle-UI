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
    <BCheckbox :disabled="true" label="12" indeterminate value="20" color="red"/>
    <BTooltip content="Hello" background="#333">
        <BButton size="5"/>
    </BTooltip>
    <BSelect>
        <BOption value="3333"></BOption>
    </BSelect>
    <BTree :data="data" :checked="[1]" :on-load="load"/>
</template>

<script lang='ts' setup>
// import BIcon from '@bottle-ui/components/icon';
import BTree from '@bottle-ui/components/tree'
import BCheckbox from '@bottle-ui/components/checkbox'
import BButton from '@bottle-ui/components/button'
import BSelect from '@bottle-ui/components/select'
import BOption from '@bottle-ui/components/select'
import BTooltip from '@bottle-ui/components/tooltip'

const load = async (node: Node) => {// 模拟异步加载
  console.log('加载节点:', node)
  // 模拟异步接口
  await new Promise(resolve => setTimeout(resolve, 1500))

  // 返回新的子节点数据（注意是 TreeOption[] 结构）
  return [
    { key: `${node.key}-1`, label: '异步子节点1', children:[] , disabled: true},
    { key: `${node.key}-2`, label: '异步子节点2', children: [] }
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
        children: [
            // {
            //     label: "Node 1.1",
            //     key: "1.1",
            //     children: []
            // },
            // {
            //     label: "Node 1.2",
            //     key: "1.2",
            //     children: []
            // }
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