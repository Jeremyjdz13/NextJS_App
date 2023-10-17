import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

//Note: Without the request: NextRequest, Nextjs will cache the result of the response. 
export function GET(
    request: NextRequest
    ) {
    // fetch users from db
    return NextResponse.json(
        [
            {id: 1, name: "Milk", price: 2.5},
            {id: 2, name: "Bread", price: 3.5}
        ]
    )

}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body)

    if(!validation.success)
        return NextResponse.json(validation.error.errors, { status : 400 })
    
    // if(!body.name)
    //     return NextResponse.json({error: "Name is require"}, { status: 400})

    return NextResponse.json(
        { 
            id: 10,
            //...body Note this could potentially send extra properties not defined in your schema
            name: body.name,
            price: body.price 
        }, { status: 201 });
} 

