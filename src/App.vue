<script setup lang="ts">
import BaseFilters from './components/BaseFilters/BaseFilters.vue';
import BaseTextArea from './components/BaseTextArea/BaseTextArea.vue';
import CardList from './components/CardList/CardList.vue';
import { filterOptions } from './constants/filter-options.constants';
import { useCardApp } from './composables/useCardApp';

const {
  activeFilter,
  searchQuery,
  setFilter,
  visibleCards,
  isLoading,
  error,
  loadImages,
  toggleFavorite,
} = useCardApp();
</script>

<template>
  <div class="app">
    <header class="app__header">
      <BaseTextArea v-model="searchQuery" placeholder="Пошук за автором" />
      <BaseFilters
        :options="filterOptions"
        :model-value="activeFilter"
        @update:model-value="setFilter"
      />
    </header>

    <main class="app__content">
      <div v-if="isLoading" class="app__status">Завантаження...</div>
      <div v-else-if="error" class="app__status app__status--error">
        <span>{{ error }}</span>
        <button class="app__retry" type="button" @click="loadImages">
          Спробувати ще раз
        </button>
      </div>
      <div v-else-if="visibleCards.length === 0" class="app__status">
        Нічого не знайдено
      </div>
      <CardList v-else :cards="visibleCards" @toggle="toggleFavorite" />
    </main>
  </div>
</template>
