<script setup lang="ts">
    import { computed } from "vue";
    import Modal from "../ui/Modal.vue";

    const props = defineProps<{
        modelValue: boolean;
        message?: string;
    }>();

    const emits = defineEmits(["update:modelValue"]);

    const value = computed({
        get: () => props.modelValue,
        set: (newValue: boolean) => {
            emits("update:modelValue", newValue);
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
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-[70px] h-[70px] fill-green-500"
                viewBox="0 0 16 16"
            >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path
                    d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
                />
            </svg>
            <p class="text-[16px] text-green-500 text-center md:text-[18px] xl:text-[24px]">
                {{ message || "Successfully updated! Wait for the data to complete!" }}
            </p>
        </div>
    </Modal>
</template>

<style scoped></style>
