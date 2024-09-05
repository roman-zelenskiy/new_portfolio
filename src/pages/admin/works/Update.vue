<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { watchDeep } from '@vueuse/core';
  import ProjectForm from '../../../components/layout/ProjectForm.vue';
  import { useWorksStore } from '../../../stores';
  import { useDataBase } from '../../../utils';

  const route = useRoute();
  const { works } = useDataBase();
  const workStore = useWorksStore();
  const isModalSuccess = ref(false);
  const isModalDanger = ref(false);
  const errorMessage = ref('');
  const projectId: number = +route.params.projectId;

  const currentWork = computed(() => works.find((el) => el.id === projectId));

  const inputs = ref<CreateWork>({
    typeShow: 'link',
    title: '',
    link: '',
    img: '',
    images: [],
    technologies: []
  });

  const getUserData = () => {
    if (!currentWork.value) return false;

    inputs.value.typeShow = currentWork.value.typeShow;
    inputs.value.title = currentWork.value.title;
    inputs.value.link = currentWork.value.link;
    inputs.value.img = currentWork.value.img;
    inputs.value.images = currentWork.value.images;
    inputs.value.technologies = currentWork.value.technologies;
  };

  const updateProject = async () => {
    // const { success, error } = await workStore.createProject({
    //   mainImage: inputs.value.mainImg,
    //   title: inputs.value.title,
    //   link: inputs.value.link,
    //   technologies: inputs.value.technologies,
    //   images: inputs.value.images,
    //   typeShow: inputs.value.typeShow
    // });
    // if (!success) {
    //   errorMessage.value = error;
    //   isModalDanger.value = true;
    // } else {
    //   isModalSuccess.value = true;
    // }
  };

  watchDeep(
    () => inputs.value,
    () => {
      console.log(inputs.value);
    }
  );

  getUserData();
</script>

<template>
  <div>
    <ProjectForm :title="'Create project'" :payloadInputs="inputs" @actionPage="updateProject" />
  </div>
</template>

<style scoped></style>
