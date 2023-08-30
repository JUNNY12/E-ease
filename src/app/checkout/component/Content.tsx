import Logo from "@/sharedComponents/Logo/Logo"
import styles from '../styles/checkout.module.scss'
import Summary from "@/app/information/component/Summary"
import ShippingDetails from "./ShippingDetails"

export default function Content() {
    return (
        <div>
            <div className={styles.topLogo}>
                <Logo />
            </div>

            <div className={styles.contentWrapper}>
                <ShippingDetails />
                <Summary />
            </div>

        </div>
    )
}