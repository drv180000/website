import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Container, Row, Col } from 'react-bootstrap';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const Home = () => {
  return (
      <Container>
          <Row>
              <Col>
              About me goes here.
              <h2>Personal statement:</h2>
              <p>Lorem ipsum blah blah blah.</p>
              <br></br>
              <h2>Degrees: </h2>
              <p></p>
              <br></br>
              <h2>Skills: </h2> 
              <p></p>
              <br></br>
              <h2>Organizations: </h2> 
              <p></p>
              <br></br>
              <h2>Previous Employment</h2>
              <p></p>
              </Col>
          </Row>
      </Container>


  );
};

export default Home;
