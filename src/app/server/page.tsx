"use client"
import { getServerSession } from "next-auth"
import { AuthOptions } from "@/lib/api/auth/auth"
import { GetApiAuth } from "@/lib/fetchApi"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"


export default async function page() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['posts'],
        queryFn: () => fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
    })
    const session = await getServerSession(AuthOptions)
    const url = `/users/${session?.user.userInfo?._id}`
    const user = await GetApiAuth(url)


    return (
        <div>{JSON.stringify({data})}</div>
    )
}