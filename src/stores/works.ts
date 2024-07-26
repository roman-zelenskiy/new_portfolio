import { defineStore } from 'pinia'
import { computed } from 'vue';
import {useAsyncUpdateData} from '../utils';
import userData from "../data/userData.json";


export const useWorksStore = defineStore('works', () => {
    const allWorks = computed<Work[]>(() =>
      userData.works.map((work: any) => ({
        ...work,
      }))
    );

    const visibleWorks = computed<Work[]>(() =>
        allWorks.value.filter(el => el.visible !== false)
      );


    const switchProject = async (idProject: number) => {
        let newUserData = { ...userData };
        newUserData.works = userData.works.map(el => {
            if (el.id === idProject) {
                return {
                    ...el,
                    visible: !el.visible,
                };
            }
            return el;
        });

        const response = await useAsyncUpdateData(newUserData);
        return response;
    };

    return {
      allWorks,
      visibleWorks,
      switchProject
    };
  });