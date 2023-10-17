import axios from "@/axios/axios"
import { useSession } from "next-auth/react"
import { base_URL } from "@/lib/constants/baseUrl"

export const useRefreshToken = () => {
    const { data: session } = useSession()
    const user = session?.user
    const token = user?.refreshToken as any

    const refreshToken = async () => {
        const url = base_URL + "/refresh"

        try {
            const res = await axios.post(url, {
                refreshToken: token
            })
            if (session) {
                session.user.accessToken = res.data.accessToken
            }
            return { data: res.data, error: null };
        } catch (error:any) {
            if (error.response && error.response.status === 403) {
                console.log("Refresh token request returned 403 Forbidden")
            } else {
                console.error("Error refreshing token:", error)
            }

            return { data: null, error: error };
        }
    }

    return refreshToken;
}
