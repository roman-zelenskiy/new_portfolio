<script setup lang="ts">
    import { ref, computed, inject } from "vue";
    import PrimaryButton from "../components/ui/PrimaryButton.vue";

    const userData: any = inject("userData");
    const socialNetworks: any = inject("socialNetworks");
    const name = ref<string>("");
    const email = ref<string>("");
    const message = ref<string>("");

    const TOKEN = computed(() => import.meta.env.VITE_TELEGRAM_BOT_TOKEN);
    const messageToTelegram = computed(
        () =>
            `<b>Сообщение с сайта портфолио!</b>\n <b>Имя отправителя: </b>${name.value}\n <b>Почта отправителя: </b>${email.value}\n <b>Сообщение: </b>${message.value}`
    );
    const CHAT_ID = "-1001324585348";
    const URI_API = computed(() => `https://api.telegram.org/bot${TOKEN.value}/sendMessage`);

    const onSendForm = () => {
        fetch(URI_API.value, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ chat_id: CHAT_ID, parse_mode: "html", text: messageToTelegram.value }),
        }).then(() => {
            name.value = "";
            email.value = "";
            message.value = "";
        });
    };
</script>

<template>
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
            <form
                action="#"
                @submit.prevent="onSendForm()"
            >
                <div class="form_wrap">
                    <div class="input_box">
                        <input
                            class="name"
                            type="text"
                            v-model="name"
                            placeholder="Name"
                        />
                        <input
                            class="email"
                            type="email"
                            v-model="email"
                            placeholder="Email"
                        />
                        <textarea
                            v-model="message"
                            class="message"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <PrimaryButton class="send_btn"> Submit now </PrimaryButton>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../assets/styles/pages/contact.scss";
</style>
