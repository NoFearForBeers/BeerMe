export interface User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    profileImgURL: string;
    email: string;
    recipes: any[];
    forumPoints: number;
    isAdmin: boolean;
};