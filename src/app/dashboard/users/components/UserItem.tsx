"use client"
import styles from "../../styles/user.module.scss"
import { FaCopy, FaEye } from "react-icons/fa"
import { BsThreeDotsVertical } from "react-icons/bs"
import { Button } from "@/sharedComponents/Button/Button"
import { formatDate } from "@/lib/utils/formatDate"
import { UserMenu } from "./UserMenu"
import { useUserMenu } from "@/hooks/admin/useUserMenu"
import { useShowDetail } from "@/hooks/admin/useShowDetail"
import { UserDetails } from "./UserDetails"



type UserProps = {
    user: any,
    index: number
}

export default function UserItem({ user, index }: UserProps) {

    const { showMenu, showOverlay, handleCloseMenu, handleShowMenu } = useUserMenu()
    const { showDetail, handleCloseDetail, handleShowDetail, isOverlay } = useShowDetail()

    return (
        <div className={styles.userContainer}>
            <div className={styles.flexUser}>
                <div className={styles.col_1}>{index + 1}.</div>
                <div className={styles.col_2}>
                    {user?.email}
                </div>
                <div className={styles.col_3}>{formatDate(user?.createdAt)}</div>
                <div className={styles.col_4}>{formatDate(user?.signedIn)}</div>
                <div className={styles.col_5}>{user?.role}</div>
                <div className={`${styles.col_6}`} role="button" title="assign role">
                    <div className={styles.roleWrap}>
                        <div className={styles.roleBtn}>
                            <div className={styles.ball}></div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.col_7} ${styles.actions}`}>
                    <Button title='copy userId'>
                        <FaCopy />
                    </Button>

                    <Button className="" title="more details" onClick={handleShowDetail}>
                        <FaEye />
                    </Button>

                    <Button title="menu" onClick={handleShowMenu}>
                        <BsThreeDotsVertical />
                    </Button>
                </div>
            </div>
            <div>
                {
                    showMenu && <UserMenu
                        handleCloseMenu={handleCloseMenu}
                        showOverlay={showOverlay}
                    />
                }
            </div>

            <div>
                {
                    showDetail && <UserDetails
                        isOverlay={isOverlay}
                        handleCloseDetail={handleCloseDetail}
                    />
                }
            </div>
        </div>
    )
}