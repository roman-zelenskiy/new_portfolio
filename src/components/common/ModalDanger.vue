<script setup lang="ts">
  import Modal from '../ui/Modal.vue';
  import { computed } from 'vue';

  const props = defineProps<{
    modelValue: boolean;
    message: string;
  }>();

  const emits = defineEmits(['update:modelValue']);

  const value = computed({
    get: () => props.modelValue,
    set: (newValue: boolean) => {
      emits('update:modelValue', newValue);
    },
  });
</script>

<template>
  <Modal
    v-model="value"
    isButtonClose
    :ui="{
      size: 'md',
    }"
  >
    <div class="flex flex-col items-center gap-[30px]">
      <svg
        class="h-[70px] w-[70px] fill-red-500"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path
          d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"
        />
      </svg>
      <p class="text-center text-[16px] text-red-500 md:text-[18px] xl:text-[24px]">
        {{ message }}
      </p>
    </div>
  </Modal>
</template>

<style scoped></style>
