<script setup lang="ts">
import type { BaseTextAreaProperties } from '../../interfaces/base-text-area-properties.interface';
import { useBaseTextArea } from '../../composables/useBaseTextArea';

const props = defineProps<BaseTextAreaProperties>();

const emit = defineEmits<{ (event: 'update:modelValue', value: string): void }>();
const { onInput } = useBaseTextArea(emit);
</script>

<template>
  <input
    class="base-textarea"
    type="text"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    @input="onInput"
  />
</template>

<style src="./BaseTextArea.css"></style>
