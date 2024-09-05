<script setup lang="ts">
  import { useDataBase } from '../utils';

  const { main_photo } = useDataBase();
</script>

<template>
  <div class="main_photo">
    <div class="photo_wrap">
      <img
        class="size-[30vw] rounded-[50%] object-cover lg:size-[25vw]"
        :src="main_photo"
        alt="photo"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .main_photo {
    flex-shrink: 0;

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
  }
</style>
