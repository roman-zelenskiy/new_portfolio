<script setup lang="ts">
  defineProps<{
    education: any;
  }>();
</script>

<template>
  <div class="education">
    <h5 class="title">{{ education?.title }}</h5>
    <ul class="education_list">
      <li v-for="item in education?.list">
        <p class="name_place">{{ item?.name_place }}</p>
        <p class="specialty">{{ item?.specialty }}. {{ item?.level }}</p>
        <p class="study_period">{{ item?.study_period }}</p>
        <a v-if="item?.certificate" :href="item?.certificate" class="certificate">Certificate</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  @import '../assets/styles/mixins.scss';

  .education {
    .education_list {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 15px;
    }
    .title {
      @include italic_header();
    }
    .name_place,
    .specialty {
      @include adaptive_font(18, 16, $widthResponsePX);
      font-weight: 600;
      line-height: 150%;
    }
    .specialty {
      font-weight: 500;
    }
    .study_period {
      font-weight: 12px;
      color: rgb(175, 175, 175);
      margin-top: 10px;
    }
    .certificate {
      font-size: 14px;
      font-weight: 600;
      display: inline-block;
      color: $darkColor;
      text-transform: uppercase;
      text-decoration: none;
      margin-top: 5px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
