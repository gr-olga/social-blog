import React from 'react';
import './App.css';
import {useRecoilValue} from "recoil";
import {getBlogsState} from "./store";
import {BlogState} from "./types";
import Header from "./components/Header/Header";

function App() {
    const blogs = useRecoilValue(getBlogsState);
console.log(blogs);
    return (
        <div className="App">
            <Header/>
            <header className="App-header">
                <React.Suspense fallback={<div>Loading...</div>}>
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
                </React.Suspense>
            </header>
        </div>
    );
}

export default App;
