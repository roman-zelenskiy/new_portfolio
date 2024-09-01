<script setup lang="ts">
  import { ref } from 'vue';

  const { experience } = defineProps(['experience']);

  const isVisible = ref<boolean>(false);
</script>

<template>
  <li class="experience_item" :class="{ active: isVisible }">
    <button class="btn_open" @click="isVisible = !isVisible">
      <span class="content">
        <span class="position">{{ experience.position }}</span>
        <span class="information">
          <span class="organization">{{ experience.organization }}</span>
          <span class="work_period">{{ experience.work_period }}</span>
        </span>
      </span>
      <span class="icon"></span>
    </button>
    <div class="description_box">
      <div class="text">
        <p class="technologies">Technologies: {{ experience.technologies.join(', ') }}</p>
        <p class="description" v-html="experience.description"></p>
        <a v-if="experience.link" class="link" :href="experience.link">
          {{ experience.link }}
        </a>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
  @import '../assets/styles/components/experience_item.scss';
</style>
