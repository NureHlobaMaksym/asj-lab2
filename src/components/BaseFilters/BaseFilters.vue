<script setup lang="ts">
import type { BaseFiltersProperties } from '../../interfaces/base-filters-properties.interface';
import { useBaseFilters } from '../../composables/useBaseFilters';
import BaseButton from '../BaseButton/BaseButton.vue';

const props = defineProps<BaseFiltersProperties>();
const emit = defineEmits<{ (event: 'update:modelValue', value: string): void }>();
const { onSelect } = useBaseFilters(emit);
</script>

<template>
  <div class="base-filters">
    <BaseButton
      v-for="option in props.options"
      :key="option.value"
      :label="option.label"
      :is-active="option.value === props.modelValue"
      variant="pill"
      @click="onSelect(option.value)"
    />
  </div>
</template>

<style src="./BaseFilters.css"></style>
