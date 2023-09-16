import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Links from '../components/Links';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Index page
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <Links />
      </main>
      <Footer />

    </div>
  );
}
