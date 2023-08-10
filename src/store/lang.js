import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useLangStore = defineStore('lang', () => {
    const selectedLang = ref('es')

    const changeLang = (lang) => {
        selectedLang.value = lang} 
    return {
        selectedLang,
        changeLang
    }
})