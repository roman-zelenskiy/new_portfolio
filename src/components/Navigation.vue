<script setup lang="ts"></script>
<template>
    <nav class="nav">
        <h3 class="name_nav">Roman.</h3>
        <ul class="menu_nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">My experience</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div class="bottom_sec_nav">
            <ul class="social_network">
                <li>
                    <a href="#">
                        <svg class="header-burger-style-for-search-mobile little-margin-right">
                            <use href="./assets/img/sprite_icons.svg#github"></use>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg class="header-burger-style-for-search-mobile little-margin-right">
                            <use href="./assets/img/sprite_icons.svg#linkedin"></use>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg class="header-burger-style-for-search-mobile little-margin-right">
                            <use href="./assets/img/sprite_icons.svg#instagram"></use>
                        </svg>
                    </a>
                </li>
            </ul>
            <p class="text_bottom">Copyright ©2023 Roman Zelenskiy. All right reserved.</p>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    @import '../assets/styles/components/navigation.scss';
</style>
