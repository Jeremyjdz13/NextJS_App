import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    //Link only downloads the content of the target page.
    //Pre-fetches links that are in the viewport.
    //Caches pages on the client
    
  return (
    <div className="flex bg-slate-200 p-5">
       <Link href="/" className="mr-5">Home</Link> 
       <Link href="/users" className="mr-5">Users</Link> 
    </div>
  )
}

export default NavBar