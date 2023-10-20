import NextAuth from "next-auth"
import { authOptions } from "../authOptions"
// Route files can only export GET POST PUT SWAP

const handler = NextAuth(authOptions)
export {
    handler as GET,
    handler as POST
}