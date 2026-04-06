<script setup lang="ts">
import type { BaseButtonProperties } from '../../interfaces/base-button-properties';

const props = defineProps<BaseButtonProperties>();
</script>

<template>
  <button
    class="base-button"
    :class="[
      props.variant === 'icon' ? 'base-button--icon' : 'base-button--pill',
      props.isActive ? 'base-button--active' : '',
    ]"
    type="button"
  >
    <slot>{{ props.label }}</slot>
  </button>
</template>

<style src="./BaseButton.css"></style>
