import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/session";
import { NextResponse } from "next/server";

// 게시글 작성하기
export const POST = async (req) => {
    const session = await getAuthSession()

    // 로그인 확인
    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "로그인이 필요합니다." }, { status: 401 })
        )
    }

    // try를 사용한 이유 => 에러 확인 가능
    try {
        // 본문(req) 데이터 저장
        const body = await req.json();
        let counterNum = 0;

        // boardCount 값 가져오기
        const counter = await prisma.counter.findFirst({
            where: { name: "counter" }
        });

        // boardCount + 1
        if (counter) {
            counterNum = counter.boardCount + 1;

            // board 데이터 추가하기
            const board = await prisma.board.create({
                data: {
                    boardNum: counterNum,
                    boardTitle: body.title,
                    boardConts: body.contents,
                    userEmail: session.user.email,
                }
            });

            // counterNum를 boardCount에 저장
            await prisma.counter.update({
                where: { id: counter.id },
                data: { boardCount: counterNum }
            })

            // 성공 --> 반환
            return new NextResponse(
                JSON.stringify({ board }, { status: 200 })
            )
        } else {
            // counter 레코드가 없으면
            throw new Error("counter 레코드가 없습니다.")
        }

    } catch (err) {
        console.log(err)
        return new NextResponse(
            JSON.stringify({ message: "게시글 작성 중 오류가 발생하였습니다." }, { status: 500 })
        )
    }
}