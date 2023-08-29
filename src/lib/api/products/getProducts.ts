import books from "@/data/products";
import slugify from "slugify";

export const RootUrl = (
  process.env.NODE_ENV === "production"
    ? "https://e-ease.vercel.app"
    : "http://localhost:3000"
)

// export default async function getProducts(){

//   const res = books;

//   return res;
// }

export default async function getProducts() {
  const res = await fetch(`${RootUrl}/api/products`);
  const products = await res.json();
  return products;
}


// export async function getProduct(slug: string) {
//   const productSlug = slugify(slug, { lower: true });

//   const product = books.find((product: any) =>
//     slugify(product.name, { lower: true }) === productSlug
//   );
 
//   return product;
// }


export async function getProduct(slug: string) {
  const res = await fetch(`${RootUrl}/api/products/${slug}`);
  const product = await res.json();
  return product;
}
