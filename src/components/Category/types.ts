import { ISelectedOption } from "../Picker/types";

export type ICategory = {
    id: number;
    name: string;
    // Adicionado para ordenar
    views: number;
}

export type ICategoryPosts = {
    category: ICategory;
}

export type ICategoryWrapper = {
    selectedOrder: ISelectedOption;
}