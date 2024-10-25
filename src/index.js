import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Container, Row, Col } from 'react-bootstrap';
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
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
              <h4>Personal statement:</h4>
              <p>Lorem ipsum blah blah blah.</p>
              <br></br>
              <h4>Degrees: </h4>
              <p></p>
              <br></br>
              <h4>Skills: </h4> 
              <p></p>
              <br></br>
              <h4>Organizations: </h4> 
              <p></p>
              <br></br>
              <h4>Previous Employment</h4>
              <p></p>
              </Col>
          </Row>
      </Container>


  );
};

export default Home;
