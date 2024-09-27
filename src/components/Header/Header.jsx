import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="#">
                <img src="/public/logo.svg" alt="logo" />
                </a>
                <nav className={styles.navigation}>
                    <ul className={styles.list}>
                        <li className={styles.item}><a className={styles.link} href="#">Home</a></li>
                        <li className={styles.item}><a className={styles.link} href="#">About</a></li>
                        <li className={styles.item}><a className={styles.link} href="#">Blog</a></li>
                        <li className={styles.item}><a className={styles.link} href="#">News</a></li>
                        <li className={styles.item}><a className={styles.link} href="#">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}