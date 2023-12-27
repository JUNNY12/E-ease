import styles from "../styles/account.overview.module.scss"
import { Typography } from "@/sharedComponents/Typography/Typography"

export const AccountDetails= () => {
    return(
        <div className={styles.details}>
            <Typography variant={2}>
                ACCOUNT DETAILS
            </Typography>
            <p>
                Juwon Akingbade
            </p>
            <p>
                juwonemmanuel22@gmail.com
            </p>
        </div>
    )
} 