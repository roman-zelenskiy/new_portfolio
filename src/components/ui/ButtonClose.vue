<script setup lang="ts">
  import Button from './Button.vue';
</script>

<template>
  <Button
    class="hover_opacity relative h-[20px] w-[20px] md:h-[25px] md:w-[25px] xl:h-[30px] xl:w-[30px]"
  >
    <span class="absolute block h-[2px] w-[100%] rotate-45 rounded-[24px] bg-gray-600"></span>
    <span class="absolute block h-[2px] w-[100%] -rotate-45 rounded-[24px] bg-gray-600"></span>
  </Button>
</template>
<style scoped></style>
