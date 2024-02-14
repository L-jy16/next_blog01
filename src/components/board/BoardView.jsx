"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import BoardDelete from './BoardDelete';

export default function BoardView({ id }) {
    const [data, setData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                // 서버 데이터 요청
                const res = await fetch(`/api/boardView/${id}`)

                // 데이터 요청 오류
                if (!res.ok) {
                    throw new Error("데이터를 가져오지 못했습니다.")
                }

                // 요청한 데이터 저장
                let result = await res.json();
                // console.log(result);
                setData(result);

            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])



    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className='board__view'>
                <table>
                    <colgroup>
                        <col style={{ width: "20%" }} />
                        <col style={{ width: "80%" }} />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td>{data.boardTitle}</td>
                        </tr>
                        <tr>
                            <th>등록자</th>
                            <td>{data.User.name}</td>
                        </tr>
                        <tr>
                            <th>등록일</th>
                            <td>{data.createAt}</td>
                        </tr>
                        <tr>
                            <th>조회수</th>
                            <td>{data.boardView}</td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>{data.boardConts}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='board__btns'>
                <Link href={`/boardEdit/${id}`}>수정하기</Link>
                <BoardDelete id={id} />
                <Link href="/board">목록보기</Link>
            </div>
        </>
    )
}
