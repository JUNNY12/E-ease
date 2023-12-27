import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

const adminRoute = [
    "/admin",
    "/dashboard",
    '/products',
    '/orders',
    '/users',
    '/settings',
]


export default withAuth(
    function middleware(req) {
        const isAdmin = req.nextauth?.token?.userInfo?.roles?.hasOwnProperty("Admin") || req.nextauth?.token?.userInfo?.roles?.hasOwnProperty("SuperAdmin");

        if (adminRoute.includes(req.nextUrl.pathname) && !isAdmin) {
            return NextResponse.rewrite(
                new URL('/auth/login?message=You are not authorized to access this page', req.url)
            );
        }

        // if (req.nextUrl.pathname.startsWith("/account") && isAdmin)
        //     return NextResponse.rewrite(
        //         new URL('/admin?message=You are not authorized to access this page', req.url)
        //     )

        if (req.nextUrl.pathname.startsWith("/dashboard") && !isAdmin)
            return NextResponse.rewrite(
                new URL('/auth/login?message=You are not authorized to access this page', req.url)
            )
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        }
    }
)


export const config = {
    matcher: [
        "/information",
        "/checkout",
        "/account/:path*",
        "/dashboard/:path*",]
}
