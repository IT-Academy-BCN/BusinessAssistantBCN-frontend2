export interface Category {
    title: string;
    subcategory: Subcategory[];
}

interface Subcategory{
    title: string;
    items: Items[];
}

interface Items{
    item: string;
}