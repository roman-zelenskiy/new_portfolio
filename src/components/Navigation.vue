<script setup lang="ts">
    import { useRoute, useRouter } from "vue-router";
    import { inject } from "vue";

    const route = useRoute();
    const router = useRouter();
    const routes = router.options.routes;

    const userData: any = inject("userData");
    const socialNetworks: any = inject("socialNetworks");
    const isShowNavigation: any = inject<boolean>("isShowNavigation");
    const switchNavigation: any = inject<(value: boolean) => void>("switchNavigation");
    const closeNavigation = () => {
        switchNavigation(!isShowNavigation.value);
    };
</script>
<template>
    <nav
        class="nav"
        v-if="userData"
    >
        <div class="top_sec_nav">
            <h3 class="name_nav">{{ userData?.abbr }}.</h3>
            <ul class="menu_nav">
                <li v-for="item in routes">
                    <router-link
                        :to="{ path: item.path }"
                        @click="closeNavigation"
                        :class="{ active: item.path === route.path }"
                        >{{ item.name }}</router-link
                    >
                </li>
            </ul>
        </div>
        <div class="bottom_sec_nav">
            <ul class="social_network">
                <li v-for="item in socialNetworks">
                    <a :href="item.path">
                        <img :src="item?.icon" />
                    </a>
                </li>
            </ul>
            <p class="text_bottom">©2023 {{ userData.full_name }}</p>
        </div>
    </nav>
</template>

<style lang="scss">
    @import "../assets/styles/components/navigation";
</style>
