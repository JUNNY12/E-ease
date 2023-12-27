import React from "react";
import styles from "./styles/account.module.scss"
import { SideNavigation } from "./components/SideNavigation";

export default function AccountLayout(
    {children}:
    {children:React.ReactNode}
    ){
    return (
        <section className={styles.layout}>
            <SideNavigation />
            {children}
        </section>
    )
}