import styles from './MainContent.module.css';
import { HeroBanner } from '../HeroBanner';
import { BlogSection } from '../BlogSection';
import { NewsSection } from '../NewsSection';

export const MainContent = () => {
    return (
        <main className={styles.container}>
            <HeroBanner />
            <BlogSection />
            <NewsSection />
        </main>
    )
}