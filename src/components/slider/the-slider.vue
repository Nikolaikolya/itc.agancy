<script setup lang="ts">
import { ref, computed } from 'vue';
import TheBreadcrumbs from '@/components/slider/the-breadcrumbs.vue';
import ArrowSlider from '@/assets/images/svg/arrow-slider.svg';

interface Slide {
  image: string;
  title: string;
  description: string[];
}

const slides = ref<Slide[]>([
  {
    image: '/images/slide-image.jpg',
    title: 'Краски',
    description: [
      'Идеально подходит для стен и других поверхностей.',
      'Найди свой идеальный цвет!',
    ],
  },
  {
    image: '/images/slide-image.jpg',
    title: 'Краски',
    description: [
      'Идеально подходит для стен и других поверхностей.',
      'Найди свой идеальный цвет!',
    ],
  },
  {
    image: '/images/slide-image.jpg',
    title: 'Краски',
    description: [
      'Идеально подходит для стен и других поверхностей.',
      'Найди свой идеальный цвет!',
    ],
  },
]);

const currentSlide = ref(0);
const slideStyle = computed(() => ({
  transform: `translateX(-${currentSlide.value * 100}%)`,
}));

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};
</script>

<template>
  <div class="slider">
    <div class="container">
      <the-breadcrumbs class="breadcrumb" />
    </div>
    <button class="slider__arrow slider__arrow--prev" @click="prevSlide">
      <arrow-slider />
    </button>
    <button class="slider__arrow slider__arrow--next" @click="nextSlide">
      <arrow-slider />
    </button>

    <div class="slider__container" :style="slideStyle">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slider__slide"
        :class="{ active: currentSlide === index }"
      >
        <img :src="slide.image" :alt="slide.title" />
        <div class="slider__content">
          <h3 class="slider__title">{{ slide.title }}</h3>
          <p
            v-for="(desc, i) in slide.description"
            :key="i"
            class="slider__content-text"
          >
            {{ desc }}
          </p>
        </div>
      </div>
    </div>

    <div class="slider__indicators">
      <button
        v-for="(_, index) in slides"
        :key="index"
        class="slider__indicator button"
        :class="{ active: currentSlide === index }"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.breadcrumb {
  position: absolute;
  top: 20px;
  z-index: 2;
}

.slider__container {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.slider__slide {
  min-width: 100%;
  position: relative;
}

.slider__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.slider__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  background-color: transparent;
  z-index: 2;

  transition: var(--transition-all);
}

.slider__arrow--prev {
  left: 10.2rem;
}

.slider__arrow--next {
  right: 10.2rem;

  transform: rotate(180deg);
}

.slider__indicators {
  position: absolute;
  bottom: 3.9rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.8rem;

  padding: 1.3rem 2.4rem;
  border-radius: 1.6rem;
  background-color: rgba(0, 0, 0, 0.4);
}

.slider__indicator {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  padding: 0;
}

.slider__indicator.active {
  background: var(--white-color);
}

.slider__arrow:hover {
  opacity: 0.6;
}

.slider__content h2 {
  font-size: 4.8rem;
  margin-bottom: 2rem;
}

.slider__title {
  margin-bottom: 3.4rem;

  font-size: 7.2rem;
  line-height: 6.5rem;
  font-weight: 400;
}

@media (max-width: 1200px) {
  .slider__indicators {
    bottom: 1.5rem;
  }

  .slider__arrow--next {
    right: 5rem;
  }

  .slider__arrow--prev {
    left: 5rem;
  }

  .slider__title {
    margin-bottom: 2rem;
    font-size: 4rem;
  }
}

@media (max-width: 820px) {
  .slider__title {
    margin-bottom: 1rem;
  }
}

@media (max-width: 770px) {
  .slider__arrow,
  .slider__indicators,
  .slider__container img,
  .slider__content-text {
    display: none;
  }

  .slider__content {
    transform: none;

    text-align: left;
  }

  .breadcrumb,
  .slider__content {
    position: static;
  }

  .slider__title {
    color: var(--main-color-text);
    font-size: 3.6rem;
    line-height: 3rem;

    margin-left: 2.4rem;
    margin-bottom: 4.8rem;
  }
}
</style>
