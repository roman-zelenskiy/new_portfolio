<script setup lang="ts">
    // import { CirclePart1, CirclePart2, CirclePart3, CirclePart4 } from '../assets/img/svg/index.ts';
    import { userData } from '../data';
</script>

<template>
    <div class="main_photo">
        <!-- <span>
            <CirclePart1></CirclePart1>
        </span>
        <span>
            <CirclePart2></CirclePart2>
        </span>
        <span>
            <CirclePart3></CirclePart3>
        </span>
        <span>
            <CirclePart4></CirclePart4>
        </span> -->
        <div class="photo_wrap">
            <img
                class="photo"
                :src="userData.main_photo"
                alt=""
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
    .main_photo {
        width: 100%;
        position: relative;
        flex-shrink: 0;
        &::before {
            content: '';
            display: block;
            width: 100%;
            padding-top: 100%;
        }

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

        .photo_wrap {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
            .photo {
                width: 100%;
                object-fit: cover;
            }
        }
    }
</style>
