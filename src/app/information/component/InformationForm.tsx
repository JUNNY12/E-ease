import { Input } from "@/sharedComponents/Input/Input";
import { Typography } from "@/sharedComponents/Typography/Typography";
import styles from '../styles/information.module.scss'
import NavigationHeader from "./NavigationHeader";
import { Button } from "@/sharedComponents/Button/Button";

export default function InformationForm() {

    return (
        <div className={styles.informationFormContainer}>
            <div>
                <NavigationHeader />
            </div>
            <Typography className={styles.contactHeader} variant={1}>Contact</Typography>

            <form action="">
                <div>
                    <Input className={styles.input} id="email" type="text" placeholder="Email" />
                </div>

                <div>
                    <Input className={styles.input} id='number' type="text" placeholder="Phone number" />
                </div>

                <div>
                    <Typography className={styles.shippingHeader} variant={2}>
                        Shipping Address
                    </Typography>

                    <div>
                        <select name="" id="" className={styles.select}>
                            <option value="">Nigeria</option>
                        </select>
                    </div>

                    <div className={styles.grid1}>
                        <div>
                            <Input className={styles.input} type="text" placeholder="First name" />
                        </div>

                        <div>
                            <Input className={styles.input} type="text" placeholder="Last name" />
                        </div>
                    </div>

                    <div>
                        <Input className={styles.input} type="text" placeholder="Address" />
                    </div>

                    <div>
                        <Input className={styles.input} type="text" placeholder="Apartment, suite, etc. (optional)" />
                    </div>

                    <div className={styles.grid2}>
                        <div>
                            <Input className={styles.input} type="text" placeholder="City" />
                        </div>

                        <div>
                            <Input className={styles.input} type="text" placeholder="State" />
                        </div>

                        <div>
                            <Input className={styles.input} type="text" placeholder="Zip code" />
                        </div>
                    </div>
                </div>

                <div className={styles.checkbox}>
                    <Input type='checkbox' />
                    <label htmlFor="">Save this information for next time</label>
                </div>

                <div>
                    <Button className={styles.shippingBtn}>Continue to Shipping</Button>
                </div>
            </form>
        </div>
    )
}