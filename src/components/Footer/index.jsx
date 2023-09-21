// 絶対パスから相対パスへ
// import styles from './Footer.module.css';
import styles from 'src/components/Footer/Footer.module.css';

export default function Footer() {
  return (
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          テスト　Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
  );
}
