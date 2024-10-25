import { FormGroup, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary h6" sticky='top' >
      <Container>
        <Navbar.Brand href="#/">Daniel Vincent</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/art">Art</Nav.Link>
            <Nav.Link href="#/projects">Projects</Nav.Link>
            <Nav.Link href='#/login' className='ms-auto'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;