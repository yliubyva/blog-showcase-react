import { articlesBlog } from '../../../../data/articlesBlog';
import { ArticleItem } from '../../../Shared/ArticleItem';
import styles from './BlogList.module.css';

export const BlogList = () => {
    return (
        <ul className={styles.list}>
            {[...articlesBlog]
                .sort((a, b) => new Date(b.date) - new Date(a.date)) 
                .map((article) => (
                <ArticleItem 
                    key={article.id} 
                    title={article.title} 
                    description={article.description} 
                    date={article.date} 
                    author={article.author}
                    image={article.image}
                    isBlog={true}
                />
            ))}
        </ul>
    )
}