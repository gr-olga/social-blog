import React, {useEffect} from 'react';
import './App.css';
import {getBlogsApi} from "./store/actions";
import {useAppDispatch} from "./hooks";

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getBlogsApi)
    }, [dispatch])
    return (
        <div className="App">
            <header className="App-header">
                Hello
            </header>
        </div>
    );
}

export default App;
