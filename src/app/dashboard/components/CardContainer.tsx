import { Typography } from "@/sharedComponents/Typography/Typography";
import styles from "../styles/dashboard.module.scss"
import { Card } from "./Card";
import { formatCurrency } from "@/lib/utils/formatCurrency";

export default function CardContainer() {
    return (
        <section className={styles.cardContainer}>
            <Card>
                <Typography variant={2} className={styles.cardTitle}>
                    Total users
                </Typography>
                <p>100</p>
            </Card>

            <Card>
                <Typography variant={2} className={styles.cardTitle}>
                    Total products
                </Typography>
                <p>430</p>
            </Card>

            <Card>
                <Typography variant={2} className={styles.cardTitle}>
                    Product Sold
                </Typography>
                <p>150</p>
            </Card>

            <Card>
                <Typography variant={2} className={styles.cardTitle}>
                    Total orders
                </Typography>

                <p>
                    200
                </p>
            </Card>

            <Card>
                <Typography variant={2} className={styles.cardTitle}>
                    Total sales
                </Typography>

                <p>
                    {formatCurrency(6000)}
                </p>
            </Card>
        </section>
    )
}