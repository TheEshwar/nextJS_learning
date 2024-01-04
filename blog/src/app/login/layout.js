"use client"
import Link from "next/link";
import './login.css'
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathName = usePathname()
    console.log(pathName);
    return (
        <>
            <h1>Common layout for login section</h1>
            <ul>
                <li>
                    <Link href="/login">Login Main</Link>
                </li>
                <li>
                    <Link href="/login/loginStudent">Login Student</Link>
                </li>
                <li>
                    <Link href="/login/loginTeacher">Login Teacher</Link>
                </li>
            </ul>
            {children}
        </>
    )
}