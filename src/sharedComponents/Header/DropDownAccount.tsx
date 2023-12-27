import styles from "./header.module.scss";
import { Button } from "../Button/Button";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useRef } from "react";
import useHandleToggle from "@/hooks/toggle/useToggleHeader";
import { useSession, signOut } from "next-auth/react";
import { logoutUser } from "@/lib/api/auth/logout";

export default function DropDownAccount() {
    const { handleOutsideClick } = useHandleToggle()
    const ref = useRef<HTMLDivElement>(null)

    const { data:user, status} = useSession()

    const userInfo = user?.user?.userInfo

    const handleLogout = async () => {
        await logoutUser(user?.user.refreshToken)
        await signOut({redirect:false})
    }

    useEffect(() => {
        document.addEventListener('click', (e) => handleOutsideClick(e, ref))

        return () => {
            document.removeEventListener('click', (e) => handleOutsideClick(e, ref))
        }
    }, [handleOutsideClick])

    
    return (
        <div className={styles.dropDownAccount} ref={ref}>
            <div className={styles.buttonWrap}>
                {!userInfo?._id
                ? (
                    <Link href={`/auth/login`}>
                        <Button className={styles.signIn}>SIGN IN</Button>
                    </Link>
                )
            :(
                <Button onClick={handleLogout} className={styles.signOut}>SIGN OUT</Button>
            )}
            </div>

            <div className={styles.otherLinks}>

                <div className={styles.otherItem}>
                    <span> <FaUser /> </span>
                    <Link href={`#`}> My account </Link>
                </div>

            </div>
        </div>
    )
}