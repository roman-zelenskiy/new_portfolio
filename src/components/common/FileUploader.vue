<script setup lang="ts">
  import { ref, watch, computed } from 'vue';

  type FileObject = {
    path: string;
    [key: string]: any;
  };

  type Props = {
    selectedFiles: FileObject[];
    fileNameKey?: string;
    readOnly?: boolean;
    idInput?: string;
    label?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    fileNameKey: 'filename'
  });

  const id = computed(() => {
    return props.idInput ? `${props.idInput}dropzone-file` : 'dropzone-file';
  });

  const emit = defineEmits(['update:selectedFiles']);

  const selectedFiles = ref<any[]>([...props.selectedFiles]);

  const showImages = ref<string[]>([]);

  const handleFileUpload = (event: any) => {
    const { files } = event.target;
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        selectedFiles.value.push(files[i]);

        const fileReader = new FileReader();
        fileReader.onload = function () {
          const src = fileReader.result as string;
          showImages.value.push(src);
        };

        fileReader.readAsDataURL(files[i]);
      }
    }
    emit('update:selectedFiles', selectedFiles.value);
  };

  watch(
    () => selectedFiles,
    () => {},
    { deep: true }
  );

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        selectedFiles.value.push(files[i]);

        const fileReader = new FileReader();
        fileReader.onload = function () {
          const src = fileReader.result as string;
          showImages.value.push(src);
        };

        fileReader.readAsDataURL(files[i]);
      }
    }
    emit('update:selectedFiles', selectedFiles.value);
  };

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const removeFile = (index: number) => {
    selectedFiles.value.splice(index, 1);
    showImages.value.splice(index, 1);

    emit('update:selectedFiles', selectedFiles.value);
  };

  // const createObjectURL = (filePath: any) => {
  //   if (filePath) {
  //     // navigateTo(file.path, "blank");
  //     // router?.push({ path: filePath });
  //     return false;
  //   }
  //   // router.push({ path: URL.createObjectURL(file) });
  //   // navigateTo(URL.createObjectURL(file), "blank");
  // };

  watch(
    () => props.selectedFiles,
    (newVal) => {
      selectedFiles.value = [...newVal];
    }
  );
</script>

<template>
  <div>
    <label v-if="!readOnly" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
      {{ label || 'Images' }}
    </label>
    <div v-if="!readOnly" class="flex w-full items-center justify-center">
      <label
        :for="id"
        class="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        @dragover="handleDragOver"
        @drop="handleDrop"
      >
        <div class="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            class="mb-4 size-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span>
            or drag and drop
          </p>
        </div>
        <input :id="id" type="file" class="hidden" multiple @change="handleFileUpload" />
      </label>
    </div>
    <div v-if="showImages.length > 0" class="mt-4">
      <h2 class="mb-2 text-lg font-semibold">Selected files</h2>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div
          v-for="(file, index) in showImages"
          :key="index"
          class="relative flex flex-col items-center justify-between overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800"
        >
          <!-- <button
            type="button"
            @click="createObjectURL(file)"
            class="absolute left-0 top-0 z-10 h-full w-full"
          ></button> -->
          <button
            v-if="!readOnly"
            type="button"
            class="absolute right-[10px] top-[10px] z-20 self-end text-red-600 hover:text-red-800 focus:outline-none"
            @click="removeFile(index)"
          >
            <svg
              class="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div class="flex size-full flex-col items-center justify-between">
            <img class="size-full flex-1 object-cover" :src="file" alt="" />
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[70%] w-[70%]"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"
              />
            </svg> -->
            <!-- <div class="w-[90%] text-center">
              <span class="block w-[100%] truncate">
                {{ file?.name || file[fileNameKey] }}
              </span>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .hover_opacity:hover {
    opacity: 0.8;
  }
</style>
