import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Links from '../components/Links';
import Headline from '../components/Headline';

export default function About(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Headline page="about"/>
        <Links />
      </main>

    <Footer />
    </div>
  );
}
