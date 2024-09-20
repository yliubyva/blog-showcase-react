import styles from './MainContent.module.css';
import { HeroBanner } from './HeroBanner'; 
import { BlogSection } from './BlogSection';
import { NewsSection } from './NewsSection';  

export const MainContent = () => {
    return (
        <main className={styles.background}>
            <div className={styles.circle}></div>
            <HeroBanner />
            <div className={styles.container}>
            
            <BlogSection />
            <NewsSection />
            </div>
        </main>
    )
}