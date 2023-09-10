<script setup lang="ts">
    import SocialNetwork from './SocialNetwork.vue';
    import { about } from '../data/about';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();
    const routes = router.options.routes;
</script>
<template>
    <nav class="nav">
        <div class="top_sec_nav">
            <h3 class="name_nav">{{ about.first_name }}.</h3>
            <ul class="menu_nav">
                <li v-for="item in routes">
                    <router-link
                        :to="{ path: item.path }"
                        :class="{ active: item.path === route.path }"
                        >{{ item.name }}</router-link
                    >
                </li>
            </ul>
        </div>
        <div class="bottom_sec_nav">
            <social-network></social-network>
            <p class="text_bottom">©2023 {{ about.full_name }}</p>
        </div>
    </nav>
</template>

<style lang="scss">
    @import '../assets/styles/components/navigation';
</style>
