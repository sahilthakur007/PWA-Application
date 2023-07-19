import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap"
import { useNavigate  } from "react-router-dom";

export default () => {
    const  navigate = useNavigate()
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand  >Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link  onClick={() => navigate("/")}>Home</Nav.Link>
                    <Nav.Link onClick={() => navigate("/users")}>Users</Nav.Link>
                    <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
