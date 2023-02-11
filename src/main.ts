import { createApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-ignore
import wx from "weixin-js-sdk";

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide('wx', wx)

app.mount('#app')
