<script setup lang="ts">
  import { cn } from '../../utils';
  import ButtonClose from './ButtonClose.vue';
  import { FwbModal } from 'flowbite-vue';

  defineProps<{
    modelValue: boolean;
    title?: string;
    isButtonClose?: boolean;
    ui?: {
      size?: 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
      title?: string;
    };
  }>();

  const emits = defineEmits(['update:modelValue']);

  function closeModal() {
    emits('update:modelValue', false);
  }
</script>

<template>
  <fwb-modal
    :size="ui?.size"
    class="custom-modal animate-fade animate-duration-500"
    v-if="modelValue"
    @close="closeModal"
  >
    <template #body>
      <div class="relative p-[20px] md:p-[25px] xl:p-[30px]">
        <ButtonClose
          class="!absolute right-[15px] top-[15px]"
          v-if="isButtonClose"
          @click="closeModal"
        ></ButtonClose>
        <div>
          <h4
            :class="
              cn(
                'mx-[15px] mb-[15px] mt-[10px] text-center text-[20px] font-medium uppercase text-black md:mb-[25px] md:text-[22px]',
                ui?.title
              )
            "
            v-if="title"
          >
            {{ title }}
          </h4>
          <div>
            <slot />
          </div>
        </div>
      </div>
    </template>
  </fwb-modal>
</template>

<style>
  .custom-modal > div {
    background-color: rgb(200 200 200 / 50%);
  }
  .custom-modal > div + div > div {
    @apply h-auto;
  }
  .custom-modal > div + div > div > div {
    @apply rounded-[0px];
  }
  .custom-modal > div + div > div > div > div {
    @apply p-[0px];
  }
  .custom-modal button[aria-label='close'] {
    display: none;
  }
</style>
