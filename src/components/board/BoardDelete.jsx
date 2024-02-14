"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function BoardDelete({ id }) {
    const router = useRouter();

    const deletePost = async (postId) => {
        if (!confirm('정말로 삭제하시겠습니까?')) {
            return;
        }

        try {
            const res = await fetch(`/api/boardDelete/${postId}`, {
                method: "DELETE"
            });

            if (res.ok) {
                alert("게시글이 성공적으로 삭제되었습니다.");
                router.push("/board")
            } else {
                throw new Error("게시글 삭제에 실패하였습니다.")
            }

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <button onClick={() => deletePost(id)}>삭제하기</button>
    )
}
