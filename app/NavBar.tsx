'use client'
// Example of accessing session on the client.
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    //Link only downloads the content of the target page.
    //Pre-fetches links that are in the viewport.
    //Caches pages on the client
  const {status, data: session } = useSession()


  return (
    <div className="flex bg-slate-200 p-3 space-x-3">
       <Link href="/" className="mr-5">Home</Link> 
       <Link href="/users" className="mr-5">Users</Link>
       { status === 'loading' && <div>Loading...</div>}
       { status === 'authenticated' && 
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-3">Sing Out</Link>
        </div>}
       { status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
    </div>
  )
}

export default NavBar