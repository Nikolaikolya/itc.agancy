<script setup lang="ts">
import TheHeader from '@/components/header/the-header.vue';
</script>

<template>
  <div class="wrapper">
    <the-header />

    <main class="main">
      <slot></slot>
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;

  font-size: 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main {
  flex-grow: 1;
}

.footer {
  background-color: var(--back-color);
  min-height: 100px;
}
</style>
