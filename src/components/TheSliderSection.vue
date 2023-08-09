<script setup>
    import TheSlider from '@/components/TheSlider.vue';
    import { ref } from 'vue';
    import apiClient  from '@/js/apiClient';
    import { API_URL } from '@/js/const';
    import cityData from '@/js/cityData'


    let options = {
    'categories': '[40,37,39,148,35,36,34,38,41]',
    }

    async function fetchData(){
    try {
        let res = await apiClient.post(API_URL, options)
        cityData.data = res.data.homePoints
        isLoaded.value = true
    } catch (error) {
        console.log(error)
        }
    }

    fetchData();

    const isLoaded = ref(false);
</script>

<template>
    <section class="c-section__sliders">
        <div class="o-container">
            <template v-if="!isLoaded">
                <div class="o-slider-skeleton" v-for="index in 3" :key="index">
            </div>
            </template>
            <TheSlider v-else 
            v-for="data in cityData.data" 
            :key="data.id" 
            :cardData="data" 
            :id="data.id"
            :isHighlight="data.id === 39"
            />
        </div>
    </section>
</template>