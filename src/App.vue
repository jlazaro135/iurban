<script setup>
  import HomeIcon from './assets/icons/homeIcon.vue'
  import WorldwideIcon from './assets/icons/WorldwideIcon.vue'
  import RouteIcon from './assets/icons/RouteIcon.vue'
</script>

<template>
  <header class="c-header">
    <div class="o-container">
      <div class="c-header__wrapper">
        <HomeIcon />
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
          <source media="(min-width:768px)" srcset="./assets/imgs/main_desktop.webp" width="1920" height="588"> 
          <img class="c-section__hero-img" src="./assets/imgs/main_mobile.webp" alt="hero-img" width="500" height="500">
        </picture>
        <div class="o-container c-section__first-text-wrapper">
          <h1 class="c-section__first-heading">Valencia</h1>
          <p class="c-section__first-subheading">Descubre cómo podrías informar y registrar a los turistas con nuestra inteligencia artificial 24/7</p>
        </div>
    </div>
    </section>
    <section class="c-section__second">
      <div class="o-container">
        <div class="c-section__second-pills o-flex o-flex-jcc o-flex-wrap o-gap-4">
          <div class="o-pill o-pill--secondary">
            <WorldwideIcon />
            <p>
              Configura tu ruta mediante nuestra Inteligencia Artificial
            </p>
          </div>
          <div class="o-pill o-pill--primary">
            <RouteIcon />
            <p>
            Consulta rutas prediseñadas por expertos guías locales
            </p>
          </div>
        </div>
        <div class="c-section__second-filter o-flex o-flex-jcc o-flex-wrap">
          <p></p>
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

.c-section {
  &__first {
    position: relative;
  }
  &__hero-img {
    width: 100%;
    height: auto;
    filter: brightness(65%);
  }
  &__img-text {
    position: relative    
  }
  &__first-text-wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    margin: auto;
    color: #fff;
  }
  &__first-heading {
    font-size: 2.5rem;
    font-weight: 500;
  }
  &__first-subheading {
    font-size: 0.875rem;
  }
  &__second{
    position: relative;
  }
  &__second-pills{
    position: relative;
    top: -50px;
  }
}

.o-pill{
  width: 100%;
  flex: 1 0 350px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
  text-align: center;
  line-height: 1.5;
  & svg{
    flex-basis: 100px;
  }
  &--primary{
    background-color: $primary;
    color: #fff;
    svg {
      fill: #fff;
    }
  }
  &--secondary{
    background-color: #fff;
    color: $primary;
    svg {
      fill: $primary;
    }

  }
}
</style>
