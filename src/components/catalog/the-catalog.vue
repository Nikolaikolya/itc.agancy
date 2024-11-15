<script setup lang="ts">
import TheCard from '@/components/catalog/the-card.vue';
import SortedProduct from '@/components/catalog/sorted-product.vue';
import { onMounted, ref } from 'vue';
import TheAside from '@/components/catalog/the-aside.vue';
import { IFilteredType, IProduct, SortedType } from '@/types';
import { filteredActions } from '@/libs/filtered.ts';
import { getProducts } from '@/services';
import TheLoader from '@/components/ui/the-loader.vue';
import { sortableTypes } from '@/libs/sortable.ts';

onMounted(() => {
  getProducts('/product').then((data) => {
    rowProducts = data;
    productsValues.value = data;

    isLoad.value = false;

    sortered();
  });
});

const isLoad = ref(true);
const isOpenSorted = ref(false);
const isOpenFiltered = ref(false);
const productsValues = ref<IProduct[]>([]);
let rowProducts: IProduct[] = [];
const sortedSelected = ref<SortedType>('asc');

const openSortedList = () => {
  isOpenSorted.value = true;
};

const sortered = () => {
  productsValues.value = [...productsValues.value].sort(
    sortableTypes[sortedSelected.value],
  );
};

const selectedSorted = (sortedType: SortedType) => {
  isOpenSorted.value = false;
  sortedSelected.value = sortedType;

  sortered();
};

const closeAll = () => {
  isOpenSorted.value = false;
  isOpenFiltered.value = false;
};

const selectedFiltered = (filters: IFilteredType[]) => {
  let resultFiltered: IProduct[] = [];

  for (const filter of filters) {
    if (filter.selected) {
      resultFiltered = [
        ...rowProducts.filter((el) => filteredActions[filter.name](el)),
      ] as IProduct[];
    }
  }

  productsValues.value = resultFiltered;

  sortered();
};
</script>

<template>
  <div
    v-if="isOpenFiltered || isOpenSorted"
    class="wrapper-render"
    @click="closeAll"
  ></div>

  <the-aside
    :is-open="isOpenFiltered"
    @selected="selectedFiltered"
    @close="closeAll"
  />

  <div class="catalog">
    <div class="catalog-header">
      <h3 class="catalog-header__title">412 товаров</h3>
      <button class="phone-filtered" @click="isOpenFiltered = true">
        Фильтры
      </button>

      <sorted-product
        :is-open="isOpenSorted"
        @open-sorted="openSortedList"
        @selected="selectedSorted"
      />
    </div>
    <ul v-if="productsValues.length > 0" class="catalog-list">
      <li v-for="el in productsValues" :key="el.id" class="catalog-list__item">
        <the-card :item="el" />
      </li>
    </ul>
    <h3 v-else>К сожалению товаров не нашлось по вашему запросу.</h3>
  </div>

  <the-loader :loading="isLoad" />
</template>

<style scoped>
.wrapper-render {
  overflow: hidden;

  background-color: var(--popup-color);
  z-index: 1;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.catalog {
  flex-grow: 1;
}

.catalog-header {
  min-width: 100%;
  margin-bottom: 4.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.catalog-header__title {
  font-size: var(--second-subtitle-size);
  text-transform: uppercase;
  font-weight: 500;
}

@media (max-width: 710px) {
  .catalog-header__title {
    display: none;
  }
}

.filtered-list-catalog__button span {
  margin-right: 0.4rem;
}

.catalog-list {
  margin-bottom: 14.1rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  gap: 2.2rem;
}

@media (max-width: 1200px) {
  .catalog-list {
    margin-bottom: 6.3rem;

    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 992px) {
  .catalog-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .catalog-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.phone-filtered {
  background-color: transparent;
  border: none;
  padding: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 500;
  font-size: var(--second-subtitle-size);

  display: none;
}

@media (max-width: 710px) {
  .phone-filtered {
    display: block;
  }
}
</style>
