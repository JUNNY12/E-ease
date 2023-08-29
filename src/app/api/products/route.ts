import { NextResponse } from "next/server";
import books from "@/data/products";

export async function GET() { 
    const res = books;
    return NextResponse.json(res);
}
