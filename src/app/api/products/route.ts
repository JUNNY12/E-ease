import { NextResponse } from "next/server";
import Products from '../../../json/products.json'

export async function GET(){
    const res = Products
    return NextResponse.json(res)
}