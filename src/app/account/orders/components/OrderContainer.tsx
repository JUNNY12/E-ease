import styles from "../../styles/orders.module.scss"
import { Typography } from "@/sharedComponents/Typography/Typography"
import { OrderItem } from "./OrderItem"

const orders: Order[] = [
    {
        orderId: '1234',
        date: new Date(),
        status:'Shipped',
        image: '/images/image 1.jpg',
        title: 'Product Title',
    },
    {
        orderId: '1234',
        date: new Date(),
        status: 'Pending',
        image: '/images/image 1.jpg',
        title: 'Product Title',
    },
    {
        orderId: '1234',
        date: new Date(),
        status: 'Delivered',
        image: '/images/image 1.jpg',
        title: 'Product Title',
    },
    {
        orderId: '1234',
        date: new Date(),
        status: 'Failed',
        image: '/images/image 1.jpg',
        title: 'Product Title',
    },
    {
        orderId: '1234',
        date: new Date(),
        status: 'Processing',
        image: '/images/image 1.jpg',
        title: 'Product Title',
    }
]

export const OrderContainer = () => {
    return (
        <section className={styles.container}>
            <Typography variant={1}>Orders</Typography>
            <ul className={styles.list}>
                {
                    orders.map((order, index) => {
                        return (
                            <li key={index}>
                                <OrderItem order={order} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}