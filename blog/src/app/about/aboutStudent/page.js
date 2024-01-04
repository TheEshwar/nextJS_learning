"use client"
import { useRouter } from "next/navigation";
const AboutStudent = () => {
    const router = useRouter()
    return (
        <>
            <h1>About student page</h1>
            <button onClick={() => router.push('/')}>Go to Home Page</button>
        </>
    )
}

export default AboutStudent;