import styles from './latestPosts.module.scss';
import BlogItem from "../BlogItem/BlogItem";
import {useRecoilValue} from "recoil";
import {getBlogsState} from "../../store";
import {BlogState} from "../../types";

export default function LatestPosts() {
    const blogs = useRecoilValue(getBlogsState);
    let displayingBlogs = 4;

    const latestBlogs = [...blogs].sort((a: BlogState, b: BlogState) => {
        let dateA = new Date(a.created_at);
        let dateB = new Date(b.created_at);
        return dateA.getTime() - dateB.getTime();
    });

    console.log(111, latestBlogs);

    return (
        <div className={styles.latestPosts}>
            <div className={styles.latestPosts__items}>
                {latestBlogs.slice(0, displayingBlogs).map((blog: BlogState, index: number) => {
                    return (
                        <BlogItem
                            key={index}
                            title={blog.title}
                            category={blog.category}
                            content={blog.content}
                            imgUrl={blog.imgUrl}
                            created_at={blog.created_at}
                        />
                    )
                })}
            </div>
            <button className={styles.latestPosts__button}>Laad meer</button>
        </div>
    )
}