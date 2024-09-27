import PropTypes from 'prop-types';
import styles from './ArticleItem.module.css';

export const ArticleItem = ({ title, description, date, author, image, isBlog }) => {
    return (
        <li className={isBlog ? `${styles.blogLayout}` : `${styles.newsLayout}`}> 
        <div className={isBlog ? `${styles.imageBlog}` : `${styles.imageNews}`}>
            <img src={image} alt={title} className={styles.image} />
        </div>
        <div className={styles.containerText}>
            <div className={styles.introArticle}>
                <a href="#">
                    <h3 className={styles.title}>{title}</h3>
                </a>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.metadata}>
                <span className={styles.date}>{date}</span>
                <span className={styles.dot}>•</span>
                <span className={styles.author}>{author}</span>
            </div>
        </div>
        <div className={styles.divider}></div>
    </li>
    )
}

ArticleItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isBlog: PropTypes.bool.isRequired,
}