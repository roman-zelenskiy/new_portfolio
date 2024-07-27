<script setup lang="ts">
  import { useAuthStore } from '../../stores';
  import InputPrimary from '../ui/InputPrimary.vue';
  import Modal from '../ui/Modal.vue';
  import PrimaryButton from '../ui/PrimaryButton.vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const authStore = useAuthStore();
  const validKey = import.meta.env.VITE_ADMIN_PASSWORD;

  const isShowModal = ref(false);
  const inputKey = ref('');
  const error = ref('');

  const showModal = () => {
    isShowModal.value = true;
  };

  const toAdmin = () => {
    if (authStore.checkAdminKey()) {
      router.push({ name: 'AdminMain' });
      return false;
    }
    showModal();
  };

  const auth = () => {
    if (inputKey.value !== validKey) {
      console.log(validKey);
      console.log(inputKey.value);
      error.value = 'Wrong key!';
      return false;
    }

    authStore.setAdminKey(inputKey.value);
    router.push({ name: 'AdminMain' });
  };
</script>

<template>
  <div>
    <Modal :ui="{ size: 'lg' }" isButtonClose v-model="isShowModal" title="Authorization">
      <form @submit.prevent="auth">
        <div class="flex flex-col">
          <InputPrimary v-model="inputKey" placeholder="Enter the key"></InputPrimary>
          <div class="flex flex-col">
            <p v-if="error" class="mt-[10px] text-red-600">
              {{ error }}
            </p>
            <PrimaryButton type="submit" class="mt-[20px] self-center md:mt-[30px]">
              Sign in
            </PrimaryButton>
          </div>
        </div>
      </form>
    </Modal>
    <button class="absolute left-[100px] cursor-default opacity-0" @click="toAdmin">Admin</button>
  </div>
</template>

<style scoped></style>
