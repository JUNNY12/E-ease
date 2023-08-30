import NavigationHeader from "@/app/information/component/NavigationHeader"
import ChangeDetails from "./ChangeDetails"
import ShippingMethod from "./ShippingMethod"
import styles from '../styles/checkout.module.scss'

export default function ShippingDetails() {
    return (
        <div>
            <div className={styles.navigationHeader}>
                <NavigationHeader />
            </div>

            <div>
                <ChangeDetails />
                <ShippingMethod />
            </div>
        </div>
    )
}