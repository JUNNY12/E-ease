import { NextResponse } from "next/server";
import Products from '../../../../json/products.json';
import slugify from "slugify"; // Import the slugify library

type Props = {
    params: {
        slug: string; // Change the parameter name to title
    };
};

export async function GET(request: Request, { params: { slug } }: Props) {
    const productSlug = slugify(slug, { lower: true }); // Convert title to slug

    const product = Products.find((product: any) => 
        slugify(product.name, { lower: true }) === productSlug // Compare with product slugs
    );

    if (!product) {
        return NextResponse.json({ message: 'Product not found' });
    }

    return NextResponse.json(product);
}
