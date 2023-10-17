'use client'
import { axiosPrivate } from "@/axios/axios";
import { useRefreshToken } from "./useRefreshToken";
import { useEffect } from "react";
import {useSession} from "next-auth/react"



export const useAxiosPrivate = () => {
    const {data:session} = useSession()
    const refreshToken = useRefreshToken();

    useEffect(() => {
        //request interceptor to add the auth token header to requests
        const requestInterceptor = axiosPrivate.interceptors.request.use(
            async (config) => {
                if (!config.headers["Authorization"]) {
                    config.headers["Authorization"] = `Bearer ${session?.user.accessToken}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        )
        //response interceptor to refresh token on receiving token expired error
        const responseInterceptor = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const previousRequest = error.config;
                console.log(error.response)
                if (error.response?.status === 403 && !previousRequest.sent) {
                    previousRequest.sent = true;
                    await refreshToken();
                    previousRequest.headers["Authorization"] = `Bearer ${session?.user.accessToken}`;
                    return axiosPrivate(previousRequest);
                }
                return Promise.reject(error);
            }

        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor);
            axiosPrivate.interceptors.response.eject(responseInterceptor);
        
        }

    }, [ session, refreshToken]);

    return axiosPrivate;
}
