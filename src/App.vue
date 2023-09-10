<script setup lang="ts">
    import Navigation from './components/Navigation/Navigation.vue';
    import PagesSection from './components/PagesSection/PagesSection.vue';
    import { ref, provide } from 'vue';

    const isShowNavigation = ref<boolean>(false);
    const switchNavigation = (value: boolean) => {
        isShowNavigation.value = value;
    };
    provide('switchNavigation', switchNavigation);
    provide('isShowNavigation', isShowNavigation);
</script>

<template>
    <div class="wrapper_app">
        <navigation :class="{ active: isShowNavigation }" />
        <pages-section />
    </div>
</template>

<style lang="scss">
    @import './assets/styles/app.scss';
</style>
