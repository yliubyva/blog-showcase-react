import { NewsList } from './NewsList/NewsList';
import styles from './NewsSection.module.css';

export const NewsSection = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>News</h2>
            <NewsList />
        </section>
    )
}