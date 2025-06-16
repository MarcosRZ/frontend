import styles from "./page.module.css";
import { SkullLogo } from "./components";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SkullLogo
          width={180}
          height={180}
          startColor="#ff0099"
          middleColor="#FF3300"
          endColor="#ff0099"
        />
        <h1 className={styles.title}>
          Sucaro Industries  
        </h1>
        <h2 className={styles.subtitle}>1989 - 2025</h2>
      </main>
      <footer className={styles.footer}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Sucaro Industries. All rights reserved.</p>
      </footer>
    </div>
  );
}
