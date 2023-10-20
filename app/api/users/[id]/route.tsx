import { NextRequest, NextResponse } from "next/server"
import schema from "../schema"
import { prisma } from "@/prisma/client"

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string} }) {
    
    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })

    if (!user){
        return NextResponse.json({error: 'User not found'})
    }
    return NextResponse.json(user)
}

//Use PUT for replacing an object and PATCH for replacing properties. 
export async function PUT(
        request: NextRequest,
        { params }: { params: { id: string} }
    ) {
    const body = await request.json()
    
    // Validate with Zod
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 404 })

    const user = await prisma.user.findUnique({
        where: { id:params.id}
    })
    if (!user)
        return NextResponse.json(
        { error: 'User not found' }, 
        { status: 404 }
        )
    
    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(updatedUser)

}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string} }
) {
    // Simulate Error
    const user = await prisma.user.findUnique({
        where: {id: params.id}
    })
    if (!user)
        return NextResponse.json({ error: "User not found"}, { status: 404})

   await prisma.user.delete({
        where: {id: user.id}
    })
    // Delete the user
    return NextResponse.json({})
    // Return 200
}