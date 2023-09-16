<script setup lang="ts">
    import { useRouter } from "vue-router";
    import { inject } from "vue";
    import { MailIcon, PhoneIcon } from "../assets/img/svg/index.ts";
    import PrimaryButton from "../components/PrimaryButton.vue";
    import MainImage from "../components/MainImage.vue";
    import ContactItem from "../components/ContactItem.vue";

    const userData: any = inject("userData");
    const router = useRouter();
    const contactList = [
        {
            title: userData.phone_number,
            href: `tel: ${userData.phone_number}`,
            icon: PhoneIcon,
        },
        {
            title: userData.email,
            href: `mailto: ${userData.email}`,
            icon: MailIcon,
        },
    ];

    const onCGotoContact = () => {
        router.push({ name: "Contact" });
    };
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
            <PrimaryButton @click="onCGotoContact()"> Let’s talk with me </PrimaryButton>
            <ul class="contact_box">
                <ContactItem
                    v-for="item in contactList"
                    :item="item"
                ></ContactItem>
            </ul>
        </div>
        <div class="photo_box">
            <MainImage></MainImage>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../assets/styles/pages/home.scss";
</style>
