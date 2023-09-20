import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('マウント時');
    // document.body.style.backgroundColor ='lightgreen';

    // アンマウント時の処理
    return () => {
      console.log('アンマウント時');
      // document.body.style.backgroundColor ='';
    }
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main page="index"></Main>
      <Footer />
    </div>
  );
}
