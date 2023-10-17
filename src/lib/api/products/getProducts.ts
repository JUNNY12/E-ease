import books from "@/data/products";
import slugify from "slugify";
import { base_URL } from "@/lib/constants/baseUrl";

export const RootUrl = (
  process.env.NODE_ENV === "production"
    ? "https://e-ease.vercel.app"
    : "http://localhost:3000"
)

// export default async function getProducts(){

//   const res = books;

//   return res;
// }

export async function getProducts(query?:string){
  try {
    // if(query !== ''){
    //   const res = await fetch(`${base_URL}/products/search`,{
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({query: query})
    //   });

    //   const products = await res.json();
    //   console.log(products);
    //   return products;
    // }
    const res = await fetch(`${base_URL}/products`,{
      next:{revalidate:60},
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const products = await res.json();
    return products;

  } catch (err) {
    console.error(err); 
  }
}


export async function getProduct(slug: string) {
  const res = await fetch(`${base_URL}/products/${slug}`, {next:{revalidate:60}});
  const product = await res.json();
  return product;
}
