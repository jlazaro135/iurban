<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import { calculateDistance, coord } from '@/js/distanceCalculator'
    import { sliderOptions } from '@/js/utils';
    import { useLangStore } from '@/store/lang.js'
    import {storeToRefs} from 'pinia'
    import '@splidejs/vue-splide/css/core';
    import '@splidejs/vue-splide/css';


    const useLang = useLangStore()

    const {selectedLang} = storeToRefs(useLang)

    const props =  defineProps({
        cardData: Object,
        isHighlight: Boolean,
    })

    const {cardData} = props

</script>

<template>
    <div class="o-slider">
        <h2 class="o-slider__heading" :class="{'o-slider__heading--highlight': isHighlight}">
            {{ cardData.name[selectedLang] }} >>
        </h2>
        <div class="o-slider__row" :class="{'o-slider__row--highlight': isHighlight}">
            <Splide :options="sliderOptions" aria-label="My Favorite Images">
                <SplideSlide v-for="(slide, index) in cardData.data">
                    <div class="o-card">
                    <div class="o-card-img-wrapper">
                        <img class="o-card-img" :src="slide.cover_image ?? slide.image" alt="foto" width="500" height="300">
                    </div>
                    <div class="o-card-desc-wrapper">
                        <div class="o-card-desc">
                            <span>{{slide.name[selectedLang]}}</span>
                            <span v-if="coord(cardData.data)[index].lat !== '0'">📍{{calculateDistance(coord(cardData.data)[index].lat, coord(cardData.data)[index].lon)}} km</span>
                        </div>
                        <div v-if="!isHighlight" class="o-card-more">
                            <span>+</span>
                        </div>
                    </div>
                    <div class="o-card-duration-badge">
                        <div class="o-card-duration">
                        &#x23f2; {{slide.durationc}}
                        </div>
                    </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>