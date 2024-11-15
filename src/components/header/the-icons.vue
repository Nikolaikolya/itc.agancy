<script setup lang="ts">
import SearchIcon from '@/assets/images/svg/search.svg';
import ProfileIcon from '@/assets/images/svg/profile.svg';
import HeartIcon from '@/assets/images/svg/heart.svg';

defineEmits(['actionHandler']);
</script>

<template>
  <div class="icons">
    <button type="button" class="icon" @click="$emit('actionHandler')">
      <search-icon />
    </button>

    <button type="button" class="icon" @click="$emit('actionHandler')">
      <profile-icon />
    </button>

    <button type="button" class="icon" @click="$emit('actionHandler')">
      <heart-icon />
    </button>
  </div>
</template>

<style scoped>
.icons {
  display: flex;
  gap: 2.4rem;
}

.icons > .icon:last-child {
  margin-right: 2.4rem;
}

.icon {
  min-height: 100%;

  cursor: pointer;

  border: none;
  background: transparent;

  transition: all 0.2s linear;
}

.icon:hover {
  opacity: 0.5;
}
</style>
