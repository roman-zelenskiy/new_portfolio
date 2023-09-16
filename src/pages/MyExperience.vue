<script setup lang="ts">
    import { inject } from "vue";
    import ExperienceItem from "../components/ExperienceItem.vue";
    const userData: any = inject("userData");
</script>

<template>
    <div class="my_experience_page">
        <p class="page_title">My experience</p>
        <ul class="experience_list">
            <ExperienceItem
                v-for="item in userData.experience"
                :experience="item"
            ></ExperienceItem>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    @import "../assets/styles/pages/my_experience.scss";
</style>
