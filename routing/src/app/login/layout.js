"use client"
import Link from 'next/link'
import React from 'react'
import './login.css'
import { usePathname } from 'next/navigation'

export default function Layout({ children }) {

    const pathname = usePathname()

    return (
        <>
            <h3 style={{ backgroundColor: "green", padding: "10px 10px 10px 10px", color: "white" }}>
                Login Layout.js
            </h3>

            <div style={
                {
                    minHeight: "400px", width: "100%", backgroundColor: "#defffd", border: "1px solid black"
                }
            }>
                
                {
                    pathname !== '' && pathname !== "/login/loginTeacher"
                    ?
                        <ul className='login_menu'>
                        <li>
                            <h4>Navigate Login </h4>
                        </li>

                        <li>
                            <Link href='/login'> Login Home</Link>
                        </li>
                        <li>
                            <Link href='/login/loginStudent'> Login Student </Link>
                        </li>
                        <li>
                            <Link href='/login/loginTeacher'> Login Teacher</Link>
                        </li>
                    </ul>
                    :
                    <Link href="/login">Go to Login Page</Link>
                }

                {children}
            </div>
        </>
    )
}
