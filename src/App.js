import logo from './logo.svg';
import './App.css';
import Navigation from './Navbar.js';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import Art from './art.js';
import Projects from './projects.js';
import Home from './index.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/art' element={<Art/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
