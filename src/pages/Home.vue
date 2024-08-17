<script setup lang="ts">
  import { MailIcon, PhoneIcon } from '../assets/img/svg/index.ts';
  import ContactItem from '../components/ContactItem.vue';
  import MainImage from '../components/MainImage.vue';
  import PrimaryButton from '../components/ui/PrimaryButton.vue';
  import { computed, inject } from 'vue';
  import { useRouter } from 'vue-router';

  const userData: any = inject('userData');
  const router = useRouter();
  const contactList = computed(() => [
    {
      title: userData?.value?.phone_number,
      href: `tel:${userData?.value?.phone_number}`,
      icon: PhoneIcon,
    },
    {
      title: userData?.value?.email,
      href: `mailto:${userData?.value?.email}`,
      icon: MailIcon,
    },
  ]);

  const onCGotoContact = () => {
    router.push({ name: 'Contact' });
  };
</script>

<template>
  <div class="home_page">
    <div class="content_box">
      <div class="name_photo">
        <h3 class="title_home">
          <span class="title_home_icon"></span>
          My name is <span class="bold">{{ userData?.full_name }}...</span>
        </h3>
      </div>
      <p class="specialty">
        <span class="bold_italic">{{ userData?.specialty }}</span> based in
        <span class="bold_italic">{{ userData?.city }}</span>
      </p>
      <PrimaryButton @click="onCGotoContact()"> Let’s talk with me </PrimaryButton>

      <ul class="contact_box">
        <ContactItem v-for="item in contactList" :key="item.title" :item="item"></ContactItem>
      </ul>
    </div>
    <div class="photo_box">
      <MainImage></MainImage>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../assets/styles/pages/home.scss';

  .title_home_icon {
    @apply absolute left-[-329px] top-[-155px] z-[-1]  mx-auto my-5  h-[244px] w-[250px] translate-x-[229px] rotate-[237deg] rounded-[300px] border-r-[205px] border-solid border-r-transparent bg-cover content-[''];
    background: linear-gradient(45deg, #b86adf, #ff6c63, #ffb147) no-repeat;
    background-position-y: -25px;
    filter: drop-shadow(-8px -10px 5px rgba(0, 0, 0, 0.3));
  }
</style>
