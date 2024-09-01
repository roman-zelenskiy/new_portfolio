<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import ModalSuccess from '../../../components/common/ModalSuccess.vue';
  import Table from '../../../components/ui/Table.vue';
  import PrimaryButton from '../../../components/ui/PrimaryButton.vue';
  import { useWorksStore } from '../../../stores';

  const router = useRouter();
  const worksStore = useWorksStore();
  const isSuccessUpdateModal = ref(false);

  const switchSuccessUpdateModal = (value: boolean) => {
    isSuccessUpdateModal.value = value;
  };

  const switchProject = async (idProject: number) => {
    const response = await worksStore.switchProject(idProject);

    if (response.status === 1) {
      switchSuccessUpdateModal(true);
    }
  };

  function mapList(el: Work) {
    const result: TableItem[] = [
      {
        title: 'ID',
        content: el?.id,
        type: 'text'
      },
      {
        title: 'Title',
        content: el?.title,
        type: 'image',
        link: el?.img
      },
      {
        title: 'Title',
        content: el?.title,
        type: 'title'
      },
      {
        title: 'ACTIONS',
        content: '',

        type: 'actions',
        actions: [
          {
            content: el?.visible ? 'Disable' : 'Enable',
            action: () => {
              switchProject(el.id);
            },
            styles: el?.visible ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          },
          {
            content: 'Edit',
            action: () => {
              // router.push({ name: 'UpdateWork', params: { projectId: el.id } });
            }
          }
        ]
      }
    ];

    return result;
  }

  const itemsRequests = computed<TableItem[][]>(() => worksStore.allWorks.map(mapList));
</script>

<template>
  <div class="w-full">
    <ModalSuccess v-model="isSuccessUpdateModal" />

    <div>
      <div class="flex items-center justify-between">
        <h1 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Works</h1>
        <PrimaryButton :typeElement="'router-link'" :to="{ name: 'CreateWork' }">
          New Work
        </PrimaryButton>
      </div>
      <Table class="mt-[30px]" :items="itemsRequests" />
    </div>
  </div>
</template>

<style scoped></style>
