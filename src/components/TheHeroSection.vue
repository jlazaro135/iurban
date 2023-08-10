<script setup>
    import { translations } from '@/js/translations';
    import { useLangStore } from '@/store/lang.js'
    import {storeToRefs} from 'pinia'

    const useLang = useLangStore()
    const {selectedLang} = storeToRefs(useLang)

    const { subtitle } = translations
    
</script>

<template>
    <section class="c-section__hero">
        <div class="c-section__img-text">
            <picture>
                <source media="(min-width:768px)" srcset="@/assets/imgs/main_desktop.webp" width="1920" height="588"> 
                <img class="c-section__hero-img" src="@/assets/imgs/main_mobile.webp" alt="hero-img" width="500" height="500">
            </picture>
            <div class="o-container c-section__hero-text-wrapper">
                <h1 class="c-section__hero-heading">Valencia</h1>
                <p class="c-section__hero-subheading">{{ subtitle[selectedLang] }}</p>
            </div>
        </div>
    </section>
</template>