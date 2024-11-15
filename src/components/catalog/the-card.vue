<script setup lang="ts">
import PlusIcon from '@/assets/images/svg/plus.svg';
import { IProduct } from '@/types/product.ts';
import { useCart } from '@/composable/use-cart.ts';
import { computed } from 'vue';

interface IProps {
  item: IProduct;
}

const props = defineProps<IProps>();

const { addToCart, cart } = useCart();

const isCart = computed(
  () => cart.value.find((el) => el.item.id === props.item.id) === undefined,
);
</script>

<template>
  <div class="product-card">
    <div class="image-container">
      <img
        class="product-image"
        :src="`src/assets/images/${item.image}.png`"
        :alt="`${item.name} ${item.color} ${item.code}`"
      />
      <img
        class="product-image--hover"
        src="@/assets/images/hover-cart.jpg"
        alt="Краска Wallquest, Brownsone MS90102"
      />
    </div>
    <div class="product-info">
      <h3 class="product-title">{{ item.name }}, {{ item.color }}</h3>
      <p class="product-code">{{ item.code }}</p>
    </div>

    <div class="product-price">
      <p class="price">{{ item.price }} ₽</p>
      <button v-if="isCart" class="add-to-cart-button" @click="addToCart(item)">
        <plus-icon />
      </button>
      <p v-else class="in-cart">В корзине</p>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  max-width: 27.8rem;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  cursor: pointer;

  transition: var(--transition-all);
}

.product-card:hover .product-image {
  opacity: 0;
}

.product-card:hover .product-image--hover {
  opacity: 1;
}

.product-card:hover .add-to-cart-button {
  opacity: 1;
}

.product-card:hover .in-cart {
  opacity: 1;
}

.image-container {
  min-width: 100%;
  min-height: 220px;
  position: relative;
}

.product-image,
.product-image--hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: var(--transition-all);

  object-fit: cover;
}

.product-image--hover {
  opacity: 0;
}

.product-info {
  padding-top: 1.6rem;
  margin-bottom: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.product-title {
  font-size: var(--main-size);
  line-height: 1.8rem;

  font-weight: 300;
}

.product-code {
  font-size: var(--main-size);
}

.product-price {
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2.4rem;
}

.price {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.in-cart {
  opacity: 0;

  font-size: var(--second-subtitle-size);

  transition: var(--transition-all);
}

.add-to-cart-button {
  padding: 0.8rem 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0;

  background-color: var(--second-color);
  color: var(--white-color);
  opacity: 0;

  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition-all);
}

.add-to-cart-button:hover {
  background-color: #76a78f;
}

@media (max-width: 480px) {
  .image-container {
    min-height: 180px;
  }
}
</style>
