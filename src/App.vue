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
  </main>
  <footer>

  </footer>
</template>

<style scoped lang="scss">
@import './assets/scss/settings/settings';

.c-header {
  background-color: $primary;
  &__wrapper{
    padding: 1rem;
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

</style>
