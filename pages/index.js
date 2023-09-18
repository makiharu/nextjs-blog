import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Links from '../components/Links';
import HeadLine from '../components/Headline';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('マウント時');
    // Homeコンポーネントがマウントされる（DOMになる）瞬間、JSXがレンダリングされてuseEffectの中の処理が走る。
    document.body.style.backgroundColor ='lightgreen';

    // アンマウント時の処理
    return () => {
      console.log('アンマウント時');
      document.body.style.backgroundColor ='';
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeadLine page="index" />
        <Links />
      </main>
      <Footer />

    </div>
  );
}
