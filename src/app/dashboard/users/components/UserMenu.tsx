import { Button } from "@/sharedComponents/Button/Button";
import styles from "../../styles/user.module.scss";

type UserMenuProps = {
    handleCloseMenu: () => void;
    showOverlay: boolean,
}
export const UserMenu = ({ handleCloseMenu, showOverlay, }: UserMenuProps) => {
    return (
        <div className={showOverlay ? styles.overlay : ""}>
            <div className={styles.userMenu}>
                <Button className={styles.closeBtn} title="close" onClick={handleCloseMenu}>
                    X
                </Button>
                <ul>
                    <li>
                        Delete account
                    </li>
                    <li>
                        Disable account
                    </li>
                    <li>
                        Reset Password
                    </li>
                </ul>

            </div>
        </div>
    )
}