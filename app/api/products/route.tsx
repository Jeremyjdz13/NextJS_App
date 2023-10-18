import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client"

//Note: Without the request: NextRequest, Nextjs will cache the result of the response. 
export async function GET(
    request: NextRequest
    ) {
    // fetch users from db
    const products = await prisma.product.findMany()
    return NextResponse.json(products)

}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body)

    if(!validation.success)
        return NextResponse.json(validation.error.errors, { status : 400 })
    
    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    })

    return NextResponse.json(newProduct);
} 

// return NextResponse.json(
//     { 
//         id: 10,
//         //...body Note this could potentially send extra properties not defined in your schema
//         name: body.name,
//         price: body.price 
//     }, { status: 201 });