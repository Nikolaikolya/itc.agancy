import { createMemoryHistory, createRouter } from 'vue-router';

import CatalogPage from './pages/catalog-page.vue';

const routes = [{ path: '/', component: CatalogPage }];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
