import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

//Note: Without the request: NextRequest, Nextjs will cache the result of the response. 
export function GET(
    request: NextRequest
    ) {
    // fetch users from db
    return NextResponse.json(
        [
            {id: 1, name: "Jeremy"},
            {id: 2, name: "Rachel"}
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

    return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
} 

