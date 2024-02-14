"use client"
import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export default function Menu() {
    // const status = "unauthenticated"
    // const name = "webs"

    const { data: session, status } = useSession();

    const handleLogout = () => {
        signOut();
    };

    // console.log(session, status)

    return (
        <ul>
            {status === "authenticated" ? (
                <>
                    <li><span className='line'>{session.user.name}님 방가워요!!!</span></li>
                    <li><span onClick={handleLogout}>로그아웃</span></li>
                </>
            ) : (
                <>
                    <li><Link href='/login'>로그인</Link></li>
                    <li><Link href='/join'>회원가입</Link></li>
                </>
            )}
            <li><Link href='/blog'>블로그</Link></li>
            <li><Link href='/board'>게시판</Link></li>
        </ul>
    )
} 