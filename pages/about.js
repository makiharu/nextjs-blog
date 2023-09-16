import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Links from '../components/Links';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          About page
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/about.js</code>
        </p>

        <Links />
      </main>

    <Footer />
    </div>
  );
}
