import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// 게시글 가져오기(상세 페이지)
export const GET = async (req, { params }) => {
    const { id } = params;
    // console.log(params)

    try {
        const board = await prisma.board.update({
            where: { id },
            data: { boardView: { increment: 1 } },
            include: { User: true }
        })

        return new NextResponse(
            JSON.stringify(board, { status: 200 })
        )

        // console.log(board)
    } catch (err) {
        console.log(err)
        return new NextResponse(
            JSON.stringify({ message: "실패하였습니다." }, { status: 500 })
        )
    }
}