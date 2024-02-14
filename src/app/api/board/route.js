import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// 모든 게시글 가져오기
export const GET = async () => {
    try {
        const board = await prisma.board.findMany({
            include: {
                User: true  // 소문자 대문자 구별해야함
            }
        });

        // console.log(board);

        return new NextResponse(
            JSON.stringify(board, { status: 200 })
        )

    } catch (err) {
        console.log(err)
        return new NextResponse(
            JSON.stringify({ message: "모든 게시글 가져오기 오류 발생" }, { status: 500 })
        )

    }
}

// export const GET = async ({ query }) => {
//     const { searchKeyword, searchOption } = query;

//     try {
//         let board;

//         // 검색 매개변수가 제공되는지 확인
//         if (searchKeyword && searchOption) {
//             // 검색 수행
//             board = await prisma.board.findMany({
//                 where: {
//                     [searchOption]: {
//                         contains: searchKeyword,
//                     },
//                 },
//                 include: {
//                     User: true,
//                 },
//             });
//         } else {
//             // 검색 매개변수가 없으면 모든 게시물 검색
//             board = await prisma.board.findMany({
//                 include: {
//                     User: true,
//                 },
//             });
//         }

//         return new NextResponse(
//             JSON.stringify(board, { status: 200 })
//         );
//     } catch (err) {
//         console.log(err);
//         return new NextResponse(
//             JSON.stringify({ message: "게시글 검색 오류 발생" }, { status: 500 })
//         );
//     }
// };