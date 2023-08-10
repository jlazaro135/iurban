<script setup>
    import WorldwideIcon from '@/assets/icons/WorldwideIcon.vue'
    import RouteIcon from '@/assets/icons/RouteIcon.vue'
    import CogIcon from '@/assets/icons/CogIcon.vue';
    import { translations } from '@/js/translations';
    import { useLangStore } from '@/store/lang.js'
    import {storeToRefs} from 'pinia'

    const useLang = useLangStore()
    const {selectedLang} = storeToRefs(useLang)
    const { info } = translations

</script>

<template>
    <section class="c-section__info">
        <div class="o-container">
            <div class="c-section__info-pills o-flex o-flex-jcc o-flex-wrap o-gap-4">
            <div class="o-pill o-pill--secondary">
                <WorldwideIcon />
                <p>
                    {{ info.pill_1[selectedLang] }}
                </p>
            </div>
            <div class="o-pill o-pill--primary">
                <RouteIcon />
                <p>
                    {{ info.pill_1[selectedLang] }}
                </p>
            </div>
            </div>
            <div class="c-section__info-filter o-flex o-flex-jcb o-flex-aic o-gap-2">
            <p class="c-section__info-para">{{ info.route_personalization[selectedLang] }}</p>
            <div class="o-btn o-btn__primary">
                <CogIcon/>
                <span>{{ info.filter[selectedLang] }}</span>
            </div>
            </div>
        </div>
    </section>
</template>