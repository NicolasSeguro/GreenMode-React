import {Container, Nav, Navbar} from "react-bootstrap";

const NavBar = () => {
    return(
        <>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Green Mode</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '200px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action2">New In</Nav.Link>
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