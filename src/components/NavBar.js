import {Container, Nav, Navbar} from "react-bootstrap";

import logo from '../logo.png';

const NavBar = () => {
    return(
        <>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img 
                    src={logo} alt="Green Mode logo"
                    className="w-25"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '200px' }}
                    navbarScroll
                >
                    <Nav.Link href="#">New In</Nav.Link>
                    <Nav.Link href="#">Sale</Nav.Link>
                    <Nav.Link href="#">Tiendas</Nav.Link>
                    <Nav.Link href="#">Ferias</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
 }

export default NavBar;