import { ref } from 'vue';

export function usePreShowImages(file: File) {
  const src = ref<string | ArrayBuffer | null>('');

  const fileReader = new FileReader();
  fileReader.onload = function () {
    src.value = fileReader.result;
  };

  fileReader.readAsDataURL(file);
  
  return src;
}