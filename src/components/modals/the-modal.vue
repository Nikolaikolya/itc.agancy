<template>
  <Teleport to="body">
    <Transition :name="slideDirection">
      <div v-if="modelValue" class="modal-overlay" @click="closeModal">
        <div class="modal" :class="classes" @click.stop>
          <div class="modal-header">
            <h3 class="modal-title">{{ title }}</h3>
            <button class="close-btn" @click="closeModal">
              <close-icon />
            </button>
          </div>

          <div class="modal-content">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CloseIcon from '@/assets/images/svg/close.svg';

const modelValue = defineModel();

interface IProps {
  title: string;
  position: 'left' | 'right';
  className?: string;
}

const props = defineProps<IProps>();

const slideDirection = computed(() => `slide-${props.position}`);

const closeModal = () => {
  modelValue.value = false;
};

const classes = computed(() => `${props.position} ${props.className}`);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--popup-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal {
  padding: 3.2rem 4rem;

  position: fixed;
  top: 0;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
}

@media (max-width: 610px) {
  .modal {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.modal.right {
  right: 0;
}

.modal.left {
  left: 0;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 9rem;
}

.modal-content {
  flex: 1;

  overflow-y: auto;

  display: flex;
  flex-direction: column;

  -ms-overflow-style: none;
  scrollbar-width: none;
}

.modal-content::-webkit-scrollbar {
  display: none;
}

.modal-footer {
  padding-top: 10px;
  border-top: 1px solid #eee;
}

.close-btn {
  width: 4.8rem;
  height: 4.8rem;

  border-radius: 50%;
  border: 1px var(--button-border-color) solid;
  background: none;

  cursor: pointer;

  transition: all 0.2s linear;
}

.close-btn:hover {
  opacity: 0.7;
}

.modal-title {
  font-size: 3rem;
  font-weight: 500;
  line-height: 2.6rem;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}
</style>
