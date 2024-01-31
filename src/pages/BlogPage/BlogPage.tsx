import {useRecoilState, useRecoilValue} from "recoil";
import {currentPaginationState, getPaginationState} from "../../store";
import React, {useEffect, useState} from "react";
import styles from './blogePage.module.scss';
import axios from "axios";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import BlogItem from "../../components/BlogItem/BlogItem";
import {BlogState} from "../../types";

export default function BlogPage() {
    const blogs = useRecoilValue(getPaginationState);
    const [totalPosts, setTotalPosts] = useState(0);
    const [currentPage, setCurrentPage] = useRecoilState(currentPaginationState);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("https://frontend-case-api.sbdev.nl/api/posts", {headers: {'token': 'pj11daaQRz7zUIH56B9Z'}}).then((res) => {
                setTotalPosts(res.data.total);
            });
        };
        void fetchData();
    }, []);


    const pageHandler = (pageNumber: number): void => setCurrentPage(pageNumber);

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
            <PaginationComponent onChangePage={pageHandler}
                                 postsPerPage={postsPerPage}
                                 totalPosts={totalPosts}/>
        </div>
    )
}