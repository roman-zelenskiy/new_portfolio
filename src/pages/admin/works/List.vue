<script setup lang="ts">
    import { computed } from "vue";
    import { useWorksStore } from "../../../stores";
    import Table from "../../../components/ui/Table.vue";

    const worksStore = useWorksStore();

    const disabledProject = (idProject: number) => {
        worksStore.disabledProject(idProject);
    };

    function mapList(el: Work) {
        const result: TableItemTd[] = [
            {
                title: "ID",
                content: el?.id,
                type: "text",
            },
            {
                title: "Title",
                content: el?.title,
                type: "title",
            },
            {
                title: "TYPE",
                content: el?.type,
                type: "text",
            },
            {
                title: "STATUS",
                content: el?.visible ? "visible" : "hidden",
                type: "text",
                styles: `text-white p-[5px] rounded-[5px] ${el?.visible ? "bg-green-400" : "bg-red-400"}`,
            },
            {
                title: "ACTIONS",
                content: "",

                type: "actions",
                actions: [
                    {
                        content: "Disable",
                        action: () => {
                            disabledProject(el.id);
                        },
                        styles: "bg-red-500 hover:bg-red-600",
                    },
                ],
            },
        ];

        return result;
    }

    const itemsRequests = computed<TableItemTd[][]>(() => worksStore.allWorks.map(mapList));
</script>

<template>
    <Table
        class="mt-[30px]"
        :items="itemsRequests"
    />
</template>

<style scoped></style>
