<script setup lang="ts">
    import { inject, computed, ref, Ref } from "vue";
    import { ArrowIcon } from "../assets/img/svg";
    import SliderImages from "../components/ui/SliderImages.vue";
    import Button from "../components/ui/Button.vue";

    const userData: Ref<any> | undefined = inject("userData");

    const works = computed<Work[]>(() => userData?.value.works);
    const isModalProjects = ref(false);
    const currentImages = ref<string[]>([]);

    const onClickWork = (checkType: boolean, images: string[]) => {
        if (!checkType) return false;
        currentImages.value = images;
        isModalProjects.value = true;
    };
</script>

<template>
    <div
        class="works_page"
        v-if="userData"
    >
        <div class="header_section">
            <p class="title_page">Works</p>
            <p class="secondary_title">Recent project</p>
            <SliderImages
                :slides="currentImages"
                v-model="isModalProjects"
            ></SliderImages>
            <div class="project_list">
                <div
                    v-for="project in works"
                    class="project_item"
                >
                    <Button
                        class="link"
                        :typeElement="project.typeShow === 'link' ? 'link' : 'button'"
                        :target="project.typeShow === 'link' ? 'blank' : ''"
                        :href="project.typeShow === 'link' ? project.link : ''"
                        @click="onClickWork(project.typeShow === 'images', project.images)"
                    ></Button>
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

<style lang="scss">
    @import "../assets/styles/pages/works.scss";
</style>
