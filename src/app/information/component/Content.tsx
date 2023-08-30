import InformationForm from "./InformationForm"
import styles from '../styles/information.module.scss'
import Logo from "@/sharedComponents/Logo/Logo"
import Summary from "./Summary"

export default function Content() {
    return (
        <div>
            <div className={styles.topLogo}>
                <Logo />
            </div>
            <div className={styles.contentWrapper}>
                <InformationForm />
                <Summary />
            </div>
        </div>
    )
}