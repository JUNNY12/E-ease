import styles from './card.module.scss';

const CardLoader = () => {
    return (
        <div className={styles.gridCards}>
            {[...Array(10)].map((_, i) => {
                return (
                    <div key={i} className={styles.cardLoader}></div>
                )
            })}
        </div>
    );
}

export default CardLoader;
