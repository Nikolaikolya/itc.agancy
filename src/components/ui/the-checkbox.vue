<script setup lang="ts">
interface IProps {
  label: string;
  name: string;
}

const checked = defineModel<boolean>();
defineEmits(['change']);

defineProps<IProps>();
</script>

<template>
  <label class="custom-checkbox">
    <input
      v-model="checked"
      type="checkbox"
      class="checkbox-input"
      :name="name"
    />
    <div class="checkbox-wrapper">
      <div class="checkbox-dot"></div>
    </div>
    <span class="checkbox-label">{{ label }}</span>
  </label>
</template>

<style scoped>
.custom-checkbox {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
}

.checkbox-wrapper {
  position: relative;
  width: 3.6rem;
  height: 2.2rem;
  background: #e0e0e0;
  border-radius: 4rem;
  transition: all 0.3s linear;
}

.checkbox-dot {
  position: absolute;
  top: 7px;
  left: 7px;
  width: 8px;
  height: 8px;
  background: var(--main-color-text);
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-input:checked + .checkbox-wrapper {
  background: var(--second-color);
}

.checkbox-input:checked + .checkbox-wrapper .checkbox-dot {
  transform: translateX(16px);
}

.checkbox-label {
  font-size: var(--second-subtitle-size);
  color: var(--main-color-text);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>
