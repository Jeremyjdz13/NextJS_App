import { NextRequest, NextResponse } from "next/server"
import schema from "../schema"
import { prisma } from "@/prisma/client"

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string} }) {
    
    const product = await prisma.product.findUnique({
        where: {id: parseInt(params.id)}
    })

    if (!product){
        return NextResponse.json({error: 'Product not found'})
    }

    return NextResponse.json(product)
}

//Use PUT for replacing an object and PATCH for replacing properties. 
export async function PUT(
        request: NextRequest,
        { params }: { params: { id: number} }
    ) {
    // Validate the request body
    const body = await request.json()
    // If invalid, return 400

    // Validate with Zod
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 404 })

    //Simulate user not found
    if (params.id > 10)
        return NextResponse.json({error: 'Product not found'}, { status: 404 })
    // Fetch the user with the given Id
    return NextResponse.json(
        { 
            id: 1, 
            name: body.name,
            price: body.price
        })
    // Update the user
    // Return the updated user
}

export function DELETE(
    request: NextRequest,
    { params }: { params: { id: number} }
) {
    // Simulate Error
    if (params.id > 10)
        return NextResponse.json({ error: "Product not found"}, { status: 404})
    // Fetch user from db
    // If not found, return 404

    // Delete the user
    return NextResponse.json({})
    // Return 200
}