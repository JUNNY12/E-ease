import { Typography } from "@/sharedComponents/Typography/Typography"
import styles from '../styles/checkout.module.scss'
import { Input } from "@/sharedComponents/Input/Input"
import { formatCurrency } from "@/lib/utils/formatCurrency"
import { Button } from "@/sharedComponents/Button/Button"
import { AiOutlineArrowLeft } from "react-icons/ai"
import Link from "next/link"

export default function ShippingMethod() {
    return (
        <div className={styles.shippingMethod}>
            <Typography variant={1}>
                Shipping Method
            </Typography>

            <form action="">
                <div className={styles.economy}>
                    <div>
                        <Input type='radio' />
                        <label >
                            <span>Economy</span> <br />
                            <span>5 to 8 business days</span>
                        </label>
                    </div>
                    <p>
                        {formatCurrency(4.90)}
                    </p>
                </div>

                <div className={styles.standard}>
                    <div>
                        <Input type='radio' />
                        <label >
                            <span>Standard</span> <br />
                            <span>2 to 4 business days</span>
                        </label>
                    </div>
                    <p>
                        {formatCurrency(9.90)}
                    </p>
                </div>

                <div className={styles.bottomWrap}>
                    <Link href={`/information`}>
                        <Button className={styles.returnBtn}>
                            <span> <AiOutlineArrowLeft /> </span>
                            <span>Return to information</span>
                        </Button>
                    </Link>
                    <Button className={styles.paymentBtn}>Continue to payment</Button>
                </div>
            </form>
        </div>
    )
}