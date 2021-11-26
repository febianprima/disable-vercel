import React from "react";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import styles from "../Css/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar
        className={styles.warnaNav}
        expand="lg"
        style={{
          top: "0",
          position: "sticky",
          zIndex: "10",
          backgroundColor: "#34BE82",
        }}
      >
        <Container>
          <Navbar.Brand href="/" className="text-white">
            <Image
              style={{ width: "15vw" }}
              src={"/Assets/logo.png"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link
                className="text-white me-4"
                href="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="text-white me-4"
                href="/about"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                className="text-white"
                href="/contact"
              >
                Contact
              </Nav.Link>
            </Nav>
            <Link to="/login">
              <Button variant="success" className={styles.btnLogin}>
                Login
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
