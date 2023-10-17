import { User } from "./interfaces"
import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {

    interface Session {
        user: User
    }
}


declare module "next-auth/jwt" {
    interface JWT {
    accessToken?: string;
    refreshToken?: string;
    userInfo?:{
        _id: string;
        email?: string;
        username?: string;
        roles?: {
            User:number;
            Admin:number;
            SuperAdmin:number;
        };
    }
    }
}