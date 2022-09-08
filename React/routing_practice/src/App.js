import {Routes, Route} from "react-router-dom";
import Number from "./components/Number"
import Hello from "./components/Hello"
import './App.css';

const Home = () => {
    return (
        <div>
            <h2>Welcome</h2>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <h1>Routing Practice</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hello" element={<Hello />} />
                <Route path="/hello/:textColor/:backgroundColor" element={<Hello />} />
                <Route path="/:number" element={<Number />} />
            </Routes>
        </div>
    );
}

export default App;
