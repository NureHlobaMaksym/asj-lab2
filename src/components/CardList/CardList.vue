<script setup lang="ts">
import type { CardListProperties } from '../../interfaces/card-list-properties.interface';
import CardItem from '../CardItem/CardItem.vue';

const props = defineProps<CardListProperties>();
const emit = defineEmits<{ (event: 'toggle', id: string): void }>();

const onToggle = (id: string) => emit('toggle', id);
</script>

<template>
  <div class="card-list">
    <CardItem
      v-for="card in props.cards"
      :key="card.id"
      :card="card"
      @toggle="onToggle"
    />
  </div>
</template>

<style src="./CardList.css"></style>
