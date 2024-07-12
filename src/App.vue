<script setup lang="ts">
    import { ref, provide } from "vue";

    const userData = ref();
    const socialNetworks = ref([]);

    const fetchUserData = async () => {
        try {
            const response = await fetch("/src/data/userData.json");
            const dataParse = await response.json();
            userData.value = dataParse;
            socialNetworks.value = dataParse.social_networks;
        } catch (error) {
            console.log(error);
        }
    };

    fetchUserData();

    provide("userData", userData);
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
