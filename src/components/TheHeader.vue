<script setup>
  import HomeIcon from '@/assets/icons/homeIcon.vue'
</script>

<template>
    <header class="c-header">
        <div class="o-container">
        <div class="c-header__wrapper">
            <HomeIcon />
            <img class="c-header__logo" src="@/assets/imgs/logo_valencia.png" alt="logo valencia">
            <div class="c-header__language-wrapper">
              <img class="c-header__flag" src="@/assets/imgs/spain-flag.png" alt="ingles">
              <img class="c-header__flag" src="@/assets/imgs/uk-flag.png" alt="espanol">
            </div>
        </div>
        </div>
  </header>
</template>