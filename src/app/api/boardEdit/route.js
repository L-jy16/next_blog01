import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/session";
import { NextResponse } from "next/server";

// 게시글 수정하기
export const PUT = async (req) => {
    const session = await getAuthSession()

    // 로그인 확인
    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "로그인이 필요합니다." }, { status: 401 })
        )
    }

    try {
        const body = await req.json();
        const board = await prisma.board.update({
            where: {
                id: body.id
            },
            data: {
                boardTitle: body.title,
                boardConts: body.contents,
            }
        })
        // 성공 --> 반환
        return new NextResponse(
            JSON.stringify({ board }, { status: 200 })
        )
    } catch (err) {
        console.log(err)

        return new NextResponse(
            JSON.stringify({ message: "수정 오류" }, { status: 500 })
        )
    }
}