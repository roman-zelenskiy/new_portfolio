declare interface Work {
    id: number;
    title: string,
    link: string | null,
    img: string,
    technologies: string[],
    images: string[],
    typeShow: 'images' | 'link' | any,
    visible: boolean;
}