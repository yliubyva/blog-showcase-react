import { articlesNews } from '../../../../data/articlesNews';
import { ArticleItem } from '../../../Shared/ArticleItem';
import styles from './NewsList.module.css';

export const NewsList = () => {
    return (
        <ul className={styles.list}>
                {[...articlesNews]
                    .sort((a, b) => new Date(b.date) - new Date(a.date)) 
                    .map((article) => (
                <ArticleItem 
                    key={article.id} 
                    title={article.title} 
                    description={article.description} 
                    date={article.date} 
                    author={article.author}
                    image={article.image}
                    isBlog={false}
                />
            ))}
        </ul>
    )
}