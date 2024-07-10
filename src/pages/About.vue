<script setup lang="ts">
    import { inject, computed, Ref } from "vue";
    import { PhoneIcon, PlaceIcon, UserIcon, MailIcon } from "../assets/img/svg";
    import ContactItem from "../components/ContactItem.vue";
    import EducationList from "../components/EducationList.vue";
    import BtnDownloadCv from "../components/BtnDownloadCv.vue";

    const userData: Ref<any> | undefined | any = inject("userData");
    const contactList = computed(() => [
        {
            title: userData?.value?.phone_number,
            href: `tel: ${userData?.value?.phone_number}`,
            icon: PhoneIcon,
        },
        {
            title: userData?.value?.age,
            icon: UserIcon,
        },
        {
            title: userData?.value.email,
            href: `mailto: ${userData?.value?.email}`,
            icon: MailIcon,
        },
        {
            title: `${userData?.value?.county}, ${userData?.value.city}`,
            icon: PlaceIcon,
        },
    ]);
</script>

<template>
    <div class="about_page">
        <div class="header_section">
            <div class="greetings">
                <p class="title_page">Nice to meet you!</p>
                <p class="big_text">Welcome to...</p>
            </div>
            <BtnDownloadCv></BtnDownloadCv>
        </div>
        <div class="content_box">
            <div class="left_box">
                <EducationList :education="userData.education"></EducationList>
                <EducationList :education="userData.courses"></EducationList>
            </div>
            <div class="right_box">
                <ul class="contact_list">
                    <ContactItem
                        v-for="item in contactList"
                        :item="item"
                    ></ContactItem>
                </ul>
                <div class="skills">
                    <h5 class="italic_text">Skills</h5>
                    <p class="skills_list">{{ userData.skills }}</p>
                </div>
                <div class="languages">
                    <h5 class="italic_text">Languages</h5>
                    <ul class="languages_list">
                        <li v-for="language in userData.languages">{{ language }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "../assets/styles/pages/about.scss";
</style>
