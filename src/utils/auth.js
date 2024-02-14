import GoogleProvider from "next-auth/providers/google"
// import GithubProvider from "next-auth/providers/github"
// import NaverProvider from "next-auth/providers/naver"
// import KakaoProvider from "next-auth/providers/kakao"
import prisma from "./connect"
import { PrismaAdapter } from "@auth/prisma-adapter"


export const authOptions = {
    adapter: PrismaAdapter(prisma),

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET,
        //     allowDangerousEmailAccountLinking: true,
        // }),
        // NaverProvider({
        //     clientId: process.env.NAVER_ID,
        //     clientSecret: process.env.NAVER_SECRET,
        //     allowDangerousEmailAccountLinking: true,
        // }),
        // KakaoProvider({
        //     clientId: process.env.KAKAO_ID,
        //     clientSecret: process.env.KAKAO_SECRET,
        //     allowDangerousEmailAccountLinking: true,
        // }),
    ],
}