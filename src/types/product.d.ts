interface Review {
    _id:string
    name: string,
    email: string,
    rating: number,
    comment: string,
    createdAt:string
}

interface Product {
    _id?: string;
    slug?: string;
    title?: string;
    description?: string;
    price?: number;
    image:{
        url?:string,
        public_id:string,
        secure_url:string,
        asset_id:string,
    },
    quantity?: number;
    category?: string;
    averageRating?: number;
    yearOfRelease?: number;
    publisher?: string;
    pageNumber?: number;
    author: {
        authorName?: string;
        aboutAuthor?: string;
    }
    reviews?: Review[];
    language?: string;
}