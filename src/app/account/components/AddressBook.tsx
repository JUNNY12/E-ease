import { Typography } from "@/sharedComponents/Typography/Typography"
import styles from "../styles/account.overview.module.scss"
import {FaEdit} from "react-icons/fa"

export const AddressBook = () => {
    return (
        <div className={styles.address}>
            <Typography variant={2}>
                <span>
                    ADDRESS BOOK
                </span>
                <span title="Edit Address" role="button">
                    <FaEdit />
                </span>
            </Typography>

            <p>your default shipping address:</p>

            <p>Juwon Emmanuel</p>
            <p>
                1234 Fake Street
            </p>
            <p>
                Lagos, Nigeria
            </p>
            <p>
                +234 123 456 7890
            </p>
        </div>
    )
}
