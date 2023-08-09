<script setup>
  import WorldwideIcon from '@/assets/icons/WorldwideIcon.vue'
  import RouteIcon from '@/assets/icons/RouteIcon.vue'
  import CogIcon from '@/assets/icons/CogIcon.vue';

</script>

<template>
    <section class="c-section__info">
        <div class="o-container">
            <div class="c-section__info-pills o-flex o-flex-jcc o-flex-wrap o-gap-4">
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
            <div class="c-section__info-filter o-flex o-flex-jcb o-flex-aic o-gap-2">
            <p class="c-section__info-para">También puedes crear tu propia ruta, desde cero:</p>
            <div class="o-btn o-btn__primary">
                <CogIcon/>
                <span>Filtro</span>
            </div>
            </div>
        </div>
    </section>
</template>