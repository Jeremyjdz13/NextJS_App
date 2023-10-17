import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props {
    searchParams: { sortOrder: string}
}

const UsersPage = async ({ searchParams: { sortOrder } } : Props) => {
// You can only access query string parameters in pages not components

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn-secondary" >New User</Link>
      {/* <Suspense fallback={<p>Loadding...</p>}> */}
        <UserTable sortOrder={sortOrder} />
      {/* </Suspense>       */}
    </>
  )
}

export default UsersPage 