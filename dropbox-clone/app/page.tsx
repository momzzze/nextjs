import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
        <h1>Dropbox clone</h1>
        <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  )
}
