import styles from './HeroBanner.module.css';

export const HeroBanner = () => {
    return (
        <section className={styles.container}>
            <div className={styles.containerTitle}>
                <h1 className={styles.title}>Your Trusted Source for Web3 Trends and News</h1>
            </div>
            <div className={styles.banner}></div>
        </section>
    )
}