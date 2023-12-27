'use client'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();

    const informationPath = '/information';
    const checkoutPath = '/checkout';
    const loginPath = '/auth/login';
    const registerPath = '/auth/register';

    const adminRoute = [
        "/admin",
        "/dashboard"
    ]

    if (adminRoute.includes(pathName) || pathName.startsWith('/dashboard')) {
        return (
            <main>
                {children}
            </main>
        )
    }

    if (pathName === informationPath || pathName === checkoutPath) {
        return (
        <>
                <main>
                    {children}
                </main>
                <Footer />
        </>
        );
    }



    if (pathName === loginPath || pathName === registerPath) {
        return (
            <main>
                {children}
            </main>
        );
    }

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}