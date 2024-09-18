import styles from './App.module.css';
import { Header } from '../components/Header';
import { MainContent } from '../components/MainContent';

export const App = () => {
  return (
    <div>
        <Header />
        <MainContent />
    </div>
  );
};