<script setup lang="ts">
  import { useRoute } from 'vue-router';

  defineProps<{
    items: NavigationMenuItem[];
  }>();
  const emits = defineEmits(['closeNavigation']);

  const route = useRoute();
</script>

<template>
  <ul class="menu_nav">
    <li v-for="item in items">
      <router-link
        :to="{ name: item.routeName }"
        @click="emits('closeNavigation')"
        :class="{ active: item.routePath === route.fullPath }"
        >{{ item.name }}</router-link
      >
    </li>
  </ul>
</template>

<style scoped lang="scss">
  @import '../../assets/styles/components/navigation.scss';
</style>
