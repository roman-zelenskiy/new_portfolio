<script setup lang="ts">
    import ButtonOpacity from "./ButtonOpacity.vue";
</script>

<template>
    <ButtonOpacity class="w-[20px] h-[20px] md:w-[25px] md:h-[25px] xl:w-[30px] relative xl:h-[30px]">
        <span class="block w-[100%] h-[2px] bg-gray-600 rounded-[24px] absolute rotate-45"></span>
        <span class="block w-[100%] h-[2px] bg-gray-600 rounded-[24px] absolute -rotate-45"></span>
    </ButtonOpacity>
</template>
<style scoped></style>
