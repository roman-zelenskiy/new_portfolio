<script setup lang="ts">
  type Props = {
    to?: string;
    href?: string | null;
    typeElement?: 'button' | 'router-link' | 'link';
  };

  withDefaults(defineProps<Props>(), {
    typeElement: 'button',
  });
</script>

<template>
  <button v-if="typeElement === 'button'">
    <slot />
  </button>
  <router-link v-else-if="typeElement === 'router-link'" :to="to || ''">
    <slot />
  </router-link>
  <a v-else-if="typeElement === 'link'" :href="href || ''">
    <slot />
  </a>
</template>

<style scoped></style>
