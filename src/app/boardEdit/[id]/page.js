import BoardEdit from '@/components/board/BoardEdit';
import Menu from '@/components/menu/Menu';
import React from 'react'

export default function page({ params }) {
    const { id } = params;
    // console.log(id);

    return (
        <main id='main'>
            <div className="main__header">
                <h2>#boardEdit</h2>
                <Menu />
            </div>
            <div className='main__contents'>
                <section className='board__inner container'>
                    <BoardEdit id={id} />
                </section>
            </div>
        </main>
    )
}
