import { useRouter } from "next/router";
import styles from '/styles/Home.module.css';
import Link from "next/link";
export async function getStaticProps({params}) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: {
            animal: data,
        }
    }
}

export async function getStaticPaths() {
    const req = await fetch(`http://localhost:3000/animals.json`);
    const data = await req.json();

    // ["dog", "cat", "dog"]
    const paths = data.map((animal) => {
        return {
            params: {
                id: animal,
            } 
        }
    });

    return {
        paths,
        fallback: false, // パスで設定されていないものは404 not found
    };
}

const Animal = ({animal}) => {
    const router = useRouter();
    console.log(router.query);
    // 分割代入
    const {id} = router.query;

    return (
        <div>
        <h2>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>{id}ページ</h1>
                    <img src={animal.image} width="300" heght="400"></img>
                    <p>{animal.name}</p>
                    <hr />
                    <Link href="/animals">一覧に戻る</Link>
                </main>
            </div>
        </h2>
    </div>
    );
}

export default Animal;
