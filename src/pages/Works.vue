<script setup lang="ts">
    import { inject } from "vue";
    import { ArrowIcon } from "../assets/img/svg";

    const userData: any = inject("userData");
</script>

<template>
    <div class="works_page">
        <div class="header_section">
            <p class="title_page">Works</p>
            <p class="secondary_title">Recent project</p>
            <div class="project_list">
                <div
                    v-for="project in userData.works"
                    class="project_item"
                >
                    <a
                        class="link"
                        :href="project.link"
                    ></a>
                    <div class="content">
                        <p class="type_project">{{ project.type }}</p>
                        <h4 class="name_project">{{ project.title }}</h4>
                        <p class="technologies">Technologies: {{ project.technologies }}</p>
                        <div class="icon">
                            <span class="btn">
                                <ArrowIcon></ArrowIcon>
                            </span>
                        </div>
                    </div>
                    <div class="image_box">
                        <img
                            :src="project.img"
                            :alt="project.title"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "../assets/styles/pages/works.scss";
</style>
