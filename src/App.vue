<script setup lang="ts">
  import userData from '../src/data/userData.json';
  import { provide, ref, toRef } from 'vue';

  // const userData = ref();
  const socialNetworks = ref<any[]>([]);

  const fetchUserData = async () => {
    try {
      socialNetworks.value = userData.social_networks || [];
    } catch (error) {
      console.log(error);
    }
  };

  fetchUserData();

  provide('userData', toRef(userData));
  provide('socialNetworks', socialNetworks);
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import './assets/styles/app.scss';
</style>
