<script setup lang="ts">
  import { cn } from '../../utils';

  defineProps<{
    modelValue?: any;
    options: {
      title: string;
      value: string;
    }[];
    placeholder?: string;
  }>();

  const emits = defineEmits(['update:modelValue']);

  const handleInput = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value;
    emits('update:modelValue', inputValue);
  };
</script>

<template>
  <select
    :value="modelValue"
    @input="handleInput"
    :class="
      cn('input_primary', {
        '!text-placeholder-color': modelValue === '',
      })
    "
  >
    <option v-if="placeholder" class="text-black" value="">{{ placeholder }}</option>
    <option v-for="option in options" class="text-black" :key="option.value" :value="option.value">
      {{ option.title }}
    </option>
  </select>
</template>

<style scoped></style>
