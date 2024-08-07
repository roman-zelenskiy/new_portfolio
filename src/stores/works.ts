import { defineStore } from 'pinia'
import { computed } from 'vue';
import {useAsyncUpdateData, useId} from '../utils';
import userData from "../data/userData.json";


type ProjectPayload = {
  mainImage: File;
  title: Work['title'];
  link: Work['link'];
  technologies: Work['technologies']
  images: File[] | Blob[];
  typeShow: Work['typeShow'];
}

const VITE_STORAGE_DIRECTORY = import.meta.env.VITE_STORAGE_DIRECTORY?.replace('public', '') || '';


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

    const createProject = async (payload:ProjectPayload): Promise<{ error: string; success: boolean; }> => {
      const formData = new FormData();

      if(payload.mainImage ){
        formData.append("files[]", payload.mainImage);
      }

      payload.images.forEach(element => {
        formData.append("files[]", element);
      });

      try {
        const response = await fetch('/.netlify/functions/create-github-file-and-update-database', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();

        if(!data.success){
          return data
        }
        let filesData: {filename: string}[] = data.data;

        useId(userData.works)

        let newUserData: DataBase = { ...userData };

        newUserData.works = [{
          id: useId(userData.works),
          title: payload.title,
          technologies: payload.technologies,
          link: payload.link,
          img: VITE_STORAGE_DIRECTORY + payload.mainImage.name,
          images: filesData.filter(el => el.filename !== payload.mainImage.name).map(el=> VITE_STORAGE_DIRECTORY + el.filename),
          visible: true,
          typeShow: payload.typeShow
        },...newUserData.works]

        const responseCreateProject = await useAsyncUpdateData(newUserData);
        return responseCreateProject;
      } catch (error) {
        console.error("Error updating file:", error);
        return {
          error: "Error updating file:" + error,
          success: false
        };
      }
    };

    return {
      allWorks,
      visibleWorks,
      switchProject,
      createProject
    };
  });