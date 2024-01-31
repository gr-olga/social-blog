import {useRecoilValue} from "recoil";
import {getBlogsState} from "../../store";
import {BlogState} from "../../types";
import React, {useState} from "react";
import BlogItem from "../../components/BlogItem/BlogItem";
import styles from './blogePage.module.scss';

export default function BlogPage() {
    const blogs = useRecoilValue(getBlogsState);
    // const ITEMS_PER_PAGE = 10;
    // const [currentPage, setCurrentPage] = useState(1);
    // const indexOfLastBlog = currentPage * ITEMS_PER_PAGE;
    // const indexOfFirstBlog = indexOfLastBlog - ITEMS_PER_PAGE;
    // const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    return (
        <div className={styles.blogPage}>
            <div className={styles.blogPage__list}>
                {blogs.map((blog: BlogState, index: number) => (
                    <BlogItem key={index}
                              title={blog.title}
                              category={blog.category}
                              content={blog.content}
                              img_url={blog.img_url}
                              created_at={blog.created_at}
                    />
                ))}
            </div>
            {/*<div className={styles.blogPage__pagination}>*/}
            {/*    {Array.from({length: Math.ceil(blogs.length / ITEMS_PER_PAGE)}).map(*/}
            {/*        (_, index) => (*/}
            {/*            <button key={index} onClick={() => paginate(index + 1)}>*/}
            {/*                {index + 1}*/}
            {/*            </button>*/}
            {/*        )*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>
    )
}