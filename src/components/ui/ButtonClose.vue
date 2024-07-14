<script setup lang="ts">
    import Button from "./Button.vue";
</script>

<template>
    <Button class="w-[20px] hover_opacity h-[20px] md:w-[25px] md:h-[25px] xl:w-[30px] relative xl:h-[30px]">
        <span class="block w-[100%] h-[2px] bg-gray-600 rounded-[24px] absolute rotate-45"></span>
        <span class="block w-[100%] h-[2px] bg-gray-600 rounded-[24px] absolute -rotate-45"></span>
    </Button>
</template>
<style scoped></style>
