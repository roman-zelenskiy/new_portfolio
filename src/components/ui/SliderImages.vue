<script setup lang="ts">
  import ButtonClose from './ButtonClose.vue';
  import { register } from 'swiper/element/bundle';
  import { inject, watch } from 'vue';

  register();

  const props = defineProps<{
    modelValue: boolean;
    slides: string[];
  }>();

  const lockedPagesSectionScroll: any = inject('lockedPagesSectionScroll');

  const emits = defineEmits(['update:modelValue']);

  const updateValue = (value: boolean) => {
    emits('update:modelValue', value);
  };

  watch(
    () => props.modelValue,
    () => {
      lockedPagesSectionScroll(props.modelValue);
    },
    { deep: true }
  );
</script>

<template>
  <Transition name="fade">
    <div
      v-if="modelValue"
      class="fixed left-0 top-0 z-[200] flex h-full w-full flex-col items-center justify-between bg-white-transparent py-[50px]"
    >
      <ButtonClose @click="updateValue(false)" class="hover_opacity mr-[5%] self-end"></ButtonClose>

      <div class="flex w-[95%] flex-1 items-center justify-center md:w-[100%]">
        <swiper-container
          class="swiper_images w-full"
          effect="coverflow"
          grab-cursor="true"
          slides-per-view="1"
          :scrollbar="{
            enabled: true,
            draggable: true,
            dragSize: 65,
          }"
          :injectStyles="[
            '.swiper-wrapper { padding-bottom: 50px !important; } .swiper-scrollbar-drag { height: 5px !important; cursor: pointer; background-color: black; } .swiper-scrollbar-drag:hover { opacity: 0.8; } @media (min-width: 768px) { .swiper-scrollbar-drag { height: 7px !important; } } @media (min-width: 1800px) { .swiper-scrollbar-drag { height: 10px !important; } } .swiper-scrollbar { position: absolute; left: 0; right: 0; margin: 0 auto; height: 5px !important; width: 145px !important; overflow: hidden; } @media (min-width: 768px) { .swiper-scrollbar { height: 7px !important; width: 200px !important; } } @media (min-width: 1800px) { .swiper-scrollbar { height: 10px !important; width: 250px !important; } }',
          ]"
          :breakpoints="{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }"
          space-between="100"
          centered-slides="true"
          coverflow-effect-rotate="50"
          coverflow-effect-stretch="0"
          coverflow-effect-depth="100"
          coverflow-effect-modifier="1"
          coverflow-effect-slide-shadows="true"
        >
          <swiper-slide
            v-for="(slide, index) in slides"
            :key="index"
            class="flex h-full items-center justify-center"
          >
            <img class="block object-cover" :src="slide" />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </Transition>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
