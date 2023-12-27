import styles from '../styles/authPage.module.scss'
import Logo from '@/sharedComponents/Logo/Logo'

export default function AuthHeader() {
    return (
        <div className={styles.authHeader}><Logo/></div>
    )
}