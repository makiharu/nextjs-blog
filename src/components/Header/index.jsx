import Link from "next/link";
// import styles from "./Header.module.css";
import styles from "src/components/Header/Header.module.css";

export default function Header() {
  return (
      <header>
        <Link href="/" className={styles.anchor}>
          Index
        </Link>
        <Link href="/about" className={styles.anchor}>
          About
        </Link>
      </header>
  );
}
