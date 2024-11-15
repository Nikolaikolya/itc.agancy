<script setup lang="ts">
import ArrowFiltered from '@/assets/images/svg/arrow-filtered.svg';
import { computed, reactive, ref } from 'vue';
import { sortedTypes } from '@/data';

const sorted = reactive(sortedTypes);

interface IProps {
  isOpen: boolean;
}

const emits = defineEmits(['openSorted', 'selected']);
const selectedItemIdx = ref(0);

defineProps<IProps>();

const activeItemId = computed(() => {
  const selectedItem = sorted.filter((i) => i.selected);

  return selectedItem[0];
});

const selectedHandler = (idx: number) => {
  const item = sorted[idx];
  emits('selected', item.type);

  sorted[selectedItemIdx.value].selected = false;
  sorted[idx].selected = true;
  selectedItemIdx.value = idx;
};
</script>

<template>
  <div class="filtered-list-catalog">
    <button class="filtered-list-catalog__button" @click="$emit('openSorted')">
      <span>{{ activeItemId.label }}</span>
      <arrow-filtered />
    </button>

    <ul v-if="isOpen" class="filtered-priority">
      <li
        v-for="(item, i) in sorted"
        :key="item.id"
        class="filtered-priority__item"
      >
        <button
          class="filtered-priority__button"
          :class="{
            'filtered-priority__button--active': activeItemId.id === item.id,
          }"
          @click="selectedHandler(i)"
        >
          {{ item.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.filtered-list-catalog {
  position: relative;
}

.filtered-list-catalog__button {
  border: none;
  background-color: transparent;

  font-size: var(--second-subtitle-size);
  font-weight: 500;

  cursor: pointer;
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: var(--transition-all);
}

.filtered-list-catalog__button:hover {
  opacity: 0.7;
}

.filtered-priority {
  width: 28rem;

  position: absolute;
  top: 0;
  right: 0;

  z-index: 2;

  background-color: var(--white-color);
}

.filtered-priority__button {
  padding: 1.7rem 2.4rem;
  width: 100%;

  border: none;
  background-color: transparent;

  font-size: var(--second-subtitle-size);
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  text-align: left;

  transition: var(--transition-all);
}

.filtered-priority__button--active {
  background-color: var(--second-color);
}

.filtered-priority__button:hover {
  opacity: 0.6;
}
</style>
