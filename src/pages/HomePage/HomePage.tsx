import BlogForm from "../../components/BlogForm/BlogForm";
import styles from './homePage.module.scss';

export default function HomePage() {

    return (
        <div className={styles.homePage}>
            <div className={`${styles.homePage__item} ${styles.form}`}>
                <BlogForm/>
            </div>
            <div className={`${styles.homePage__item} ${styles.latest}`}>
                latest posts
            </div>
        </div>
    )
}