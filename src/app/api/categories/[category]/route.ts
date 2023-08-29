import { NextResponse } from "next/server";
import books from "@/data/products";

type Props = {
    params: {
        category: string;
    };
};

export async function GET(request: Request, { params: { category } }: Props) {
    const lowercaseCategory = category.toLowerCase();

    const matchingProducts = books.filter((product: any) =>
        product.category.toLowerCase() === lowercaseCategory
    );

    return NextResponse.json(matchingProducts);
}
