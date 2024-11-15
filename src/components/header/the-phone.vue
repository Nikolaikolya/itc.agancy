<script setup lang="ts">
defineEmits(['actionHandler']);
</script>

<template>
  <a href="tel:+74952217689" class="phone" @click="$emit('actionHandler')">
    <span>+7 (495) 221-77-69</span>
    <span class="phone__subtitle">Заказать звонок</span>
  </a>
</template>

<style scoped>
.phone {
  margin-right: 11.5rem;

  display: flex;
  flex-direction: column;

  color: var(--main-color-text);
  font-weight: 500;
  font-size: var(--main-size);

  text-decoration: none;

  transition: all 0.2s linear;
}

.phone:hover {
  opacity: 0.7;
}

.phone__subtitle {
  font-weight: 300;
  opacity: 0.3;
  font-size: var(--second-title-size);
}

@media (max-width: 1400px) {
  .phone {
    margin-right: 4rem;
  }
}

@media (max-width: 1090px) {
  .phone {
    margin-right: 2rem;
  }
}

@media (max-width: 590px) {
  .phone {
    margin-right: 1rem;
  }
}
</style>
