<script setup lang="ts">
    import { ref } from "vue";
    import { useAuthStore } from "../../stores";
    import { useRouter } from "vue-router";

    import Modal from "../ui/Modal.vue";
    import InputPrimary from "../ui/InputPrimary.vue";
    import PrimaryButton from "../ui/PrimaryButton.vue";

    const router = useRouter();
    const authStore = useAuthStore();
    const validKey = import.meta.env.VITE_PERSONAL_ACCESS_TOKEN_GITHUB;

    const isShowModal = ref(false);
    const inputKey = ref("");
    const error = ref("");

    const showModal = () => {
        isShowModal.value = true;
    };

    const toAdmin = () => {
        if (authStore.checkAdminKey()) {
            router.push({ name: "AdminMain" });
            return false;
        }
        showModal();
    };

    const auth = () => {
        if (inputKey.value !== validKey) {
            console.log(validKey);
            console.log(inputKey.value);
            error.value = "Wrong key!";
            return false;
        }

        authStore.setAdminKey(inputKey.value);
        router.push({ name: "AdminMain" });
    };
</script>

<template>
    <div>
        <Modal
            :ui="{ size: 'lg' }"
            isButtonClose
            v-model="isShowModal"
            title="Authorization"
        >
            <form @submit.prevent="auth">
                <div class="flex flex-col">
                    <InputPrimary
                        v-model="inputKey"
                        placeholder="Enter the key"
                    ></InputPrimary>
                    <div class="flex flex-col">
                        <p
                            v-if="error"
                            class="text-red-600 mt-[10px]"
                        >
                            {{ error }}
                        </p>
                        <PrimaryButton
                            type="submit"
                            class="mt-[20px] md:mt-[30px] self-center"
                        >
                            Sign in
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </Modal>
        <button
            class="absolute left-[100px] cursor-default opacity-0"
            @click="toAdmin"
        >
            Admin
        </button>
    </div>
</template>

<style scoped></style>
