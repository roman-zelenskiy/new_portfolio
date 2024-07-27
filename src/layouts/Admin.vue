<script setup lang="ts">
  import MenuNavigation from '../components/common/MenuNavigation.vue';
  import LayoutBase from '../components/layout/Base.vue';
  import { computed, inject } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const userData: any = inject('userData');

  const menuItems = computed<NavigationMenuItem[]>(() => {
    const currentRoute = router.options.routes.find((el: any) => el.name === 'Admin');

    return (
      currentRoute?.children
        ?.filter((el: any) => el.name !== 'AdminMain')
        ?.map((el: any) => {
          return {
            routeName: el.name as string,
            routePath: currentRoute.path + '/' + el.path,
            name: el.meta?.customName,
          };
        }) || []
    );
  });
</script>

<template>
  <LayoutBase>
    <template #navigation="{ switchNavigation }">
      <div>
        <div class="top_sec_nav">
          <h3 class="name_nav">{{ userData?.abbr }}. Admin</h3>
          <MenuNavigation
            :items="menuItems"
            @closeNavigation="switchNavigation(false)"
          ></MenuNavigation>
        </div>
      </div>
    </template>
  </LayoutBase>
</template>

<style scoped></style>
