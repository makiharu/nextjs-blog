import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default function About(props) {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main page="about"></Main>

    <Footer />
    </div>
  );
}
