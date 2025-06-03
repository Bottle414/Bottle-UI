📘 [English](README.md) | 📙 [简体中文](README-zh.md)


# Bottle-UI Component Library 🎉
Hi! This is a Vue 3 component library I built to practice component encapsulation, communication, TypeScript usage, and CSS skills.  
It's also my final project for a Web development course. 🦝

Live Documentation (Vercel):  [https://bottle-ui-eta.vercel.app](https://bottle-ui-eta.vercel.app)

![npm version](https://img.shields.io/npm/v/@bottle414/bottle-ui)
![downloads](https://img.shields.io/npm/dt/@bottle414/bottle-ui)
![license](https://img.shields.io/npm/l/@bottle414/bottle-ui)

## Installation 🔧
<details>
  <summary>npm</summary>
  
```js
npm i @bottle414/bottle-ui
```
</details>
<details>
  <summary>pnpm</summary>
  
```js
  pnpm i @bottle414/bottle-ui
```
</details>
<details>
  <summary>yarn</summary>
  
```js
  yarn add @bottle414/bottle-ui
```
</details>

## Usage 📏
### Import styles
```bash
import '../node_modules/@bottle414/bottle-ui/dist/shared.css'
```

###  (Optional) Enable Volar type support
```bash
import '../node_modules/@bottle414/bottle-ui/dist/types/bottle-ui.es.d.ts'
```

### Import components
You can import globally or just the ones you need.

#### Global Import 🌟
```js
import { createApp } from 'vue'
import App from './App.vue'
import BottleUI from '@bottle414/bottle-ui'

const app = create(App)
app.use(BottleUI)
app.mount()
```

#### Partial Import 🍊
You can register components at the entry point:
```js
import { createApp } from 'vue'
import App from './App.vue'
import { BButton, BIcon } from '@bottle414/bottle-ui'

const app = createApp(App)
app.use(BButton)
app.use(BIcon)
app.mount('#app')
```

Or import them directly inside a component:
```js
<template>
    <BButton> Hello! <BButton/>
<template/>

<script>
    import { BButton } from '@bottle414/bottle-ui'
<script/>
```

And you're ready to go! 🎉🦝

## TODO
- [ ] Complete custom style support

- [ ] Complete test files

- [ ] Better Accessible support

- [ ] Better compatibility support

- [ ] Optimize vritual list