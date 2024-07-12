<script setup lang="ts">
    import { useRouter } from "vue-router";
    import { inject, computed } from "vue";
    import { MailIcon, PhoneIcon } from "../assets/img/svg/index.ts";
    import PrimaryButton from "../components/ui/PrimaryButton.vue";
    import MainImage from "../components/MainImage.vue";
    import ContactItem from "../components/ContactItem.vue";
    import { Octokit } from "@octokit/core";

    const userData: any = inject("userData");
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

    const octokit = new Octokit({
        auth: import.meta.env.VITE_PERSONAL_ACCESS_TOKEN_GITHUB,
    });

    const onClick = async () => {
        try {
            const repoOwner = "roman-zelenskiy";
            const repoName = "new_portfolio";
            const filePath = "src/data/test.json";
            const fileContent = JSON.stringify({
                first_name: "Roman",
                full_name: "Roman Zelenskyi",
                abbr: "RZ",
                country: "Ukraine", // Исправлено: заменено 'county' на 'country'
                city: "Sumy",
                email: "romazelenskiy2000@gmail.com",
                phone_number: "+380683196434",
                specialty: "Frontend Developer",
            });

            // Получаем текущее содержимое файла для получения SHA
            const {
                data: { content, sha },
            } = await octokit.request(`GET /repos/${repoOwner}/${repoName}/contents/${filePath}`);

            // const decodedContent = atob(content);
            // console.log(decodedContent);

            // Кодируем новое содержимое файла в base64
            // const newContent = Buffer.from(fileContent).toString("base64");
            const newContent = btoa(fileContent);

            // Обновляем файл с новым содержимым
            await octokit.request(`PUT /repos/${repoOwner}/${repoName}/contents/${filePath}`, {
                owner: repoOwner,
                repo: repoName,
                path: filePath,
                message: "Update file via API",
                content: newContent,
                sha: sha,
            });

            console.log("File updated successfully");
        } catch (error) {
            console.error("Error updating file:", error);
        }
    };

    const onCGotoContact = () => {
        router.push({ name: "Contact" });
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
            <!-- <PrimaryButton @click="onClick()"> Update File </PrimaryButton> -->
            <ul class="contact_box">
                <ContactItem
                    v-for="item in contactList"
                    :key="item.title"
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

    .title_home_icon {
        @apply content-[''] z-[-1] left-[-329px] top-[-155px]  absolute w-[250px]  bg-cover h-[244px] rotate-[237deg] translate-x-[229px] mx-auto my-5 rounded-[300px] border-r-[205px] border-r-transparent border-solid;
        background: linear-gradient(45deg, #b86adf, #ff6c63, #ffb147) no-repeat;
        background-position-y: -25px;
        filter: drop-shadow(-8px -10px 5px rgba(0, 0, 0, 0.3));
    }
</style>
