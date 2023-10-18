import { base_URL } from "@/lib/constants/baseUrl";



export async function getProducts(query?:string){
  try {
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
