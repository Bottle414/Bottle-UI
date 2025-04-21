<template>
    <button :class="['btn', variant]" :style="{ backgroundColor: color }">
      KKK
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    color: {
      type: String,
      default: 'blue'
    },
    variant: {
      type: String,
      default: 'primary'
    }
  })
  </script>
  
  <style scoped>
  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }
  .btn.primary {
    color: white;
    background-color: blue;
  }
  .btn.secondary {
    color: blue;
    background-color: white;
    border: 1px solid blue;
  }
  </style>
  