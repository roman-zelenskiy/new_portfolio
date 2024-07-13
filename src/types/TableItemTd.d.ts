
declare interface TableItemTd {
    title: string;
    content: any;
    type: "title" | "text" | "image" | "link" | "actions" | "children" | 'arrayStatuses';
    link?: string;
    children?: TableItemTd[][];
    styleHeader?: string;
    styles?: string;
    actions?: {
        styles?: string,
        content: string,
        action: Function
    }[],
    arrayStatuses?: {
        title: string;
        checkDanger: boolean;
        checkWarning: boolean;
        checkSuccess: boolean;
        checkNotActive: boolean;
    }[]
};
