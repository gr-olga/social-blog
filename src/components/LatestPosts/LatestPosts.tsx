import styles from './latestPosts.module.scss';
import BlogItem from "../BlogItem/BlogItem";
import {useRecoilValue} from "recoil";
import {getBlogsState} from "../../store";
import {BlogState} from "../../types";
import {useState} from "react";
import {getBlogs} from "../../services/blog-service";

export default function LatestPosts() {
     const blogs = useRecoilValue(getBlogsState);
    const [displayingBlogs, setDisplayingBlogs] = useState(4);

    function downloadMoreBlogs() {
        setDisplayingBlogs(displayingBlogs + 4);
    }

    const latestBlogs = [...blogs].sort((a: BlogState, b: BlogState) => {
        let dateA = new Date(a.created_at);
        let dateB = new Date(b.created_at);
        return dateA.getTime() - dateB.getTime();
    });


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
                            img_url={blog.img_url}
                            created_at={blog.created_at}
                        />
                    )
                })}
            </div>
            <button className={styles.latestPosts__button} onClick={downloadMoreBlogs}>Laad meer</button>
        </div>
    )
}