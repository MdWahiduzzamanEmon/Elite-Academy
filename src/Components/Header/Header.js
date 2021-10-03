import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
      <div>
        <Navbar expand="lg" className="bg-color">
          <Container>
            <Navbar.Brand href="#">
              <h3 className="text-color fw-bold">Elite Academy</h3>
              <p>
                <small>ONLINE LEARNING CENTER</small>
              </p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link to="/home" className="text-color fw-bold selected">
                  Home
                </Link>
                <Link to="/services" className="text-color fw-bold selected">
                  Services
                </Link>
                <Link to="#action2" className="text-color fw-bold selected">
                  Team
                </Link>
                <Link to="#action2" className="text-color fw-bold selected">
                  Testimonials
                </Link>
                <Link to="#action2" className="text-color fw-bold selected">
                  Become a Teacher
                </Link>
                <div className="text-color">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </div>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="btn-color">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;