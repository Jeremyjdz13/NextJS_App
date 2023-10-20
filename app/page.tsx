import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {

  const session = await getServerSession(authOptions)
  /* 
    Example of accessing the session via server. 
  */
  return (
    <main>
      <h1>Hello { session && <span>{session.user!.name}</span>}</h1>
      <Link href='/users'>Users</Link>
      <ProductCard />
    </main>
  )
}

