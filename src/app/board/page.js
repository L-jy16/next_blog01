import BoardList from '@/components/board/BoardList'
import BoardPage from '@/components/board/BoardPage'
import BoardSearch from '@/components/board/BoardSearch'
import Menu from '@/components/menu/Menu'
import React from 'react'

export default function page() {
    return (
        <main id='main'>
            <div className="main__header">
                <h2>#board</h2>
                <Menu />
            </div>
            <div className='main__contents'>
                <section className='board__inner container'>
                    <BoardSearch />
                    <BoardList />
                    <BoardPage />
                </section>
            </div>
        </main>
    )
}
