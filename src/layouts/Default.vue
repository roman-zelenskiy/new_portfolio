<script setup lang="ts">
    import NavigationClient from "../components/NavigationClient.vue";
    import LayoutBase from "../components/layout/Base.vue";
</script>

<template>
    <LayoutBase>
        <template #navigation="{ isShowNavigation, switchNavigation }">
            <NavigationClient
                :class="{ active: isShowNavigation }"
                @switchNavigation="switchNavigation"
            />
        </template>
    </LayoutBase>
</template>

<style scoped></style>
