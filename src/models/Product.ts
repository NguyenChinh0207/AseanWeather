export interface IProduct {
    id: number;
    name: string;
    slug: string;
    price: number;
    categoryId: number;
    src: string;
    description?: string;
    [key: string]: any;
}