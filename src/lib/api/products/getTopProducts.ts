import { base_URL } from "@/lib/constants/baseUrl";

export const getTopProducts = async () => {
    const res = await fetch(`${base_URL}/products/topProducts`);
    const data = await res.json();
    return data;
};