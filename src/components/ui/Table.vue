<script setup lang="ts">
    import { computed } from "vue";
    import TableItem from "./TableItem.vue";
    import { cn } from "../../utils";

    const props = defineProps<{
        items: TableItemTd[][];
    }>();

    const emits = defineEmits(["actionGetList"]);

    const headers = computed(() =>
        props.items?.length > 0
            ? props.items[0].map((el: TableItemTd) => {
                  return {
                      title: el.title,
                      style: el?.styleHeader,
                  };
              })
            : []
    );
</script>

<template>
    <div class="flex flex-col">
        <div class="overflow-y-auto">
            <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
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
            </table>
        </div>
    </div>
</template>

<style scoped></style>
