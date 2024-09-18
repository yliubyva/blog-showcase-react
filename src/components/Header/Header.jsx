import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>logo</div>
                <nav className={styles.navigation}>
                    <ul className={styles.list}>
                        <li className={styles.item}><a href="#">link</a></li>
                        <li className={styles.item}><a href="#">link</a></li>
                        <li className={styles.item}><a href="#">link</a></li>
                        <li className={styles.item}><a href="#">link</a></li>
                        <li className={styles.item}><a href="#">link</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}