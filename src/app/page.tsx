import styles from './page.module.css';
import { Hero, Footer } from '@/components/layout';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
