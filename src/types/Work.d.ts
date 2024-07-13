declare interface Work {
    id: number;
    title: string,
    type: string,
    link: string,
    img: string,
    technologies: string,
    images: string[],
    typeShow: 'images' | 'link',
    visible: boolean;
}