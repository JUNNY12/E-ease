'use client'

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();

    if (pathName === '/information' || pathName === '/checkout') {
        return (
            <main>
                {children}
                <Footer />
            </main>
        );
    }

    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
}
