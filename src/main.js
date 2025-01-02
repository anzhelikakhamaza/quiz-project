import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import en from "./locales/en.json"
import es from "./locales/es.json"

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages: {en, es}
})

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.mount('#app');