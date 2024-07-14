<script setup lang="ts">
    import { useRouter } from "vue-router";
    import { inject, computed } from "vue";
    import AdminAuth from "./common/AdminAuth.vue";
    import MenuNavigation from "./common/MenuNavigation.vue";

    const emits = defineEmits(["switchNavigation"]);

    const router = useRouter();

    const menuItems = computed<NavigationMenuItem[]>(() => {
        const currentRoute = router.options.routes.find((el: any) => el.name === "Client");

        return (
            currentRoute?.children?.map((el: any) => ({
                routeName: el.name as string,
                routePath: currentRoute.path + el.path,
                name: el.name as string, 
            })) || []
        );
    });

    const userData: any = inject("userData");
    const socialNetworks: any = inject("socialNetworks");
    const closeNavigation = () => {
        emits("switchNavigation");
    };
</script>
<template>
    <div
        v-if="userData"
        class="wrap"
    >
        <div class="top_sec_nav">
            <h3 class="name_nav">{{ userData?.abbr }}.</h3>
            <MenuNavigation
                :items="menuItems"
                @closeNavigation="closeNavigation"
            ></MenuNavigation>
        </div>
        <AdminAuth></AdminAuth>
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
    </div>
</template>

<style lang="scss">
    @import "../assets/styles/components/navigation";
</style>
