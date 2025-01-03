<script setup lang="ts">
  import { computed } from 'vue';
  import { MailIcon, PhoneIcon, PlaceIcon, UserIcon } from '../assets/img/svg';
  import BtnDownloadCv from '../components/common/BtnDownloadCv.vue';
  import ContactItem from '../components/ContactItem.vue';
  import EducationList from '../components/EducationList.vue';
  import { useDataBase } from '../utils';

  const userData = useDataBase();

  const contactList = computed(() => [
    {
      title: userData?.phone_number,
      href: `tel: ${userData?.phone_number}`,
      icon: PhoneIcon
    },
    {
      title: userData?.age,
      icon: UserIcon
    },
    {
      title: userData?.email,
      href: `mailto: ${userData?.email}`,
      icon: MailIcon
    },
    {
      title: `${userData?.county}, ${userData?.city}`,
      icon: PlaceIcon
    }
  ]);
</script>

<template>
  <div class="about_page">
    <div class="header_section">
      <div class="greetings">
        <p class="title_page">Nice to meet you!</p>
        <p class="big_text">Welcome to...</p>
      </div>
      <BtnDownloadCv />
    </div>
    <div>
      <p
        class="mt-[15px] max-w-[900px] text-[16px] font-medium leading-5 md:mt-[20px] xl:text-[18px]"
        v-html="userData?.about_me"
      ></p>
    </div>
    <div class="content_box">
      <div class="left_box">
        <EducationList :education="userData?.education" />
        <EducationList :education="userData?.courses" />
      </div>
      <div class="right_box">
        <ul class="contact_list">
          <ContactItem v-for="item in contactList" :item="item" />
        </ul>
        <div class="skills">
          <h5 class="italic_text">Skills</h5>
          <p class="skills_list">{{ userData?.skills.join(', ') }}</p>
        </div>
        <div class="languages">
          <h5 class="italic_text">Languages</h5>
          <ul class="languages_list">
            <li v-for="language in userData?.languages">
              {{ language?.lang }}: {{ language?.level }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import '../assets/styles/pages/about.scss';
</style>
