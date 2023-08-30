<script setup lang="ts">
    import SocialNetwork from './SocialNetwork.vue';
</script>
<template>
    <nav class="nav">
        <div class="top_sec_nav">
            <h3 class="name_nav">Roman.</h3>
            <ul class="menu_nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">My experience</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div class="bottom_sec_nav">
            <social-network></social-network>
            <p class="text_bottom">©2023 Roman Zelenskyi</p>
        </div>
    </nav>
</template>

<style lang="scss">
    @import '../../assets/styles/components/navigation';
</style>
