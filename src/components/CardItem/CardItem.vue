<script setup lang="ts">
import type { CardItemProperties } from '../../interfaces/card-item-properties.interface';
import { useCardItem } from '../../composables/useCardItem';
import BaseButton from '../BaseButton/BaseButton.vue';

const props = defineProps<CardItemProperties>();

const emit = defineEmits<{ (event: 'toggle', id: string): void }>();
const { onToggle } = useCardItem(emit, props.card.id);
</script>

<template>
  <div class="card-item">
    <div class="card-item__cover">
      <img
        class="card-item__image"
        :src="`https://picsum.photos/id/${props.card.id}/400/250`"
        :alt="props.card.author"
        loading="lazy"
      />
    </div>
    <div class="card-item__content">
      <div>
        <p class="card-item__author">{{ props.card.author }}</p>
        <p class="card-item__id">#{{ props.card.id }}</p>
      </div>

      <BaseButton
        label=""
        variant="icon"
        :is-active="props.card.isFavorite"
        @click="onToggle"
      >
        <svg class="card-item__star" viewBox="0 0 24 24">
          <path
            d="M12 3.4l2.5 5.2 5.7.8-4.1 4 1 5.6L12 16.5 6.9 19l1-5.6-4.1-4 5.7-.8L12 3.4z"
            :fill="props.card.isFavorite ? '#4b4b7d' : 'none'"
            stroke="#4b4b7d"
            stroke-width="1.5"
          />
        </svg>
      </BaseButton>
    </div>
  </div>
</template>

<style src="./CardItem.css"></style>
