<script setup lang="ts">
    import Button from "./Button.vue";
</script>

<template>
    <Button class="cursor-pointer text-black duration-hover hover:opacity-hover focus:outline-none focus:outline-0">
        <slot />
    </Button>
</template>

<style scoped></style>
