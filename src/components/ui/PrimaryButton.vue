<script setup lang="ts">
  import ArrowIcon from '../../assets/img/svg/ArrowIcon.vue';
  import Button from './Button.vue';
</script>

<template>
  <Button class="primary_button">
    <span>
      <slot></slot>
    </span>
    <span class="icon"> <ArrowIcon></ArrowIcon></span>
  </Button>
</template>

<style scoped lang="scss">
  @import '../../assets/styles/mixins.scss';
  @import '../../assets/styles/variables.scss';
  .primary_button {
    @include adaptive_font(20, 18, $widthResponsePX);
    font-weight: 500;
    background: #000000;
    color: #ffffff;
    padding: 16px 40px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    cursor: pointer;
    .icon {
      display: block;
      width: 25px;
      height: 25px;
      background: $mainBackground;
      padding: 5px;
      box-sizing: border-box;
      svg {
        transition: 0.3s;
        vertical-align: top;
        fill: white;
        widows: 100%;
        height: 100%;
      }
    }
    &:hover .icon svg {
      transform: translate(10px, -10px);
    }
  }
</style>
