<script setup lang="ts">
import { computed } from 'vue';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonView = 'inline' | 'default' | 'inverted';

interface IProps {
  className?: string;
  buttonView?: ButtonView;
  type?: ButtonType;
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'button',
  className: '',
});

const isInverted = computed(() => {
  if (props.buttonView === 'inverted') {
    return 'button--inverted';
  }

  if (props.buttonView === 'inline') {
    return 'button--inline';
  }

  return 'button--default';
});
</script>

<template>
  <button class="button" :class="`${isInverted} ${className}`" :type="type">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  padding: 10px 20px;

  font-size: var(--main-size);

  border-radius: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.2s linear;
}

.button--default {
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}

.button--default:hover {
  opacity: 0.8;
  color: var(--white-color);
  background: var(--color-primary);
}

.button--inverted {
  border: 2px solid var(--color-primary);
  color: var(--white-color);
  background: var(--color-primary);
}

.button--inverted:hover {
  opacity: 0.8;
  color: var(--color-primary);
  background: var(--white-color);
}

.button--inline {
  background: none;
  color: #007bff;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
}

.button--inline:hover {
  text-decoration: underline;
}
</style>
