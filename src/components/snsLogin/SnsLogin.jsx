"use client"
import React, { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

export default function SnsLogin() {
    const { data, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status == "authenticated") {
            router.push("/");
        }
    }, [data, status])

    if (status === "loading") {
        return <div className='loading'>loading</div>
    }

    const handleLogin = (provider) => () => {
        signIn(provider);
    };

    return (
        <div className="join__add">
            <div className="icon google" onClick={handleLogin("google")}>구글</div>
            <div className="icon github" >깃헙</div>
            <div className="icon naver">네이버</div>
            <div className="icon kakao">카카오</div>
            <div className="etc">
                <a href="/">로그인</a>
                <a href="/">아이디 찾기</a>
                <a href="/">비밀번호 찾기</a>
            </div>
        </div>
    )
}
