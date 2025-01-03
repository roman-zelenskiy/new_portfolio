<script setup lang="ts">
  import { cn } from '../../utils';
  import TableItem from './TableItem.vue';
  import { computed, ref } from 'vue';

  const props = defineProps<{
    item: TableItem[];
    childrenColor?: boolean;
    thirdNestingColor?: boolean;
  }>();

  const isChildrenElements = ref<boolean>(false);

  const changeChildrenElements = (value: boolean) => {
    isChildrenElements.value = value;
  };

  const getChildren = computed(() => {
    let result: TableItem[][] = [];

    for (let el of props.item) {
      if (el.type === 'children') {
        result = el.children || [];
        break;
      }
      result = [];
    }

    return result;
  });
</script>

<template>
  <!-- <div
    :style="`grid-`"
        :class="{
            'bg-gray-200': childrenColor,
            'bg-gray-300': thirdNestingColor,
        }"
    > -->
  <div
    v-for="td in item"
    :key="td.content"
    class="whitespace-nowrap self-center px-[10px] py-4 align-middle text-sm font-normal text-gray-500 dark:text-gray-400"
  >
    <img
      v-if="td.type === 'image'"
      :src="td.link"
      :alt="td.content"
      class="h-[40px] w-[70px] rounded-[10px] border-[1px] border-solid border-gray-400 object-cover md:border-[2px]"
    />
    <div v-if="td.type === 'arrayStatuses'">
      <div
        v-for="(el, index) in td.arrayStatuses"
        :key="index"
        class="flex items-center gap-[10px]"
      >
        <span
          :class="
            cn('h-[10px] w-[10px] rounded-[50%]', {
              'bg-gray-500': el.checkNotActive,
              'bg-red-500': el.checkDanger && !el.checkNotActive,
              'bg-yellow-300': el.checkWarning && !el.checkDanger && !el.checkNotActive,
              'bg-green-500':
                el.checkSuccess && !el.checkWarning && !el.checkDanger && !el.checkNotActive,
            })
          "
        ></span>
        <span>{{ el.title }}</span>
      </div>
    </div>
    <div
      v-if="td.type === 'title'"
      :class="
        cn(
          'inline-block max-w-[200px] truncate text-base font-semibold text-gray-900 dark:text-white',
          td.styles
        )
      "
    >
      {{ td.content }}
    </div>
    <span v-if="td.type === 'text'" :class="cn('inline-block max-w-[200px] truncate', td?.styles)">
      {{ td.content }}
    </span>
    <a
      v-if="td.type === 'link'"
      :href="td.link"
      :class="
        cn('inline-block max-w-[200px] truncate font-semibold text-black underline', td.styles)
      "
    >
      {{ td.content }}
    </a>
    <div v-if="td.type === 'actions'" :class="cn('', td.styles)">
      <button
        v-for="action in td.actions"
        :key="action.content"
        @click="action?.action"
        class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        :class="action?.styles"
      >
        {{ action.content }}
      </button>
      <button
        v-if="getChildren.length > 0"
        @click="changeChildrenElements(!isChildrenElements)"
        class="mb-2 me-2 rounded-lg bg-gray-500 px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4"
      >
        <span v-if="!isChildrenElements">Показати дочірні</span>
        <span v-else>Сховати дочірні</span>
      </button>
    </div>
  </div>
  <!-- </div> -->
  <TableItem
    v-if="isChildrenElements"
    v-for="(item, index) in getChildren"
    :key="index"
    :item="item"
    :childrenColor="true"
    :thirdNestingColor="props.childrenColor"
  />
</template>

<style scoped></style>
