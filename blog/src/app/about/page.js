"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

function About() {
    const router = useRouter()
    return (
        <>
            <h1>About page</h1>
            <button onClick={() => router.push('/')}>Go to Home Page</button>
            <br />
            <Link href="/about/aboutStudent">About Student</Link>
        </>
    )
}

export default About;