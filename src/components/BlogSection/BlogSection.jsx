import styles from './BlogSection.module.css';

export const BlogSection = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Blog</h1>
            <ul className={styles.list}>
                <li className={styles.item}></li>
                <li className={styles.item}></li>
                <li className={styles.item}></li>
                <li className={styles.item}></li>
            </ul>
        </section>
    )
}