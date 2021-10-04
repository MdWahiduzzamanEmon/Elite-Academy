import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BecomeTeacher.css'
const BecomeTeacher = () => {
    return (
      <div>
        <div className="text-center py-5">
          <h2 className="text-color fw-bold">
            Take your interest and register an online class today to enjoy life
            fully
          </h2>
          <Link to="/resume">
            <button className="btn btn-color mt-4 text-light">
              Upload resume
            </button>
          </Link>
        </div>
        {/* form section  */}
        <div className="bg-img-job">
          <div className="container pb-4">
            <Form className="bg-dorm-img">
              <h2 className="text-center py-3 text-color">
                Register to Become an Intructor
              </h2>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <button className="btn btn-color text-light" type="submit">
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    );
};

export default BecomeTeacher;