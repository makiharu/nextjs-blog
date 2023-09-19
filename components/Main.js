import styles from '../styles/Home.module.css';
import Links from '../components/Links';
import Headline from '../components/Headline';

export default function Main(props) {
    console.log("main:" + props);
  return (
      <main>
        <Headline page={props.page}
          >
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <Links />
      </main>
  );
}
