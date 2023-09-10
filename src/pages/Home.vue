<script setup lang="ts">
    import { about } from '../data/about';
    import MailIcon from '../assets/img/svg/MailIcon.vue';
    import PhoneIcon from '../assets/img/svg/PhoneIcon.vue';
    import PrimaryButton from '../components/PrimaryButton.vue';
</script>

<template>
    <div class="home_page">
        <div class="content_box">
            <h3 class="title">
                My name is <span class="bold">{{ about.full_name }}...</span>
            </h3>
            <p class="specialty">
                <span class="bold_italic">{{ about.specialty }}</span> based in
                <span class="bold_italic">London</span>
            </p>
            <PrimaryButton> Let’s talk with me </PrimaryButton>
            <ul class="contact_box">
                <li class="phone_number">
                    <PhoneIcon></PhoneIcon>
                    <span>{{ about.phone_number }}</span>
                </li>
                <li class="email">
                    <MailIcon></MailIcon>
                    <span>{{ about.email }}</span>
                </li>
            </ul>
        </div>
        <div class="photo_box"></div>
    </div>
</template>

<style scoped></style>
