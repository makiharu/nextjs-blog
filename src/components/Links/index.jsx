
import styles from 'src/components/Links/Links.module.css';

const ITEMS = [
  {
  href: "https://nextjs.org/docs",
  title: "1. Documentation &rarr",
  description: "Find in-depth information about Next.js features and API."
  },
  {
  href: "https://nextjs.org/learn",
  title: "2. Learn &rarr;",
  description: "Learn about Next.js in an interactive course with quizzes!."
  },
  {
  href: "https://github.com/vercel/next.js/tree/canary/examples",
  title: "3. Examples &rarr;",
  description: "Discover and deploy boilerplate example Next.js projects.."
  },
  {
  href: "https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
  title: "4. Documentation &rarr",
  description: "Instantly deploy your Next.js site to a public URL with Vercel."
  }
];
export default function Links() {
    return (
        <div className={styles.grid}>
          {ITEMS.map( (item) => {
            return (
              <a key={item.title} href={item.href} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
            );
          })}
        </div>
    )
}
