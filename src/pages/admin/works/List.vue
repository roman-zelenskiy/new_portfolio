<script setup lang="ts">
  import ModalSuccess from '../../../components/common/ModalSuccess.vue';
  import Table from '../../../components/ui/Table.vue';
  import { useWorksStore } from '../../../stores';
  import { computed, ref } from 'vue';

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
        type: 'text',
      },
      {
        title: 'Title',
        content: el?.title,
        type: 'image',
        link: el?.img,
      },
      {
        title: 'Title',
        content: el?.title,
        type: 'title',
      },
      {
        title: 'TYPE',
        content: el?.type,
        type: 'text',
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
            styles: el?.visible ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600',
          },
          {
            content: 'Edit',
            action: () => {},
          },
        ],
      },
    ];

    return result;
  }

  const itemsRequests = computed<TableItem[][]>(() => worksStore.allWorks.map(mapList));
</script>

<template>
  <ModalSuccess v-model="isSuccessUpdateModal"></ModalSuccess>
  <Table class="mt-[30px]" :items="itemsRequests" />
</template>

<style scoped></style>
