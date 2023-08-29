import books from "@/data/products"

export default async function getCategories(category: string) {
        const lowercaseCategory = category.toLowerCase();

        const matchingProducts = books.filter((product: any) =>
                product.category.toLowerCase() === lowercaseCategory
        );
        return matchingProducts;
}