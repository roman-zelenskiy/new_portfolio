<script setup lang="ts">
    import { FwbModal } from "flowbite-vue";
    import ButtonClose from "./ButtonClose.vue";
    import { cn } from "../../utils";
    defineProps<{
        modelValue: boolean;
        title?: string;
        isButtonClose?: boolean;
        ui?: {
            size?: "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
            title?: string;
        };
    }>();

    const emits = defineEmits(["update:modelValue"]);

    function closeModal() {
        emits("update:modelValue", false);
    }
</script>

<template>
    <fwb-modal
        :size="ui?.size"
        class="custom-modal"
        v-if="modelValue"
        @close="closeModal"
    >
        <template #body>
            <div class="p-[20px] md:p-[25px] relative xl:p-[30px]">
                <ButtonClose
                    class="!absolute top-[15px] right-[15px]"
                    v-if="isButtonClose"
                    @click="closeModal"
                ></ButtonClose>
                <div>
                    <h4
                        :class="
                            cn(
                                'text-black text-center mb-[15px] md:mb-[25px] uppercase mx-[15px] font-medium mt-[10px] md:text-[22px] text-[20px]',
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
    .custom-modal button[aria-label="close"] {
        display: none;
    }
</style>
