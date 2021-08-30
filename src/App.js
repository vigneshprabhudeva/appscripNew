import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar';
import Stats from './Components/Stats'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {useState} from 'react'


function App() {
  const [sidebar, setsidebar] = useState(false)
  function props(){
   setsidebar(!sidebar)
  }
  return (
    <div className="App">
      <Router>
    
        <Navbar handleclick={props}/>
        <Sidebar sidebar={sidebar}/>
        <Stats sidebar={sidebar}/>
        </Router>
       
      
    </div>
  );
}

export default App;
