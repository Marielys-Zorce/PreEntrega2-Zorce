import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../CartWidget/CartWidget';
import logo from '../Navbar/logo.JPG';
import { Link } from 'react-router-dom'





function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} width="80px" alt='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='nav-link letraGrande'>Inicio</Link>
            <Link to="/productos/Heladas" className='nav-link letraGrande'>Heladas</Link>
            <Link to="/productos/Bizcocho" className='nav-link letraGrande'>Bizcocho</Link>
            <Link to="/productos/Panqueque" className='nav-link letraGrande'>Panqueque</Link>
            <Link to="/productos/MilHoja" className='nav-link letraGrande'>De Hoja</Link>
            
         
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Buscar</Button>
          </Form>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;