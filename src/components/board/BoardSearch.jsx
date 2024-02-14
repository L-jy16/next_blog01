"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function BoardSearch() {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchOption, setSearchOption] = useState("title");

    const SearchHandle = async (e) => {
        e.preventDefault();

        // try {
        //     const res = await fetch(`/api/board?searchKeyword=${searchKeyword}&searchOption=${searchOption}`)
        //     // const res = await fetch('/api/board', {
                
        //     //     method: "POST",
        //     //     headers: { 'Content-Type': 'application/json' },
        //     //     body: JSON.stringify({ searchKeyword, searchOption })
        //     // })

        //     if (res.ok) {
        //         const data = await res.json();
        //         console.log(data); // 추가
        //     } else {
        //         console.error(`Error: ${res.status}`);
        //     }
        // } catch (err) {
        //     console.log(err)
        // }
    }

    return (
        <div className="board__search">
            <form onSubmit={SearchHandle}>
            {/* <form> */}
                <fieldset>
                    <legend className="blind">게시판 검색 영역</legend>
                    <div>
                        <label className='blind' htmlFor="searchKeyword">검색</label>
                        <input
                            type="search"
                            name="searchKeyword"
                            id="searchKeyword"
                            placeholder="검색어를 입력하세요!"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                        />
                    </div>
                    <div>
                        <select
                            name="searchOption"
                            id="searchOption"
                            value={searchOption}
                            onChange={(e) => setSearchOption(e.target.value)}
                        >
                            <option value="title">제목</option>
                            <option value="content">내용</option>
                            <option value="name">등록자</option>
                        </select>
                    </div>
                    <div>
                        {/* <button type="submit" onClick={() => SearchHandle()}>검색</button> */}
                        <button type="submit">검색</button>
                        <Link href="/boardWrite">글쓰기</Link>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
