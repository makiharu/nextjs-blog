import Link from "next/link";
import styles from 'src/components/Main/Main.module.css';

export default function AnimalList() {

    return (
        <div>
            <main className={styles.main}>
                <h2>Animals</h2>
                <ul>
                    <li>
                        <Link href="/animals/cat">
                            <p>cat</p>
                        </Link>
                        <Link href="./dog">
                            <p>dog</p>
                        </Link>
                        <Link href="./bird">
                            <p>bird</p>
                        </Link>
                    </li>
                </ul>
            </main>
        </div>
    );
}