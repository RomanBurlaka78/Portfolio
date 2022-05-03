import logo from './logo192.png' ;
import {React,  Component } from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import './Header.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


export default class Header extends Component {
  render() {
    return (
      <>
     
      <Navbar className='fixed' collapseOnSelect expand="lg" bg="dark" variant="dark">
        
        
      <Container>
      <Navbar.Brand href="#home">
        <img
        src={logo}
        height="30"
        width="30"
        className="d-inline-block align-top"
        alt="logo"
        
        />
      Site on React JS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='header' href="#features">Home</Nav.Link>
          <Nav.Link className='header'  href="#pricing">About</Nav.Link>
          <NavDropdown className='header'title="Contact" id="collasible-nav-dropdown">
            <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item className='header' href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item className='header' href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className='header' href="#action/3.4">Else anouther</NavDropdown.Item>
          </NavDropdown>
        </Nav>
       
      </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>, */}
    </>
    )
  }
}
