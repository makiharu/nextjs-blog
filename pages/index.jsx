import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Main from '../src/components/Main';
import { useEffect } from 'react';

export default function Home() {

  const foo = "hoge";
  function handleClick(e) {
    console.log("e.target.href" + e.target.href);
    alert(foo);
    e.preventDefault();
  }

  useEffect(() => {
    alert('マウント時');
    document.body.style.backgroundColor = '';
    return () => {
      alert('アンマウント時');
      document.body.style.backgroundColor = 'lightgreen';
    }
  }, [])

  return (
    
    <div className={styles.container}>
      <Header />
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a href="/about" onClick={handleClick }
      >
        ボタンです</a>

      <Main page="index"></Main>
      <Footer />
    </div>
  );
}
