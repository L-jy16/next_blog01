import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// 검색 게시글 가져오기
export const POST = async (req) => {
    try {
        const body = await req.text(); // 혹은 req.json()을 사용할 수도 있음
        const data = JSON.parse(body);

        const { searchKeyword, searchOption } = data;
        
        switch (searchOption) {
            case 'title':
                whereCondition = {
                    boardTitle: {
                        contains: searchKeyword,
                    },
                };
                break;
            case 'content':
                whereCondition = {
                    boardContent: {
                        contains: searchKeyword,
                    },
                };
                break;
            case 'name':
                whereCondition = {
                    User: {
                        contains: searchKeyword,
                    },
                };
                break;
            default:
                break;
        }


        return new NextResponse(
            JSON.stringify(searchResults, { status: 200 })
        );
    } catch (err) {
        console.error(err);
        return new NextResponse(
            JSON.stringify({ message: "검색 오류 발생" }, { status: 500 })
        );
    }
}