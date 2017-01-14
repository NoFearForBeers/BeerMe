export interface User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    recipes: any[];
    forumPoints: number;
    isAdmin: boolean;
}
