import { Header } from '../components/Header';
import { MainContent } from '../components/MainContent';
import styles from './App.module.css';

export const App = () => {
  return (
    <div>
        <div className={styles.background}></div>
        <Header />
        <MainContent />
    </div>
  );
};