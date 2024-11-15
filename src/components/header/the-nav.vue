<script setup lang="ts">
type MenuType = 'main-nav' | 'modal-nav';

interface IProps {
  className?: MenuType;
}

defineEmits(['linked']);

withDefaults(defineProps<IProps>(), { className: 'main-nav' });
</script>

<template>
  <nav class="nav" :class="className">
    <a href="#" class="nav-link" @click="$emit('linked')">Продукты</a>
    <a href="#" class="nav-link" @click="$emit('linked')">Цвета</a>
    <a href="#" class="nav-link" @click="$emit('linked')">Вдохновение</a>
    <a href="#" class="nav-link" @click="$emit('linked')">Советы</a>
    <a href="#" class="nav-link" @click="$emit('linked')">Найти магазин</a>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 2.4rem;
  font-size: var(--second-title-size);
  font-weight: 400;
}

.nav-link {
  text-decoration: none;
  text-transform: uppercase;

  transition: all 0.2s linear;

  color: var(--main-color-text);
}

.nav-link:hover {
  color: var(--second-color);
}

@media (max-width: 1060px) {
  .main-nav {
    display: none;
  }
}

.modal-nav {
  flex-direction: column;
}
</style>
