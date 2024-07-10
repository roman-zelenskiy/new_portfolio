<script setup lang="ts">
    import Navigation from "./components/Navigation.vue";
    import PagesSection from "./components/PagesSection.vue";
    // import { socialNetworks } from "./data";
    import { ref, provide } from "vue";

    const userData = ref();
    const socialNetworks = ref([]);

    const isShowNavigation = ref<boolean>(false);
    const switchNavigation = (value: boolean) => {
        isShowNavigation.value = value;
    };

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
    provide("switchNavigation", switchNavigation);
    provide("isShowNavigation", isShowNavigation);
    provide("userData", userData);
    provide("socialNetworks", socialNetworks);
</script>

<template>
    <div class="wrapper_app">
        <navigation :class="{ active: isShowNavigation }" />
        <pages-section />
    </div>
</template>

<style lang="scss">
    @import "./assets/styles/app.scss";
</style>
