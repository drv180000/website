import './App.css';
import Navigation from './Navbar.js';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import Art from './art.js';
import Projects from './projects.js';
import Home from './index.js';
import Login from './Login.js';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/art' element={<Art/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      
      
    </div>
  );
}

export default App;
