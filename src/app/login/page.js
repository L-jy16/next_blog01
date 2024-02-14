import React from 'react'
import Menu from '@/components/menu/Menu'
import Login from '@/components/login/Login'
import SnsLogin from '@/components/snsLogin/SnsLogin'

export default function page() {
    return (
        <main id='main'>
            <div className="main__header">
                <h2>#login</h2>
                <Menu />
            </div>
            <div className='main__contents'>
                <section className='join__inner'>
                    <h3>로그인</h3>
                    <Login />
                    <SnsLogin />
                </section>
            </div>
        </main>
    )
}