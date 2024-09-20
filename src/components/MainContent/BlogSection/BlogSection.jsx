import { BlogList } from './BlogList/BlogList';
import styles from './BlogSection.module.css';

export const BlogSection = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Blog</h2>
            <BlogList />
        </section>
    )
}