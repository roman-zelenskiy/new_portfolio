<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useDataBase } from '../../utils';

  import InputPicture from '../ui/InputPicture.vue';
  import InputPrimary from '../ui/InputPrimary.vue';
  import CheckboxPrimary from '../ui/CheckboxPrimary.vue';

  import SelectPrimary from '../ui/SelectPrimary.vue';
  import Button from '../ui/Button.vue';
  import PrimaryButton from '../ui/PrimaryButton.vue';
  import FileUploader from '../common/FileUploader.vue';
  import ModalSuccess from '../common/ModalSuccess.vue';
  import ModalDanger from '../common/ModalDanger.vue';

  const props = defineProps<{
    payloadInputs: CreateWork;
    title: 'Create project' | 'Edit project';
  }>();

  const emits = defineEmits(['actionPage', 'update:inputs']);

  const router = useRouter();
  const { skills } = useDataBase();
  const isModalSuccess = ref(false);
  const isModalDanger = ref(false);
  const errorMessage = ref('');

  const inputs = computed({
    get: () => props.payloadInputs,
    set: (newInputs: CreateWork) => {
      emits('update:inputs', { ...newInputs });
    }
  });

  const typeShowOptions = [
    { value: 'link', title: 'Link' },
    { value: 'images', title: 'Images' }
  ];

  const onChangeTechnologies = (item: string) => {
    if (inputs.value.technologies.find((el) => el === item)) {
      inputs.value.technologies = inputs.value.technologies.filter((el) => el !== item);
    } else {
      inputs.value.technologies.push(item);
    }
  };
</script>

<template>
  <div class="grid w-full grid-cols-1 px-4 pt-6 dark:bg-gray-900 xl:grid-cols-3 xl:gap-4">
    <ModalSuccess v-model="isModalSuccess" />
    <ModalDanger v-model="isModalDanger" :message="errorMessage" />

    <div class="col-span-full mb-4 xl:mb-2">
      <Button
        class="hover_opacity mb-[15px] flex items-center gap-[7px]"
        @click="router.push({ name: 'AdminWorks' })"
      >
        <Icon class="rotate-[180deg]" icon="@custom:rz:arrow" width="24" height="24" />
        <span>Back</span>
      </Button>
      <h1 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">{{ title }}</h1>
    </div>
    <div class="col-span-full xl:col-auto">
      <InputPicture v-model="inputs.mainImg" />
      <div
        class="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2"
      >
        <h3 class="mb-4 text-xl font-semibold dark:text-white">Select technologies</h3>

        <div class="grid grid-cols-2 gap-[10px]">
          <CheckboxPrimary
            v-for="(item, index) in skills"
            :key="index"
            :value="!!inputs.technologies.find((el) => el === item)"
            :label="item"
            @change="onChangeTechnologies(item)"
          />
        </div>
      </div>
    </div>
    <div class="col-span-2">
      <div
        class="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2"
      >
        <h3 class="mb-4 text-xl font-semibold dark:text-white">General information</h3>
        <form action="#">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="first-name"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Title</label
              >
              <InputPrimary
                id="first-name"
                v-model="inputs.title"
                type="text"
                name="first-name"
                placeholder="Landing"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="country"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Type Show</label
              >
              <SelectPrimary
                id="first-name"
                v-model="inputs.typeShow"
                :options="typeShowOptions"
                name="first-name"
                placeholder="Select"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="last-name"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Link</label
              >
              <InputPrimary
                id="first-name"
                v-model="inputs.link"
                type="text"
                name="first-name"
                placeholder="https://www.example.com/"
                required=""
              />
            </div>
            <div class="col-span-full sm:col-span-full">
              <FileUploader v-model:selectedFiles="inputs.images" label="Images" />
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="col-span-full mt-[15px] flex justify-center md:mt-[20px]">
      <PrimaryButton @click="emits('actionPage')">{{ title }}</PrimaryButton>
    </div>
  </div>
</template>

<style scoped></style>
