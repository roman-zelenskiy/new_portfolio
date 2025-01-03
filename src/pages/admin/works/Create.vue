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
    img: '',
    images: [],
    technologies: []
  });

  const createProject = async () => {
    const { success, error } = await workStore.createProject(inputs.value);

    if (!success) {
      errorMessage.value = error;
      isModalDanger.value = true;
    } else {
      isModalSuccess.value = true;
    }
  };
</script>

<template>
  <div>
    <ProjectForm :title="'Create project'" :payloadInputs="inputs" @actionPage="createProject" />
  </div>
</template>

<style scoped></style>
