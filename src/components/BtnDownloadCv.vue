<script setup lang="ts">
    import { ArrowIcon } from "../assets/img/svg";
</script>

<template>
    <a
        download="CV"
        href="./data/cv.pdf"
        class="download_cv_btn"
    >
        <span>Download CV</span>
        <span class="icon icon_black">
            <ArrowIcon class="black"></ArrowIcon>
        </span>
        <span class="icon icon_white">
            <ArrowIcon class="white"></ArrowIcon>
        </span>
    </a>
</template>

<style scoped lang="scss">
    @import "../assets/styles/variables.scss";
    .download_cv_btn {
        color: $darkColor;
        font-weight: 500;
        font-size: 18px;
        padding: 5px 30px 5px 0;
        position: relative;
        &:hover .icon svg {
            transform: translate(12px, -12px);
        }
        .icon_white {
            overflow: hidden;
        }
        .icon {
            width: 24px;
            height: 24px;
            display: block;
            background: $darkColor;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto 0;
            .black {
                fill: $darkColor;
            }
            .white {
                fill: #ffffff;
            }
            .white,
            .black {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                width: 18px;
                height: 18px;
                margin: auto;
                transition: 0.3s;
            }
        }
    }
</style>
