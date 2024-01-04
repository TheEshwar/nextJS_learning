"use client"
import { useRouter } from "next/navigation";
const LoginTeacher = () => {
    const router = useRouter()
    return (
        <>
            <h1>Login teacher page</h1>
            <button onClick={() => router.push('/')}>Go to Home Page</button>
        </>
    )
}

export default LoginTeacher;