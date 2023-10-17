import { NextRequest, NextResponse } from "next/server";

//Note: Without the request: NextRequest, Nextjs will cache the result of the response. 
export function GET(request: NextRequest) {
    // fetch users from db
    return NextResponse.json(
        [
            {id: 1, name: "Jeremy"},
            {id: 2, name: "Rachel"}
        ]
    )

}