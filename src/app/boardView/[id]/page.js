import BoardView from '@/components/board/BoardView';
import Menu from '@/components/menu/Menu';
import React from 'react'

export default function page({ params }) {
    const { id } = params;
    // console.log(id)

    return (
        <main id='main'>
            <div className="main__header">
                <h2>#boardWrite</h2>
                <Menu />
            </div>
            <div className='main__contents'>
                <section className='board__inner container'>
                    <BoardView id={id} />
                </section>
            </div>
        </main>
    )
}
