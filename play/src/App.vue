<template>
    <!-- <BIcon color="#bcc" :size="500" :depth="4">
        <AndroidOutlined/>
    </BIcon>
    <BIcon>
      <AndroidOutlined/>
    </BIcon> -->
    <BTree :data="data" :checked="[1]"/>
    <!-- <BButton color="#eef" size="12" :loading="true" @click="handler">
        Click here to send message
    </BButton> -->
    <BCheckbox label="12" indeterminate value="20" color="red"/>
    <BSelect/>
</template>

<script lang='ts' setup>
// import BIcon from '@bottle-ui/components/icon';
import { AndroidOutlined } from '@vicons/antd'
import BTree from '@bottle-ui/components/tree'
import BCheckbox from '@bottle-ui/components/checkbox'
import BButton from '@bottle-ui/components/button'
import BSelect from '@bottle-ui/components/select'

function handler(){
    console.log('kkkk');
}

const data = [
    {
        label: "Node 1",
        key: "1",
        children: [
            {
                label: "Node 1.1",
                key: "1.1",
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