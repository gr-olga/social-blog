import {useRecoilValue} from "recoil";
import {getBlogsState} from "../../store";
import {BlogState} from "../../types";
import React from "react";

export default function BlogPage() {
    const blogs = useRecoilValue(getBlogsState);
    console.log(blogs);
    return (
        <div>
            <div>
                {blogs.map((blog: BlogState, index: number) => (
                    <div key={index}>
                        <h3>{blog.title}</h3>
                        {/*<p>{blog.category}</p>*/}
                        <div>{blog.content}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}