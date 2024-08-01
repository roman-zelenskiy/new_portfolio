<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useDataBase } from '../../../utils';
  import { useWorksStore } from '../../../stores';

  import InputPicture from '../../../components/ui/InputPicture.vue';
  import InputPrimary from '../../../components/ui/InputPrimary.vue';
  import CheckboxPrimary from '../../../components/ui/CheckboxPrimary.vue';

  import SelectPrimary from '../../../components/ui/SelectPrimary.vue';
  import Button from '../../../components/ui/Button.vue';
  import PrimaryButton from '../../../components/ui/PrimaryButton.vue';

  const { skills } = useDataBase();
  const workStore = useWorksStore();

  type Inputs = {
    typeShow: 'link' | 'images' | '';
    title: string;
    link: string;
    mainImg: any;
    images: any[];
    technologies: string[];
  };

  const inputs = ref<Inputs>({
    typeShow: '',
    title: '',
    link: '',
    mainImg: '',
    images: [],
    technologies: [],
  });

  const typeShowOptions = [
    { value: 'link', title: 'Link' },
    { value: 'images', title: 'Images' },
  ];

  const onChangeTechnologies = (item: string) => {
    if (!!inputs.value.technologies.find((el) => el === item)) {
      inputs.value.technologies = inputs.value.technologies.filter((el) => el !== item);
    } else {
      inputs.value.technologies.push(item);
    }
  };

  const createProject = () => {
    workStore.createProject({ mainImage: inputs.value.mainImg });
  };

  watch(
    inputs,
    () => {
      console.log(inputs.value);
    },
    { deep: true }
  );
</script>

<template>
  <div class="grid w-full grid-cols-1 px-4 pt-6 dark:bg-gray-900 xl:grid-cols-3 xl:gap-4">
    <div class="col-span-full mb-4 xl:mb-2">
      <Button @click="$router.go(-1)" class="hover_opacity mb-[15px] flex items-center gap-[7px]">
        <Icon class="rotate-[180deg]" icon="@custom:rz:arrow" width="24" height="24" />
        <span>Back</span>
      </Button>
      <h1 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Add project</h1>
    </div>
    <div class="col-span-full xl:col-auto">
      <InputPicture v-model="inputs.mainImg"></InputPicture>
      <div
        class="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2"
      >
        <h3 class="mb-4 text-xl font-semibold dark:text-white">Select technologies</h3>

        <div class="grid grid-cols-2 gap-[10px]">
          <CheckboxPrimary
            v-for="(item, index) in skills"
            :value="!!inputs.technologies.find((el) => el === item)"
            @change="onChangeTechnologies(item)"
            :key="index"
            :label="item"
          ></CheckboxPrimary>
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
                v-model="inputs.title"
                type="text"
                name="first-name"
                id="first-name"
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
                v-model="inputs.typeShow"
                :options="typeShowOptions"
                name="first-name"
                id="first-name"
                placeholder="Select"
                required=""
              />
            </div>
            <div v-if="inputs.typeShow === 'link'" class="col-span-6 sm:col-span-3">
              <label
                for="last-name"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Link</label
              >
              <InputPrimary
                v-model="inputs.link"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="https://www.example.com/"
                required=""
              />
            </div>
            <!-- <div class="col-span-6 sm:col-span-3">
              <label for="city" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >City</label
              >
              <input
                type="text"
                name="city"
                id="city"
                class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                placeholder="e.g. San Francisco"
                required=""
              />
            </div> -->
            <!-- <div class="col-span-6 sm:col-span-3">
              <label
                for="address"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Address</label
              >
              <input
                type="text"
                name="address"
                id="address"
                class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                placeholder="e.g. California"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="email"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                placeholder="example@company.com"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="phone-number"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Phone Number</label
              >
              <input
                type="number"
                name="phone-number"
                id="phone-number"
                class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                placeholder="e.g. +(12)3456 789"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="birthday"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Birthday</label
              >
              <input
                type="number"
                name="birthday"
                id="birthday"
                class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                placeholder="15/08/1990"
                required=""
              />
            </div> -->
          </div>
        </form>
      </div>
    </div>

    <div class="col-span-full mt-[15px] flex justify-center md:mt-[20px]">
      <PrimaryButton @click="createProject">Create</PrimaryButton>
    </div>
  </div>
</template>

<style scoped></style>
