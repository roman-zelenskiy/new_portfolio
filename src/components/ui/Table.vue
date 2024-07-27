<script setup lang="ts">
  import { cn } from '../../utils';
  import TableItem from './TableItem.vue';
  import { computed } from 'vue';

  const props = defineProps<{
    items: TableItem[][];
  }>();

  const headers = computed(() =>
    props.items?.length > 0
      ? props.items[0].map((el: TableItem) => {
          return {
            title: el.title,
            style: el?.styleHeader,
          };
        })
      : []
  );

  const quantityTableColumn = computed(() => headers.value.length);
</script>

<template>
  <perfect-scrollbar :watchOptions="true" class="w-full">
    <div class="flex w-full flex-col">
      <div class="">
        <div :style="`grid-template-columns: repeat(${quantityTableColumn}, auto)`" class="grid">
          <div
            v-for="(header, index) in headers"
            :key="index"
            scope="col"
            class="p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
          >
            <p :class="cn('group flex items-center gap-[10px]', header?.style)">
              <span> {{ header.title }}</span>
            </p>
          </div>
          <TableItem v-for="(item, index) in items" :key="index" :item="item" />
        </div>
        <!-- <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                    <thead class="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th
                                v-for="(header, index) in headers"
                                :key="index"
                                scope="col"
                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                            >
                                <p :class="cn('flex items-center group gap-[10px]', header?.style)">
                                    <span> {{ header.title }}</span>
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        <TableItem
                            v-for="(item, index) in items"
                            :key="index"
                            :item="item"
                        />
                    </tbody>
                </table> -->
      </div>
    </div>
  </perfect-scrollbar>
</template>

<style scoped></style>
