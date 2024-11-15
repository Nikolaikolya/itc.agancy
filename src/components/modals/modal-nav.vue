<script setup lang="ts">
import TheNav from '@/components/header/the-nav.vue';
import TheModal from '@/components/modals/the-modal.vue';
import ThePhone from '@/components/header/the-phone.vue';
import TheIcons from '@/components/header/the-icons.vue';

const open = defineModel<boolean>();
</script>

<template>
  <the-modal v-model="open" position="left" title="Меню">
    <the-nav class-name="modal-nav" @linked="open = false" />

    <the-phone class="phone-modal" @action-handler="open = false" />

    <div class="flex-container">
      <the-icons @action-handler="open = false" />
    </div>
  </the-modal>
</template>

<style>
.modal-nav {
  margin-bottom: 5rem;
}
.phone-modal {
  margin-bottom: 5rem;
}

.flex-container {
  display: flex;
}
</style>
