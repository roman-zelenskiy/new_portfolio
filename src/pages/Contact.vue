<script setup lang="ts">
  import { computed, inject, ref } from 'vue';
  import { useToggle } from '@vueuse/core';
  import PrimaryButton from '../components/ui/PrimaryButton.vue';
  import ModalSuccess from '../components/common/ModalSuccess.vue';
  import ModalDanger from '../components/common/ModalDanger.vue';

  const [isModalSuccess, toggleModalSuccess] = useToggle();
  const [isModalDanger, toggleModalDanger] = useToggle();

  const userData: any = inject('userData');
  const socialNetworks: any = inject('socialNetworks');
  const name = ref<string>('');
  const email = ref<string>('');
  const message = ref<string>('');

  const messageToUser = ref('');

  const TOKEN = computed(() => import.meta.env.VITE_TELEGRAM_BOT_TOKEN);
  const messageToTelegram = computed(
    () =>
      `<b>Сообщение с сайта портфолио!</b>\n <b>Имя отправителя: </b>${name.value}\n <b>Почта отправителя: </b>${email.value}\n <b>Сообщение: </b>${message.value}`
  );
  const CHAT_ID = '-1001324585348';
  const URI_API = computed(() => `https://api.telegram.org/bot${TOKEN.value}/sendMessage`);

  const onSendForm = () => {
    fetch(URI_API.value, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ chat_id: CHAT_ID, parse_mode: 'html', text: messageToTelegram.value }),
    }).then((response: any) => {
      if (response.ok) {
        name.value = '';
        email.value = '';
        message.value = '';

        messageToUser.value = 'Thank you! Message sent!';
        toggleModalSuccess(true);
      } else {
        messageToUser.value = 'Try again';
        toggleModalDanger(true);
      }
    });
  };
</script>

<template>
  <div>
    <ModalSuccess v-model="isModalSuccess" :message="messageToUser"></ModalSuccess>
    <ModalDanger v-model="isModalDanger" :message="messageToUser"></ModalDanger>
    <div class="contact_page">
      <div class="content_box">
        <h5 class="page_title">Contact</h5>
        <p class="text_contact">Reach out me</p>
        <p class="residence">{{ userData?.city }}, {{ userData?.county }}</p>
        <ul class="gmail_phone">
          <li class="phone_number">
            <a :href="`tel: ${userData?.phone_number}`">{{ userData?.phone_number }} </a>
          </li>
          <li class="email">
            <a :href="`mailto: ${userData?.email}`">
              {{ userData?.email }}
            </a>
          </li>
        </ul>
        <ul class="social_networks">
          <li v-for="item in socialNetworks">
            <a :href="item?.path">{{ item?.title }}</a>
          </li>
        </ul>
      </div>
      <div class="form_box">
        <h5 class="title_form">any project?</h5>
        <form action="#" @submit.prevent="onSendForm()">
          <div class="form_wrap">
            <div class="input_box">
              <input class="name" required type="text" v-model="name" placeholder="Name" />
              <input class="email" required type="email" v-model="email" placeholder="Email" />
              <textarea v-model="message" required class="message" placeholder="Message"></textarea>
            </div>
            <PrimaryButton class="send_btn"> Submit now </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../assets/styles/pages/contact.scss';
</style>
