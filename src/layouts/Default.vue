<script setup lang="ts">
  import LayoutBase from '../components/layout/Base.vue';
  import NavigationClient from '../components/NavigationClient.vue';
</script>

<template>
  <LayoutBase>
    <template #navigation="{ isShowNavigation, switchNavigation }">
      <NavigationClient
        :class="{ active: isShowNavigation }"
        @switchNavigation="switchNavigation"
      />
    </template>
  </LayoutBase>
</template>

<style scoped></style>
