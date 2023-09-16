<script setup lang="ts">
    const { item } = defineProps(['item']);
</script>

<template>
    <li class="item">
        <a
            v-if="item.href"
            :href="item.href"
        >
        </a>
        <span class="icon">
            <component :is="item.icon" />
        </span>
        <span class="value">{{ item.title }}</span>
    </li>
</template>

<style scoped lang="scss">
    @import '../assets/styles/variables.scss';
    @import '../assets/styles/mixins.scss';
    .item {
        display: flex;
        align-items: center;
        gap: 12px;
        color: $darkColor;
        text-decoration: none;
        position: relative;
        a{
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
        }
        .icon {
            padding: 6px;
            background: #1413130e;
            border-radius: 50%;
        }
        .value {
            @include bold_italic_text();
            @include adaptive_font(20, 17, $widthResponsePX);
        }
        svg {
            width: 21px;
            height: 21px;
        }
    }
</style>
