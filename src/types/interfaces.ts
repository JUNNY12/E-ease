export interface User {
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