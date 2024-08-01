<script setup lang="ts">
  defineProps<{
    label?: string;
    value: any;
  }>();

</script>

<template>
  <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    <input
      type="checkbox"
      :value="value"
      class="checkbox h-4 w-4 rounded border-gray-300 bg-gray-100 text-black !ring-0"
    />
    {{ label }}</label
  >
</template>

<style scoped></style>
