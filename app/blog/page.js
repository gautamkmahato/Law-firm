import BlogPostGrid from "../components/Blog";
import styles from '../about/page.module.css';

export const metadata = {
    title: "Sahaj Nyay Blog Page",
    description: "Welcome to The Articles of Sahaj Nyay Agency",
};

export default function Blog(){
    return(
        <>
            <section className={styles.aboutUs}>
                <div className={styles.overlay}>
                    <h1 className={styles.title}>Articles</h1>
                    <h2 className={styles.subtitle}>Welcome to The Articles of Sahaj Nyay Agency</h2>
                </div>
            </section>
            <BlogPostGrid />
        </>
    )
}