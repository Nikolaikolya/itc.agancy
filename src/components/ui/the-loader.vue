<template>
  <div v-if="loading" class="spinner-wrapper">
    <div class="spinner">
      <div class="spinner__circle"></div>
      <div class="spinner__text">{{ text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  loading?: boolean;
  text?: string;
}

withDefaults(defineProps<Props>(), {
  loading: true,
  text: 'Загрузка...',
});
</script>

<style scoped>
.spinner-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.spinner__circle {
  width: 50px;
  height: 50px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner__text {
  color: #3498db;
  font-size: 1.2rem;
  font-weight: 500;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
