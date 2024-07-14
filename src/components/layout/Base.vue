<script setup lang="ts">
    import { ref } from "vue";

    import PagesSection from "../PagesSection.vue";

    const isShowNavigation = ref<boolean>(false);
    const switchNavigation = (value: boolean) => {
        isShowNavigation.value = value;
    };
</script>

<template>
    <div class="wrapper_app">
        <nav
            class="nav"
            :class="{ active: isShowNavigation }"
        >
            <slot
                name="navigation"
                :isShowNavigation="isShowNavigation"
                :switchNavigation="switchNavigation"
            ></slot>
        </nav>
        <pages-section
            :isShowNavigation="isShowNavigation"
            @switchNavigation="switchNavigation"
        />
    </div>
</template>

<style lang="scss">
    @import "../../assets/styles/components/navigation.scss";
</style>
