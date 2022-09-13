import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';


function App() {
    return (
    <div className="App">
        <Routes>
            <Route element={<Main/>} path="/" />
            <Route element={<Detail/>} path="/api/product/:id" />
            <Route element={<Update/>} path="/api/product/:id/edit"/>

        </Routes>                         
    </div>
    );
}
export default App;