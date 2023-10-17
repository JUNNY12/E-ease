import styles from './styles/featured.module.scss'
import Image from 'next/image'
import { Typography } from '@/sharedComponents/Typography/Typography'

export default function Featured() {
  return (
    <section className={styles.featureContainer}>
      <Typography variant={1} className={styles.productHeader}>Featured</Typography>
      <div className={styles.gridContainer}>

        <div className={styles.column1}>
          <Image
            src={'/images/image 1.jpg'}
            priority={true}
            fill={true}
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={'featured image'}
            className={styles.imageStyle}
          />

          <div className={styles.buttonWrap} role='button'>
            <span> The Secret Library</span>
            <span role='button' className={styles.priceButton}>$20.00</span>
          </div>
        </div>

        <div className={styles.column2}>
          <Image
            src={'/images/image2.jpg'}
            priority={true}
            fill={true}
            alt={'featured image'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.imageStyle}
          />
          <div className={styles.buttonWrap} role='button'>
            <span> The Secret Library</span>
            <span role='button' className={styles.priceButton}>$20.00</span>
          </div>
        </div>

        <div className={styles.column3}>
          <Image
            src={'/images/image3.jpg'}
            priority={true}
            fill={true}
            alt={'featured image'}
            className={styles.imageStyle}
          />
          <div className={styles.buttonWrap} role='button'>
            <span> The Secret Library</span>
            <span role='button' className={styles.priceButton}>$20.00</span>
          </div>
        </div>

      </div>
    </section>
  )
}