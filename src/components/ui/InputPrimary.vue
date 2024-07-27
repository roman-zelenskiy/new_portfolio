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
    class="block w-full border border-black bg-transparent p-4 text-base text-gray-900 focus:border-black focus:ring-0"
  />
</template>

<style scoped></style>
