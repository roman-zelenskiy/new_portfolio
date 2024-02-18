<script setup lang="ts">
    import OpenNavBtn from "./OpenNavBtn.vue";
</script>

<template>
    <perfect-scrollbar class="h-[100vh]">
        <div class="pages_section">
            <div class="burger_box">
                <open-nav-btn />
            </div>
            <div class="page_box">
                <router-view v-slot="{ Component, route }">
                    <Transition
                        name="slide-fade"
                        mode="out-in"
                    >
                        <component
                            :is="Component"
                            :key="route.path"
                        />
                    </Transition>
                </router-view>
            </div>
        </div>
    </perfect-scrollbar>
</template>

<style lang="scss">
    @import "../assets/styles/components/pages_section.scss";
</style>
