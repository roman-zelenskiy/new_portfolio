<script setup lang="ts">
  import { ref } from 'vue';
  import ProjectForm from '../../../components/layout/ProjectForm.vue';
  import { useWorksStore } from '../../../stores';

  const workStore = useWorksStore();
  const isModalSuccess = ref(false);
  const isModalDanger = ref(false);
  const errorMessage = ref('');

  const inputs = ref<CreateWork>({
    typeShow: 'link',
    title: '',
    link: '',
    mainImg: '',
    images: [],
    technologies: []
  });

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
</script>

<template>
  <div>
    <ProjectForm :title="'Create project'" :payloadInputs="inputs" @actionPage="updateProject" />
  </div>
</template>

<style scoped></style>
