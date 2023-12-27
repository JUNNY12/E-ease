import styles from "../../styles/orders.module.scss"
import Image from "next/image"
import { Button } from "@/sharedComponents/Button/Button"
import { formatDate } from "@/lib/utils/formatDate";

type OrderItemProps = {
    order: Order;
}

export const OrderItem = ({ order }: OrderItemProps) => {
    return (
        <article className={styles.orderItem}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={order.image} alt={order.title}
                fill={true}
                />
            </div>
            <div>
                <p>{order.title}</p>
                <p>Order {order.orderId}</p>
                <p className={
                    order.status === 'Delivered' ? styles.delivered
                        : order.status === 'Pending' ? styles.pending
                            : order.status === 'Processing' ? styles.processing
                                : order.status === 'Shipped' ? styles.shipped
                                    : styles.failed
                }>{order.status}</p>
                <p>{formatDate(order.date.toISOString())}</p>
            </div>
            <div className={styles.viewWrap}>
                <Button className={styles.view}>View Details</Button>
            </div>

        </article>
    )
}