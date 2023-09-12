<script setup lang="ts">
    import OpenNavBtn from './OpenNavBtn.vue';
</script>

<template>
    <custom-scrollbar :style="{ height: '100vh' }">
        <div class="pages_section">
            <div class="burger_box">
                <open-nav-btn />
            </div>
            <div class="page_box">
                <router-view></router-view>
            </div>
        </div>
    </custom-scrollbar>
</template>

<style lang="scss">
    .scrollbar__wrapper .scrollbar__thumb {
        background-color: rgb(116, 116, 116);
    }
    @import '../assets/styles/components/pages_section.scss';
</style>
