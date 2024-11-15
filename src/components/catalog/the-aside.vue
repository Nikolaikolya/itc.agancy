<script setup lang="ts">
import FilteredType from '@/components/catalog/filtered-type.vue';
import { filteredTypes } from '@/data';
import { reactive, watch } from 'vue';

const types = reactive(filteredTypes);

interface IProps {
  isOpen: boolean;
}

defineProps<IProps>();

const emits = defineEmits(['selected', 'close']);

watch(
  types,
  (value) => {
    emits('selected', value);
  },
  { deep: true },
);
</script>

<template>
  <div v-if="isOpen" class="filtered-wrapper">
    <button
      class="button filtered-wrapper__close"
      @click="$emit('close')"
    ></button>
    <filtered-type
      :items="types"
      class="filtered-list"
      :class="{ 'filtered-list--open': isOpen }"
    />
  </div>

  <filtered-type :items="types" class="filtered-list" />
</template>

<style scoped>
@media (max-width: 1660px) {
  .filtered-list {
    margin-right: 3rem;
  }
}

@media (max-width: 710px) {
  .filtered-list {
    display: none;
  }
}

@media (max-width: 710px) {
  .filtered-wrapper {
    width: 100%;
    height: 318px;
    padding-left: 2.4rem;
    padding-top: 1.2rem;

    display: flex;
    flex-direction: column;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;

    background-color: var(--white-color);

    border-top-left-radius: 2.4rem;
    border-top-right-radius: 2.4rem;
  }
}

@media (min-width: 710px) {
  .filtered-wrapper {
    display: none;
  }
}

.filtered-wrapper__close {
  margin: 0 auto;
  margin-bottom: 4rem;

  width: 2.8rem;
  height: 0.4rem;

  background-color: var(--main-color-text);
  opacity: 0.6;
  border-radius: 4rem;
}

.filtered-list--open {
  display: block;
}
</style>
