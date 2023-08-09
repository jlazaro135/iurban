<script setup>
  import HomeIcon from '@/assets/icons/homeIcon.vue'
  import { ref } from 'vue';
  let isSpanish = ref(true)

  const props = defineProps({
    lang: {type: String,  default: 'es'
    }
  })

  function handleClick(event){
    console.log(props.lang)
    if(event.target.id === 'es')return isSpanish.value = true;
    isSpanish.value = false;
  }

</script>

<template>
    <header class="c-header">
        <div class="o-container">
        <div class="c-header__wrapper">
            <HomeIcon />
            <img class="c-header__logo" src="@/assets/imgs/logo_valencia.png" alt="logo valencia">
            <div class="c-header__language-wrapper">
              <img class="c-header__flag" :class="{active: isSpanish}" src="@/assets/imgs/spain-flag.png" alt="ingles" @click="handleClick" id="es">
              <img class="c-header__flag" :class="{active: !isSpanish}" src="@/assets/imgs/uk-flag.png" alt="espanol" @click="handleClick" id="en">
            </div>
        </div>
        </div>
  </header>
</template>