<script setup lang="ts">
import TheSlider from '@/components/slider/the-slider.vue';
import TheCatalog from '@/components/catalog/the-catalog.vue';
</script>

<template>
  <the-slider />

  <div class="container main-content">
    <the-catalog />
  </div>
</template>

<style scoped>
.main-content {
  padding-top: 7.2rem;

  display: flex;
  justify-content: space-between;
}

@media (max-width: 770px) {
  .main-content {
    padding-top: 0;
  }
}
</style>
