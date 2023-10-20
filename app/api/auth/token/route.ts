import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const token = await getToken({ req: request })

    return NextResponse.json(token)
}

//In the live app you wouldn't show this token.  This is just for learning purposes. 

