import {ICategory} from "../../category/model/model";

export interface ITransition {
    id: number;
    author: string;
    sum: string;
    dateTime: string;
    comment: string;
    category: ICategory;
}

export interface ITransitionDate {
    author: string;
    sum: number | string;
    dateTime: string;
    comment: string;
    categoryId: string | null;
}
