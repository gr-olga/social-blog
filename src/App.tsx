import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import {getCategoriesState} from "./store";

function App() {
    return (
        <div className="App">
            <Header/>
            <header className="App-header">
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/blog" element={<BlogPage/>}/>
                    </Routes>
                </React.Suspense>
            </header>
        </div>
    );
}

export default App;
