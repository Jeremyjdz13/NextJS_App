export { default } from 'next-auth/middleware'

// short hand syntax above. 
// import middleware from 'next-auth/middleware'

// export default middleware

export const config = {
    // *: zero or more parameter
    // +: one or more parameter
    //?: zero or one

    matcher: ['/dashboard/:path*']

    // In most cases you have a /dashboard/path:*
    // This implementation protects our routs for non authenticated users. 
}