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

    const createProject = async ({ mainImage }:{ mainImage: File | Blob }) => {
      const formData = new FormData();
      formData.append("mainImage", mainImage);

      try {
        const response = await fetch('/.netlify/functions/create-github-file-and-update-database', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error updating file:", error);
      }
    };

    return {
      allWorks,
      visibleWorks,
      switchProject,
      createProject
    };
  });