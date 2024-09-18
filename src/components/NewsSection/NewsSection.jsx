import styles from './NewsSection.module.css';

export const NewsSection = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>News</h2>
            <ul className={styles.list}>
                <li className={styles.item}></li>
                <li className={styles.item}></li>
                <li className={styles.item}></li>
            </ul>
        </section>
    )
}