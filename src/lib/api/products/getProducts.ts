import books from "@/data/products";
import slugify from "slugify";

export default async function getProducts(){

  const res = books;

  return res;
}


export async function getProduct(slug: string) {
  const productSlug = slugify(slug, { lower: true });

  const product = books.find((product: any) =>
    slugify(product.name, { lower: true }) === productSlug
  );
 
  return product;
}
