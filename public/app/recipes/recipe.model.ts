export interface Recipe {
    _id: string;
    name: string;
    ingredients: any[];
    methodOfPreparation: string;
    imgUrl: string;
    author: string;
    status: string;
    rejectMessage: string;
}
