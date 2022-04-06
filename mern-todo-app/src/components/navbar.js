import React,{useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
function NavBar() {
  useEffect(()=>{
    console.log("NavBar!");
  },[]);
  return (
    <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">MERN-Stack Todo App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Todos</Nav.Link>
                    <Nav.Link href="/create">Create Todo</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  );
}

export default NavBar;
