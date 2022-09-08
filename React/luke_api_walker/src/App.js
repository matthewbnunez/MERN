import './App.css';
import DisplayPerson from './components/DisplayPerson';
import DisplayPlanet from './components/DisplayPlanet';
import HeaderForm from './components/HeaderForm';
import {Routes, Route} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <HeaderForm />
            <Routes>
                <Route path="/people/:id" element={<DisplayPerson />} />
                <Route path="/planet/:id" element={<DisplayPlanet />} />
            </Routes>
        </div>
    );
}

export default App;
