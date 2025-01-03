<script setup lang="ts">
  defineProps<{
    label?: string;
    value: any;
    checked?: boolean;
  }>();
</script>

<template>
  <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    <input
      type="checkbox"
      :value="value"
      :checked="checked"
      class="size-4 rounded border-gray-300 bg-gray-100 text-black !ring-0"
    />
    {{ label }}</label
  >
</template>

<style scoped></style>
