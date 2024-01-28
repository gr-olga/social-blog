import BlogForm from "../../components/BlogForm/BlogForm";
import styles from './homePage.module.scss';
import BlogItem from "../../components/BlogItem/BlogItem";

export default function HomePage() {

    return (
        <div className={styles.homePage}>
            <div className={`${styles.homePage__item} ${styles.form}`}>
                <BlogForm/>
            </div>
            <div className={`${styles.homePage__item} ${styles.latest}`}>
                {/*TODO debug*/}
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                {/*TODO debug end*/}
            </div>
        </div>
    )
}