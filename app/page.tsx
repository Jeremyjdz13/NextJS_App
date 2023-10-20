'use client'
// client components cannot be async

import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import LibbyNDaddy from '@/public/images/LibbyNDaddy.jpg'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { useState } from 'react'
// import _ from 'lodash'

const HeavyComponent = dynamic(()=> import('./components/HeavyComponent'),
  { 
    ssr: false, //disables client components from pre-rendering on the server.  fix clients access to data that isn't available. 
    loading: () => <p>...Loading</p>
  }
)
//removed async from previous lesson
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  // const session = await getServerSession(authOptions)
  /* 
    Example of accessing the session via server. 
  */
 
  return (
    <main className='relative'>
      {/* <h1>Hello { session && <span>{session.user!.name}</span>}</h1> */}
      {/* <Link href='/users'>Users</Link> */}
      <h1>Hello World</h1>
      <button onClick={() => setIsVisible(true)}>Show Heavy Component</button><br />
      <button onClick={async () => {
        const _ = (await import('lodash')).default //This implementation of lodash is lazy loading. 
        const users = [
          { name: 'c'},
          { name: 'b'},
          { name: 'a'},
        ]
        const sorted = _.orderBy(users, ['name'])
        console.log(sorted)
      }}>Show Users</button>
      
      {isVisible &&  <HeavyComponent />}
      {/* <ProductCard /> */}
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

// export async function generateMetadat(): Promise<Metadata> {
//   const product = await fetch('')

//   return {
//     title: 'product.title',
//     description: '....'
//   }
// }
// for remote images you should always specify a size. 
/*
  Sizes for devices on Nextjs: 
          Mobile devices            Tablets                 Larger Screens
  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
*/