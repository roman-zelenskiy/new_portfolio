<script setup lang="ts">
    import { inject } from 'vue';
    const isShowNavigation: any = inject<boolean>('isShowNavigation');
    const switchNavigation: any = inject<(value: boolean) => void>('switchNavigation');
    const onClickButton = () => {
        switchNavigation(!isShowNavigation.value);
    };
</script>

<template>
    <button
        class="btn_burger"
        :class="{ active: isShowNavigation }"
        @click="onClickButton"
    >
        <span> </span>
        <span></span>
        <span></span>
    </button>
</template>

<style scoped></style>
