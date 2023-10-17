import { AuthOptions } from "./api/auth/auth";
import { getServerSession } from "next-auth"


const baseUrl = process.env.NEXT_PUBLIC_EXTERNAL_API_URL;

const refreshToken = async (refreshToken: string) => {
    const res = await fetch(`${baseUrl}/refresh`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            refreshToken: refreshToken
        })
    })

    const data = await res.json();

    return data.accessToken
}

export const GetApiAuth = async (url: string, method: string = 'GET', body?: any) => {
    if (typeof url !== 'string') {
        throw new Error('Invalid url parameter. Expected a string.');
    }

    if (typeof method !== 'string') {
        throw new Error('Invalid method parameter. Expected a string.');
    }

    if (body && typeof body !== 'object') {
        throw new Error('Invalid body parameter. Expected an object.');
    }

    const session = await getServerSession(AuthOptions);

    let options: any = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`
        }
    }

    if (body) {
        options.body = JSON.stringify(body)
    }

    try {
        let res = await fetch(`${baseUrl}${url}`, options)

        if (res.status === 401 || res.status === 403) {
            if (session) session.user.accessToken = await refreshToken(session.user.refreshToken ?? "");
            options.headers.Authorization = `Bearer ${session?.user?.accessToken}`
            res = await fetch(`${baseUrl}${url}`, options)

            if (res.ok) {
                const data = await res.json();
                return data;
            }
        }

        if (res.ok) {
            const data = await res.json();
            return data;
        }

    } catch (error) {
        console.error(error);
        // Handle the error appropriately
    }
}