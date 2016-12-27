export interface TopBeer {
    _id: string;
    name: string;
    imageUrl: string;
    brand: string;
    brewedAt: string;
    style: string;
    ratings: number;
    averageRating: number;
    comments: any[];
};