declare interface Work {
  id: number;
  title: string;
  link: string | null;
  img: string;
  technologies: string[];
  images: string[];
  typeShow: 'images' | 'link' | any;
  visible: boolean;
}

declare interface CreateWork {
  typeShow: Work['typeShow'];
  title: string;
  link: string;
  mainImg: any;
  images: any[];
  technologies: string[];
}
