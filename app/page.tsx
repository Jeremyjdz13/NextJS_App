import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import LibbyNDaddy from '@/public/images/LibbyNDaddy.jpg'
import { Metadata } from 'next'
export default async function Home() {

  const session = await getServerSession(authOptions)
  /* 
    Example of accessing the session via server. 
  */
  return (
    <main className='relative'>
      <h1>Hello { session && <span>{session.user!.name}</span>}</h1>
      <Link href='/users'>Users</Link>
      <ProductCard />
      {/* <Image 
        src={LibbyNDaddy} 
        alt='Libby and Daddy' 
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="React Cover"
        width={300}
        height={170}
        fill
        className="object-cover"
      /> */}
      
    </main>
  )
}

export async function generateMetadat(): Promise<Metadata> {
  const product = await fetch('')

  return {
    title: 'product.title',
    description: '....'
  }
}
// for remote images you should always specify a size. 
/*
  Sizes for devices on Nextjs: 
          Mobile devices            Tablets                 Larger Screens
  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
*/