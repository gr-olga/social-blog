import React from 'react';
import style from './App.module.scss';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={style.container}>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/blog" element={<BlogPage/>}/>
                    </Routes>
                </React.Suspense>
            </div>
        </div>
    );
}

export default App;
