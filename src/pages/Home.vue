<script setup lang="ts">
    import { userData } from '../data';
    import { MailIcon, PhoneIcon } from '../assets/img/svg/index.ts';
    import PrimaryButton from '../components/PrimaryButton.vue';
    import MainImage from '../components/MainImage.vue'

</script>

<template>
    <div class="home_page">
        <div class="content_box">
            <div class="name_photo">
                <h3 class="title">
                    My name is <span class="bold">{{ userData.full_name }}...</span>
                </h3>
            </div>
            <p class="specialty">
                <span class="bold_italic">{{ userData.specialty }}</span> based in
                <span class="bold_italic">{{ userData.city }}</span>
            </p>
            <PrimaryButton> Let’s talk with me </PrimaryButton>
            <ul class="contact_box">
                <li class="phone_number">
                    <a :href="`tel: ${userData.phone_number}`">
                        <span class="icon">
                            <PhoneIcon></PhoneIcon>
                        </span>
                        <span class="value">{{ userData.phone_number }}</span>
                    </a>
                </li>
                <li class="email">
                    <a :href="`mailto: ${userData.email}`">
                        <span class="icon">
                            <MailIcon></MailIcon>
                        </span>
                        <span class="value">{{ userData.email }}</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="photo_box">
            <MainImage></MainImage>
        </div>
    </div>
</template>

<style scoped>
    @import '../assets/styles/pages/home.scss';
</style>
