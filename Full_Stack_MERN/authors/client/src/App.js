import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import PersonForm from './views/PersonForm';
import Update from './views/Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<Main />} path="/" />
                <Route element={<PersonForm />} path="/people" />
                <Route element={<Update/>} path="/people/:id/edit"/>
            </Routes>
        </div>
    );
}
export default App;

