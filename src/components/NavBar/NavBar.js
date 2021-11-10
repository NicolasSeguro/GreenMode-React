import {Container, Nav, Navbar} from "react-bootstrap";

import CartWidget from '../Cart/CartWidget'
import { Link } from "react-router-dom";
import logo from '../../logo.png'

const NavBar = () => {
    return(
        <>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <Link to={'/'}>
                        <img 
                        src={logo} alt="Green Mode logo"
                        className="w-25"/>
                    </Link>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '200px' }}
                    navbarScroll
                >
                    <Link to={'/categoria/new'}>New In</Link>
                    <Link to={'/categoria/sale'}>Sale</Link>
                    <Link to={'/categoria/tiendas'}>Tiendas</Link>
                    <Link to={'/categoria/ferias'}>Ferias</Link>
                </Nav>
                <Link to={'/cart'}>
                    <CartWidget/>
                </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
 }

export default NavBar;