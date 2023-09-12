<script setup lang="ts">
    import { userData, socialNetworks } from '../data';
    import PrimaryButton from '../components/PrimaryButton.vue';
</script>

<template>
    <div class="contact_page">
        <div class="content_box">
            <h5 class="page_title">Contact</h5>
            <p class="text_contact">Reach out me</p>
            <p class="residence">{{ userData.city }}, {{ userData.county }}</p>
            <ul class="gmail_phone">
                <li class="phone_number">
                    <a :href="`tel: ${userData.phone_number}`">
                        +380 {{ userData.phone_number }}
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
            <h5 class="title_form">any project?</h5>
            <form action="#">
                <div class="form_wrap">
                    <div class="input_box">
                        <input class="name" type="text" placeholder="Name">
                        <input class="email" type="email" placeholder="Email">
                        <textarea class="message" placeholder="Message"></textarea>
                    </div>
                    <PrimaryButton class="send_btn">
                        Submit now
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/styles/pages/contact.scss';
</style>
