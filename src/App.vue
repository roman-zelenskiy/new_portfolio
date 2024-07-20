<script setup lang="ts">
    import { ref, provide, toRef } from "vue";
    import userData from "../src/data/userData.json";

    console.log(import.meta.env);
    console.log(import.meta.env.MODE);
    console.log(import.meta.env.VITE_ADMIN_PASSWORD);
    console.log(import.meta.env.VITE_BASE_URL);
    console.log(import.meta.env.VITE_TELEGRAM_BOT_TOKEN);
    console.log(import.meta.env.GITHUB_TOKEN);

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

    provide("userData", toRef(userData));
    provide("socialNetworks", socialNetworks);
</script>

<template>
    <div>
        <router-view />
    </div>
</template>

<style lang="scss">
    @import "./assets/styles/app.scss";
</style>
