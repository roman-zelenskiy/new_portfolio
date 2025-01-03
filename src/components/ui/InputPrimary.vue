<script setup lang="ts">
  defineProps<{
    modelValue?: any;
  }>();

  const emits = defineEmits(['update:modelValue']);

  const handleInput = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value;
    emits('update:modelValue', inputValue);
  };
</script>

<template>
  <input
    :value="modelValue"
    @input="handleInput"
    class="input_primary"
  />
</template>

<style scoped></style>
