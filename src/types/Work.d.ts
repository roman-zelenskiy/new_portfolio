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
  title: Work['title'];
  link: Work['link'];
  img: any;
  images: any[];
  technologies: string[];
}
