"use client"
import { useRouter } from "next/navigation";
const LoginStudent = () => {
    const router = useRouter()
    return (
        <>
            <h1>Login student page</h1>
            <button onClick={() => router.push('/')}>Go to Home Page</button>
        </>
    )
}

export default LoginStudent;