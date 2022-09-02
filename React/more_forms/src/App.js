import './App.css'; 
import UserForm from './components/UserForm'; 


function App() { 
    return ( 
        <div className="App"> 
            <UserForm firstName={"Doe"} lastName={"Jane"} age={45} hairColor={"Black"} />
        </div> 
    ); 
} 

export default App;