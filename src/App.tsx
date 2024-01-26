import React from 'react';
import './App.css';
import {useRecoilValue} from "recoil";
import {getBlogsState} from "./store";
import {BlogState} from "./types";

function App() {
    const blogs = useRecoilValue(getBlogsState);
console.log(blogs);
    return (
        <div className="App">
            <header className="App-header">
         <div>
                <h1>My Blog</h1>
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

            </header>
        </div>
    );
}

export default App;
