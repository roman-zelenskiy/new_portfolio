<script setup lang="ts">
import { computed, ref } from "vue";
import TableItem from "./TableItem.vue";
import { cn } from "../../utils";

const props = defineProps<{
    item: TableItemTd[];
    childrenColor?: boolean;
    thirdNestingColor?: boolean;
}>();

const isChildrenElements = ref<boolean>(false);

const changeChildrenElements = (value: boolean) => {
    isChildrenElements.value = value;
};

const getChildren = computed(() => {
    let result: TableItemTd[][] = [];

    for (let el of props.item) {
        if (el.type === "children") {
            result = el.children || [];
            break;
        }
        result = [];
    }

    return result;
});
</script>

<template>
<tr :class="{
    'bg-gray-200': childrenColor,
    'bg-gray-300': thirdNestingColor,
}">
    <td v-for="td in item" :key="td.content" class="py-4 px-[10px] text-sm font-normal align-middle text-gray-500 whitespace-nowrap dark:text-gray-400">
        <img
            v-if="td.type === 'image'"
            :src="td.link"
            :alt="td.content"
            class="w-[70px] h-[40px] border-solid border-[1px] md:border-[2px] border-gray-400 rounded-[10px] object-cover"
        />
        <div v-if="td.type === 'arrayStatuses'">
            <div v-for="(el, index) in td.arrayStatuses" :key="index" class="flex items-center gap-[10px]">
                <span
                    :class="cn('w-[10px] h-[10px] rounded-[50%]', {
                        'bg-gray-500': el.checkNotActive,
                        'bg-red-500': el.checkDanger && !el.checkNotActive,
                        'bg-yellow-300': el.checkWarning && !el.checkDanger && !el.checkNotActive,
                        'bg-green-500': el.checkSuccess && !el.checkWarning && !el.checkDanger && !el.checkNotActive,
                    })"
                ></span>
                <span>{{ el.title }}</span>
            </div>
        </div>
        <div v-if="td.type === 'title'" :class="cn('text-base truncate max-w-[200px] inline-block font-semibold text-gray-900 dark:text-white', td.styles)">
            {{ td.content }}
        </div>
        <span v-if="td.type === 'text'" :class="cn('truncate max-w-[200px] inline-block', td?.styles)">
            {{ td.content }}
        </span>
        <a v-if="td.type === 'link'" :href="td.link" :class="cn('font-semibold truncate max-w-[200px] inline-block underline text-black', td.styles)">
            {{ td.content }}
        </a>
        <div v-if="td.type === 'actions'" :class="cn('', td.styles)">
            <button
                v-for="action in td.actions"
                :key="action.content"
                @click="action?.action"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                :class="action?.styles"
            >
                {{ action.content }}
            </button>
            <button
                v-if="getChildren.length > 0"
                @click="changeChildrenElements(!isChildrenElements)"
                class="text-white bg-gray-500 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
                <span v-if="!isChildrenElements">Показати дочірні</span>
                <span v-else>Сховати дочірні</span>
            </button>
        </div>
    </td>
</tr>
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