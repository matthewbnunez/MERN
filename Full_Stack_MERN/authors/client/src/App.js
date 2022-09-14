import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import PersonForm from './views/PersonForm';
import Update from './views/Update';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<Main />} path="/" />
                <Route element={<PersonForm />} path="/api/people" />
                <Route element={<Update/>} path="/api/people/:id/edit"/>
            </Routes>
        </div>
    );
}
export default App;

