<script setup lang="ts">
  defineProps<{
    modelValue: null | File;
  }>();

  const emit = defineEmits(['update:modelValue']);

  const handleChangeFile = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      emit('update:modelValue', target.files[0]);
    }
  };
</script>

<template>
  <div
    class="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2"
  >
    <div
      class="items-center justify-between sm:flex sm:space-x-4 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4"
    >
      <div
        class="relative mb-4 flex h-28 w-28 items-center justify-center rounded-lg bg-gray-300 sm:mb-0 xl:mb-4 2xl:mb-0"
      >
        <input
          class="absolute left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0"
          type="file"
          @change="handleChangeFile"
        />
        <span class="block h-[3px] w-[40%] rotate-[90deg] rounded-[25px] bg-white"></span>
        <div class="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <span class="block h-[3px] w-[40%] rounded-[25px] bg-white"></span>
        </div>
      </div>
      <div>
        <h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Work picture</h3>
        <div class="mb-4 text-sm text-gray-500 dark:text-gray-400">JPG, GIF or PNG</div>
        <div class="flex items-center space-x-4">
          <button
            type="button"
            class="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            @click="emit('update:modelValue', null)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
