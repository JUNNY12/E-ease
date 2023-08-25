import styles from './cart.module.scss'

export default function EmptyCart() {
  return (
    <div>
      <p className={styles.cartEmpty}>Your cart is empty</p>
    </div>
  )
}