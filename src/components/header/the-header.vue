<script setup lang="ts">
import { ref } from 'vue';
import TheNav from '@/components/header/the-nav.vue';
import ThePhone from '@/components/header/the-phone.vue';
import ModalNav from '@/components/modals/modal-nav.vue';
import TheIcons from '@/components/header/the-icons.vue';
import TheCart from '@/components/header/the-cart.vue';
import CartModal from '@/components/modals/cart-modal.vue';

const open = ref(false);
const openCart = ref(false);
</script>

<template>
  <div class="container">
    <header class="header">
      <button type="button" class="phone-menu" @click="open = true">
        <span class="phone-menu__item"></span>
      </button>

      <a href="/public" class="logo">
        <img src="/images/logo.png" />
      </a>

      <the-nav />

      <div class="right-section">
        <the-phone class="header-phone" />

        <the-icons class="header-icons" />
        <the-cart @open="openCart = true" />
      </div>
    </header>
  </div>

  <modal-nav v-model="open" />
  <cart-modal v-model="openCart" />
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
}

.phone-menu {
  width: 2.4rem;
  padding: 0.6rem 0;

  border: none;

  position: relative;
  display: none;

  cursor: pointer;

  transition: all 0.2s linear;

  background-color: transparent;
}

.phone-menu__item {
  height: 2px;

  background-color: var(--main-color-text);

  display: block;
}

.phone-menu__item::after {
  content: '';
  display: block;
  background-color: var(--main-color-text);

  position: absolute;
  top: 10px;
  left: 0;

  height: 2px;
  width: 100%;
}

.phone-menu__item::before {
  content: '';
  display: block;
  background-color: var(--main-color-text);

  position: absolute;
  top: 2px;
  left: 0;

  height: 2px;
  width: 100%;
}

.phone-menu:hover {
  opacity: 0.7;
}

.logo {
  margin-right: 17.2rem;
}

.right-section {
  display: flex;
  align-items: center;
}

@media (max-width: 1400px) {
  .logo {
    margin-right: 2rem;
  }
}

@media (max-width: 575px) {
  .header-phone {
    display: none;
  }
}

@media (max-width: 380px) {
  .header-icons {
    display: none;
  }

  .cart {
    display: block;
  }
}

@media (max-width: 1060px) {
  .header {
    margin-bottom: 1.6rem;

    position: relative;

    border-bottom: 1px solid rgba(31, 32, 32, 0.06);
  }

  .phone-menu {
    margin-right: 2rem;
    display: block;
  }

  .logo {
    flex-grow: 1;
  }

  .main-nav {
    display: none;
  }
}

@media (max-width: 576px) {
  .logo {
    flex-grow: 0;
  }
}
</style>
