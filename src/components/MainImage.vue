<script setup lang="ts">
    // import { CirclePart1, CirclePart2, CirclePart3, CirclePart4 } from '../assets/img/svg/index.ts';
    // import { userData } from "../data";

    import { inject } from "vue";

    const userData: any = inject("userData");
</script>

<template>
    <div class="main_photo">
        <div class="photo_wrap">
            <img
                class="photo object-cover rounded-[50%] size-[30vw] lg:size-[25vw]"
                :src="userData?.main_photo"
                alt=""
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
    .main_photo {
        flex-shrink: 0;

        span {
            position: absolute;
            display: block;
            width: 70%;
            top: 0;
            left: 0;
            z-index: 0;
            & + span {
                top: -1%;
                z-index: 1;
                width: 90%;
                left: 11%;
            }
            & + span + span {
                top: 28%;
                left: 2%;
            }
            & + span + span + span {
                top: 57%;
                z-index: 0;
                left: 40%;
                width: 63%;
            }
        }
    }
</style>
