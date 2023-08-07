<script setup>
  import homeIcon from './assets/icons/homeIcon.vue'
</script>

<template>
  <header class="c-header">
    <div class="o-container">
      <div class="c-header__wrapper">
        <homeIcon />
        <img class="c-header__logo" src="./assets/imgs/logo_valencia.png" alt="logo valencia">
        <div class="c-header__language-wrapper">
          <img class="c-header__flag" src="./assets/imgs/spain-flag.png" alt="ingles">
          <img class="c-header__flag" src="./assets/imgs/uk-flag.png" alt="espanol">
        </div>
      </div>
    </div>

  </header>
  <main>
    <section class="c-section__first">
      <div class="c-section__img-text">
        <picture>
          <source media="(min-width:768px)" srcset="./assets/imgs/main_desktop.webp"> 
          <img class="c-section__hero-img" src="./assets/imgs/main_mobile.webp" alt="hero-img">
        </picture>
        <div class="o-container c-section__first-text-wrapper">
          <h1>Valencia</h1>
          <p>Descubre cómo podrías informar y registrar a los turistas con nuestra inteligencia artificial 24/7</p>
        </div>
    </div>
    </section>
  </main>
  <footer>

  </footer>
</template>

<style scoped lang="scss">
@import './assets/scss/settings/settings';

.c-header {
  background-color: $primary;
  &__wrapper{
    padding: 1rem 0;
    display: flex;
    align-items: center;
  }
  &__logo{
    filter: brightness(0) invert(1);
  }
  &__language-wrapper{
    display: flex;
    gap: 0.5rem;
    margin-left: auto;
  }
  &__flag{
    max-width: 2rem;
  }
}

.c-section{
  &__first{
    position: relative;
  }
  &__hero-img{
    width: 100%;
    height: auto;
    filter: brightness(65%);
  }
  &__img-text{
    position: relative    
  }
  &__first-text-wrapper{
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    margin: auto;
    color: #fff;
  }
}

</style>
