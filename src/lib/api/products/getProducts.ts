
export const rootUrl = 'https://e-ease.vercel.app'


export default async function getProducts() {
  const res = await fetch(`${rootUrl}/api/products`);
  const data = await res.json();

  return data;
}

export async function getProduct(id: string) {
  const res = await fetch(`${rootUrl}/api/products/${id}`);
  const data = await res.json();

  return data;
}
