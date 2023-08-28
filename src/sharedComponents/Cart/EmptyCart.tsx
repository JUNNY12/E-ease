import styles from './cart.module.scss'
import { GrCart } from 'react-icons/gr'

export default function EmptyCart() {
  return (
    <div>
      <p className={styles.cartEmpty}>
        <span className={styles.bigCartIcon}>
          <GrCart />
        </span> <br />
        <span>
          Your cart is empty
        </span>
      </p>
    </div>
  )
}