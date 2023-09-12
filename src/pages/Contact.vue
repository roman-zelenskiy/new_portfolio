<script setup lang="ts">
    import { userData, socialNetworks } from '../data';
    import PrimaryButton from '../components/PrimaryButton.vue';
</script>

<template>
    <div class="contact_page">
        <div class="content_box">
            <h5 class="page_title">Contact</h5>
            <p class="text_contact">Reach out me</p>
            <p class="residence">Sumy, Ukraine</p>
            <ul class="gmail_phone">
                <li class="phone_number">
                    <a :href="`tel: ${userData.phone_number}`">
                        {{ userData.phone_number }}
                    </a>
                </li>
                <li class="email">
                    <a :href="`mailto: ${userData.email}`">
                        {{ userData.email }}
                    </a>
                </li>
            </ul>
            <ul class="social_networks">
                <li v-for="item in socialNetworks"><a :href="item.path">{{ item.title }}</a></li>
            </ul>
        </div>
        <div class="form_box">
            <h5>any project?</h5>
            <form action="#">
                <div class="input_box">

                </div>
                <PrimaryButton>
                    Submit now
                </PrimaryButton>
            </form>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/styles/pages/contact.scss';
</style>
