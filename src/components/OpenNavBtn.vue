<script setup lang="ts">
  defineProps<{
    active: boolean;
  }>();
  const emits = defineEmits(['switchNavigation']);
  const onClickButton = () => {
    emits('switchNavigation');
  };
</script>

<template>
  <button class="btn_burger" :class="{ active: active }" @click="onClickButton">
    <span> </span>
    <span> </span>
    <span></span>
  </button>
</template>

<style scoped></style>
