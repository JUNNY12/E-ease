import { Typography } from "@/sharedComponents/Typography/Typography"
import styles from "../styles/account.overview.module.scss"
import { AccountDetails } from "./AccountDetails"
import { AddressBook } from "./AddressBook"

export const AccountOverview = () => {
    return (
        <section className={styles.overview}>
            <Typography variant={1}>
                Account Overview
            </Typography>
            <div className={styles.grid}>
                <AccountDetails />
                <AddressBook />
            </div>
        </section>
    )
}
