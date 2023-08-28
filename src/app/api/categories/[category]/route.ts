import { NextResponse } from "next/server";
import Products from '../../../../json/products.json';

type Props = {
    params: {
        category: string;
    };
};

export async function GET(request: Request, { params: { category } }: Props) {
    const lowercaseCategory = category.toLowerCase();

    const matchingProducts = Products.filter((product: any) =>
        product.category.toLowerCase() === lowercaseCategory
    );

    return NextResponse.json(matchingProducts);
}
