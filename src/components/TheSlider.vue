<script setup>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/vue-splide/css/core';
  import '@splidejs/vue-splide/css';
  const options = {
    type   : 'slide',
    perPage: 4,
    perMove: 1,
    gap: 20,
    padding: '.5rem',
    pagination: false,
    breakpoints: {
      992: {
        perPage: 2,
      }
    }
  }
</script>

<template>
    <div class="o-slider">
        <h2 class="o-slider__heading o-slider__heading--highlight">
            Free tours >>
        </h2>
        <div class="o-slider__row o-slider__row--highlight">
            <Splide :options="options" aria-label="My Favorite Images">
                <!-- Aquí se tiran tantos SplideSlide como haya en el array -->
                <SplideSlide>
                    <div class="o-card">
                    <div class="o-card-img-wrapper">
                        <img class="o-card-img" src="https://picsum.photos/500/300.webp" alt="foto" width="500" height="300">
                    </div>
                    <div class="o-card-desc-wrapper">
                        <div class="o-card-desc">
                            <span>Palacio de las artes</span>
                            <span>📍 a 2,2kms</span>
                        </div>
                        <div class="o-card-more">
                        +
                        </div>
                    </div>
                    <div class="o-card-duration-badge">
                        <div class="o-card-duration">
                        &#x23f2; 1.30h
                        </div>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="o-card">
                    <div class="o-card-img-wrapper">
                        <img class="o-card-img" src="https://picsum.photos/500/300.webp" alt="foto" width="500" height="300">
                    </div>
                    <div class="o-card-desc-wrapper">
                        <div class="o-card-desc">
                        <span>Palacio de las artes</span>
                        <span>📍 a 2,2kms</span>
                        </div>
                        <div class="o-card-more">
                        +
                        </div>
                    </div>
                    <div class="o-card-duration-badge">
                        <div class="o-card-duration">
                        &#x23f2; 1.30h
                        </div>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="o-card">
                    <div class="o-card-img-wrapper">
                        <img class="o-card-img" src="https://picsum.photos/500/300.webp" alt="foto" width="500" height="300">
                    </div>
                    <div class="o-card-desc-wrapper">
                        <div class="o-card-desc">
                        <span>Palacio de las artes</span>
                        <span>📍 a 2,2kms</span>
                        </div>
                        <div class="o-card-more">
                        +
                        </div>
                    </div>
                    <div class="o-card-duration-badge">
                        <div class="o-card-duration">
                        &#x23f2; 1.30h
                        </div>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="o-card">
                    <div class="o-card-img-wrapper">
                        <img class="o-card-img" src="https://picsum.photos/500/300.webp" alt="foto" width="500" height="300">
                    </div>
                    <div class="o-card-desc-wrapper">
                        <div class="o-card-desc">
                        <span>Palacio de las artes</span>
                        <span>📍 a 2,2kms</span>
                        </div>
                        <div class="o-card-more">
                        +
                        </div>
                    </div>
                    <div class="o-card-duration-badge">
                        <div class="o-card-duration">
                        &#x23f2; 1.30h
                        </div>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="o-card">
                    <div class="o-card-img-wrapper">
                        <img class="o-card-img" src="https://picsum.photos/500/300.webp" alt="foto" width="500" height="300">
                    </div>
                    <div class="o-card-desc-wrapper">
                        <div class="o-card-desc">
                        <span>Palacio de las artes</span>
                        <span>📍 a 2,2kms</span>
                        </div>
                        <div class="o-card-more">
                        +
                        </div>
                    </div>
                    <div class="o-card-duration-badge">
                        <div class="o-card-duration">
                        &#x23f2; 1.30h
                        </div>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="o-card">
                    <div class="o-card-img-wrapper">
                        <img class="o-card-img" src="https://picsum.photos/500/300.webp" alt="foto" width="500" height="300">
                    </div>
                    <div class="o-card-desc-wrapper">
                        <div class="o-card-desc">
                        <span>Palacio de las artes</span>
                        <span>📍 a 2,2kms</span>
                        </div>
                        <div class="o-card-more">
                        +
                        </div>
                    </div>
                    <div class="o-card-duration-badge">
                        <div class="o-card-duration">
                        &#x23f2; 1.30h
                        </div>
                    </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>