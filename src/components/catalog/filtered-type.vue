<script setup lang="ts">
import TheCheckbox from '@/components/ui/the-checkbox.vue';
import { IFilteredType } from '@/types';

interface IProps {
  items: IFilteredType[];
}

defineProps<IProps>();
</script>

<template>
  <ul class="filter-list">
    <li
      v-for="item in items"
      :key="item.id"
      class="filter-item filter-item--active"
    >
      <the-checkbox
        v-model="item.selected"
        :label="item.label"
        :name="item.name"
      />
    </li>
  </ul>
</template>

<style scoped>
.filter-list {
  list-style: none;
  padding: 0;
  margin-right: 13.8rem;
}

.filter-list > .filter-item:not(:last-child) {
  margin-bottom: 1rem;
}

.filter-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.filter-item:hover {
  opacity: 0.7;
}
</style>
