import styles from './latestPosts.module.scss';
import BlogItem from "../BlogItem/BlogItem";

export default function LatestPosts() {
    return (
        <div className={styles.latestPosts}>
            {/*TODO debug*/}
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            {/*TODO debug end*/}
        </div>
    )
}