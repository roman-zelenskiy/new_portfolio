<script setup lang="ts">
    import { inject, watch } from "vue";
    import ButtonOpacityClose from "./ButtonOpacityClose.vue";
    import { register } from "swiper/element/bundle";
    register();

    const props = defineProps<{
        modelValue: boolean;
        slides: string[];
    }>();

    const lockedPagesSectionScroll: any = inject("lockedPagesSectionScroll");

    const emits = defineEmits(["update:modelValue"]);

    const updateValue = (value: boolean) => {
        emits("update:modelValue", value);
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
            class="fixed w-full h-full flex justify-between py-[50px] flex-col items-center z-[200] bg-white-transparent top-0 left-0"
        >
            <ButtonOpacityClose
                @click="updateValue(false)"
                class="self-end mr-[5%]"
            ></ButtonOpacityClose>

            <div class="w-[95%] md:w-[100%] flex-1 flex justify-center items-center">
                <swiper-container
                    class="w-full swiper_images"
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
                        class="h-full items-center flex justify-center"
                    >
                        <img
                            class="block object-cover"
                            :src="slide"
                        />
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
