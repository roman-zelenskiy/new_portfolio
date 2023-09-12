<script setup lang="ts">
    import OpenNavBtn from './OpenNavBtn.vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    console.log(route.path);
</script>

<template>
    <custom-scrollbar :style="{ height: '100vh' }">
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
    </custom-scrollbar>
</template>

<style lang="scss">
    @import '../assets/styles/components/pages_section.scss';
</style>
