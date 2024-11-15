<script setup lang="ts">
import { useCart } from '@/composable/use-cart.ts';

defineEmits(['open']);
const { cart } = useCart();
</script>

<template>
  <button type="button" class="cart" @click="$emit('open')">
    {{ cart.length }}
  </button>
</template>

<style scoped>
.cart {
  height: 2.4rem;
  width: 2.4rem;

  border: none;
  cursor: pointer;

  border-radius: 50%;
  background: var(--second-color);

  transition: all 0.2s linear;
}

.cart:hover {
  opacity: 0.7;
}
</style>
