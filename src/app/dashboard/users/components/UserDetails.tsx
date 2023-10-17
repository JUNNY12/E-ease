import { FaUserCircle } from "react-icons/fa"
import styles from "../../styles/user.module.scss"
import { Typography } from "@/sharedComponents/Typography/Typography"
import { Button } from "@/sharedComponents/Button/Button"


type Props = {
    isOverlay: boolean
    handleCloseDetail: () => void
}

export const UserDetails = ({ isOverlay, handleCloseDetail }: Props) => {
    return (
        <div className={isOverlay ? styles.overlay : ""}>
            <div className={styles.detailWrap}>
                <Button title="close modal" className={styles.closeBtn} onClick={handleCloseDetail}>X</Button>
                <div className={styles.userIcon}>
                    <FaUserCircle />
                </div>

                <div>
                    <Typography variant={1} className={styles.name}>
                        John Doe
                    </Typography>

                    <ul>
                        <li className={styles.content}>
                            <span> Username </span>
                            <span> johnny </span>
                        </li>

                        <li>
                            <span> Email </span>
                            <span> john@gmail.com </span>
                        </li>

                        <li>
                            <span> Street</span>
                            <span> 123 Main Street </span>
                        </li>

                        <li>
                            <span> City </span>
                            <span> New York </span>
                        </li>

                        <li>
                            <span> State </span>
                            <span> New York </span>
                        </li>

                        <li>
                            <span> Zip </span>
                            <span> 12345 </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}