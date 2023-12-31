// import styles from './Headline.module.css';
import styles from 'src/components/Headline/Headline.module.css';

export default function Headline(props) {
  console.log(props);
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      
      <p className={styles.description}>
          Get started by editing
          {props.children}
      </p>

      <button onClick={props.onClick}>ボタン</button>
    </div>

  );
}
