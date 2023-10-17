import { Button } from "@/sharedComponents/Button/Button"
import styles from "../styles/navbar.module.scss"
import { useSession } from "next-auth/react"
import { sayGreeting } from "@/lib/utils/sayGreeting"
import { useToggleDashboard } from "@/hooks/toggle/useToggleDashboard"
import { useEffect, useRef } from "react"
import {signOut} from "next-auth/react"
import { logoutUser } from "@/lib/api/auth/logout"


export const DropDown = () => {
    const { data: session } = useSession()
    const dropDownRef = useRef<HTMLDivElement>(null)
    const {handleOutsideClick} = useToggleDashboard()

    useEffect(() => {
        document.addEventListener('click', (e) => handleOutsideClick(e, dropDownRef))
        return () => {
            document.removeEventListener('click', (e) => handleOutsideClick(e, dropDownRef))
        }
    }, [])

    const userId = session?.user?.userInfo?._id
    const username = session?.user?.userInfo?.username

    const handleSignOut = async () => {
        await logoutUser(session?.user?.refreshToken)
        await signOut({redirect: true, callbackUrl: '/admin'})

    }

    return (
        <div className={styles.dropDown} ref={dropDownRef}>
            <p>
                {sayGreeting()} {username}!!!
            </p>
            <Button onClick={handleSignOut} className={styles.button}> SIGN OUT </Button>
        </div>
    )
}