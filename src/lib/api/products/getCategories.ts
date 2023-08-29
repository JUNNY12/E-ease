import { RootUrl } from "./getProducts"
// import books from "@/data/products"


// export default async function getCategories(category: string) {
//         const lowercaseCategory = category.toLowerCase();

//         const matchingProducts = books.filter((product: any) =>
//                 product.category.toLowerCase() === lowercaseCategory
//         );
//         return matchingProducts;
// }

export default async function getCategories(category: string) {
        const res = await fetch(`${RootUrl}/api/categories/${category}`);
        const matchingProducts = await res.json();
        return matchingProducts;
}