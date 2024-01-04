"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  const navigateTo = (route_name)=>{
    router.push(route_name)
  }

  return (
    <main>
      <h1>App -{'>'} page.js</h1>

      <Link href="/login">Go to Login page</Link><br></br>
      <Link href="/about">Go to About page</Link>
      <br/>
      <button onClick={()=>navigateTo('/login')}>Go to Login page</button>
      <button onClick={()=>navigateTo('/about')}>Go to About page</button>
    </main>
  )
}
