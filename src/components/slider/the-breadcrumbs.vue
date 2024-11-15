<script setup lang="ts"></script>

<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <a class="breadcrumbs__link" href="#">Главная</a>
    </li>
    <li class="breadcrumbs__item">
      <a class="breadcrumbs__link" href="#">Продукты</a>
    </li>
    <li class="breadcrumbs__item">
      <a class="breadcrumbs__link" href="#">Краски</a>
    </li>
  </ul>
</template>

<style scoped>
.breadcrumbs {
  display: flex;
}

.breadcrumbs > .breadcrumbs__item:not(:last-child) {
  margin-right: 0.8rem;
}

.breadcrumbs__item {
  text-transform: uppercase;
}

.breadcrumbs__link {
  text-decoration: none;
  font-size: 1rem;
  color: var(--white-color);
  opacity: 0.2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: all 0.2s linear;
}

.breadcrumbs__link:hover {
  opacity: 0.5;
}

.breadcrumbs__link:hover::after {
  opacity: 1;
}

.breadcrumbs__link::after {
  content: '';
  display: block;
  background-color: var(--white-color);

  width: 3px;
  height: 3px;
  margin-left: 8px;

  opacity: 1;

  border-radius: 50%;
}

.breadcrumbs > .breadcrumbs__item:last-child > .breadcrumbs__link::after {
  content: none;
  display: none;
}

@media (max-width: 770px) {
  .breadcrumbs {
    margin-bottom: 4.8rem;
  }

  .breadcrumbs__link {
    color: var(--back-color);
    opacity: 0.5;
  }

  .breadcrumbs__link:hover {
    opacity: 0.3;
  }

  .breadcrumbs__link::after {
    background-color: var(--back-color);
  }
}
</style>
