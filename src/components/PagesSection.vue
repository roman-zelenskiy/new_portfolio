<script setup lang="ts">
    import { provide, ref, watch } from "vue";
    import OpenNavBtn from "./OpenNavBtn.vue";
    const isLocked = ref(false);
    const scrollbar = ref();
    const componentRouterView = ref();

    const lockedPagesSectionScroll = (value: boolean) => {
        isLocked.value = value;
    };

    watch(
        componentRouterView,
        () => {
            scrollbar.value?.ps?.update();
        },
        { deep: true }
    );

    provide("lockedPagesSectionScroll", lockedPagesSectionScroll);
</script>

<template>
    <perfect-scrollbar
        :watchOptions="true"
        ref="scrollbar"
        class="h-[100vh]"
    >
        <div
            class="pages_section"
            :class="{ 'overflow-hidden': isLocked }"
        >
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
                            ref="componentRouterView"
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
