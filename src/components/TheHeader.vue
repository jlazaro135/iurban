<script setup>
  import HomeIcon from '@/assets/icons/homeIcon.vue'
  import { useLangStore } from '@/store/lang.js'
  import { ref } from 'vue'
  import { translations } from '@/js/translations';

  const { web_title } = translations

  const useLang = useLangStore()

  const {changeLang} = useLang
 
  let isSpanish = ref(true)

  function handleClick(event){
    changeLang(event.target.id)
    if(event.target.id === 'es'){
      isSpanish.value = true
      document.title = web_title.es
      return
    };
    isSpanish.value = false;
    document.title = web_title.en
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