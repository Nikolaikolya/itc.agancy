<script setup lang="ts">
import TheModal from '@/components/modals/the-modal.vue';
import MinusIcon from '@/assets/images/svg/minus.svg';
import PlusIcon from '@/assets/images/svg/plus.svg';
import CloseIcon from '@/assets/images/svg/close.svg';
import RepeatIcon from '@/assets/images/svg/repeat.svg';
import { useCart } from '@/composable/use-cart.ts';
import { computed } from 'vue';
import { formatProductCount } from '@/libs';
import { IProduct } from '@/types';

const open = defineModel<boolean>();

const { cart, addItem, subItem, deleteItem, deleteAll } = useCart();

const totalSum = computed(() =>
  cart.value.reduce(
    (a, b) => a + (b.item.inStock > 0 ? b.counts * b.item.price : 0),
    0,
  ),
);
const totalSumToFormated = computed(() =>
  new Intl.NumberFormat('ru-RU').format(totalSum.value),
);

const isStock = computed(() => (product: IProduct) => product.inStock > 0);
const inStockClass = computed(
  () => (product: IProduct) => (product.inStock > 0 ? '' : 'opacity'),
);
const countProducts = computed(() => cart.value.length);
const formatProducts = computed(() => formatProductCount(countProducts.value));
</script>

<template>
  <the-modal
    v-model="open"
    position="right"
    title="Корзина"
    class-name="cart-modal"
  >
    <div class="cart-header">
      <p class="cart-header__count">{{ formatProducts }}</p>
      <button class="button cart-header__clear" @click="deleteAll">
        Очистить список
      </button>
    </div>

    <ul v-if="cart.length > 0" class="list-product">
      <li v-for="prod in cart" :key="prod.item.id" class="list-product__item">
        <img
          class="list-product__image"
          :class="inStockClass(prod.item)"
          :src="`src/assets/images/${prod.item.image}.png`"
          :alt="`${prod.item.name} ${prod.item.color} ${prod.item.code}`"
        />

        <div class="list-product__description" :class="inStockClass(prod.item)">
          <p class="list-product__description-text">
            <span>{{ prod.item.name }},</span>
            <span>{{ prod.item.color }} {{ prod.item.code }}</span>
          </p>

          <div class="list-product__price">{{ prod.item.price }} ₽</div>
        </div>

        <div class="list-product-control" :class="inStockClass(prod.item)">
          <button
            class="button button--minus"
            :disabled="prod.counts === 1"
            @click="subItem(prod.item.id)"
          >
            <minus-icon />
          </button>
          <span class="list-product-control__count">{{ prod.counts }}</span>
          <button
            class="button button--plus"
            :disabled="prod.counts === prod.item.inStock"
            @click="addItem(prod.item.id)"
          >
            <plus-icon />
          </button>
        </div>

        <button
          class="button list-product__delete"
          :class="{ 'list-product__repeat': !isStock(prod.item) }"
          @click="deleteItem(prod.item.id)"
        >
          <close-icon v-if="isStock(prod.item)" />
          <repeat-icon v-else />
        </button>
      </li>
    </ul>
    <div v-else class="list-product">
      <p class="empty-cart">Корзина пуста. Добавте товар в корзину.</p>
    </div>

    <div class="cart-footer">
      <div class="cart-footer__count-total">
        <span class="cart-footer__title">Итого</span>

        <h4 class="cart-footer__total-price">{{ totalSumToFormated }}₽</h4>
      </div>

      <button class="button button--order" :disabled="totalSum <= 0">
        Оформить заказ
      </button>
    </div>
  </the-modal>
</template>

<style scoped>
.cart-header {
  min-width: 52rem;
  max-width: 52rem;
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 610px) {
  .cart-header {
    max-width: 30rem;
    min-width: 100%;
  }
}

.empty-cart {
  font-size: var(--main-size);
}

.cart-header__clear {
  opacity: 0.4;
  text-transform: uppercase;
  font-size: var(--second-title-size);
  font-weight: 300;
}

.cart-header__clear:hover {
  opacity: 0.2;
}

.cart-header__count {
  font-weight: 400;
  font-size: var(--second-title-size);
  color: var(--main-color-text);
}

.list-product {
  flex-grow: 1;
}

.list-product__item {
  padding-top: 2.6rem;
  padding-bottom: 2.6rem;

  border-top: 1px rgba(0, 0, 0, 0.1) solid;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-product__image {
  max-width: 9.6rem;
  height: auto;
}

.list-product__description {
  margin-right: 6.2rem;
}

.list-product__description-text {
  margin-bottom: 1.6rem;

  font-size: var(--main-size);
  font-weight: 300;

  display: flex;
  flex-direction: column;
}

.list-product__price {
  font-size: var(--main-size);
  font-weight: 600;
}

.list-product-control__count {
  margin-right: 2rem;

  font-size: var(--main-size);
  font-weight: 400;
}

.button--minus,
.button--plus {
  padding: 0.6rem 1.2rem 0.4rem;

  background-color: var(--button-background-cart);
  border-radius: 0.4rem;
}

.button--minus {
  margin-right: 2rem;
}

.button--minus:hover,
.button--plus:hover {
  opacity: 0.5;
}

.button--minus:disabled,
.button--plus:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.list-product__delete {
  opacity: 0.2;
}

.list-product__delete:hover {
  opacity: 0.8;
}

.list-product__repeat {
  opacity: 1;
}

.list-product__repeat:hover {
  opacity: 0.5;
}

.cart-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-footer__count-total {
  display: flex;
  flex-direction: column;
}

.cart-footer__title {
  margin-bottom: 0.6rem;

  font-size: var(--main-size);
  font-weight: 400;
  color: var(--main-color-text);
}

.cart-footer__total-price {
  font-size: 3.2rem;
  line-height: 3rem;
  font-weight: 500;
}

.button--order {
  padding: 2rem 5.7rem;

  background-color: var(--second-color);
  border-radius: 0.4rem;

  font-weight: 500;
  font-size: var(--second-subtitle-size);
}

.button--order:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.button--order:hover {
  opacity: 0.7;
}

@media (max-width: 610px) {
  .list-product__description {
    margin-right: 1rem;
  }

  .list-product-control {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button--minus {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  .list-product-control__count {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .button--order {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
