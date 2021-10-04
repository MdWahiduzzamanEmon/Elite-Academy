import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import './Course.css'
const Course = (props) => {
    // destructuring
    const {c_img,c_price,c_name,C_total_lesson } = props.course;
    return (
        <div>
            {/* course card  */}
        <Col className="shadow_class h-100 py-3">
          <div className="d-md-flex justify-content-between align-items-center ">
            <Card.Img src={c_img} className="img-cls mt-md-0 mt-4" />
            <Card.Body>
              <Card.Title>
                <h3 className="second-text-color fw-bold">{c_price}</h3>
              </Card.Title>
              <Card.Title>
                <p className="text-dark fw-bold py-3">{c_name}</p>
                <small className="text-secondary fw-bold">
                                <FontAwesomeIcon icon={faBook} />{" "}
                   {C_total_lesson}
                </small>
              </Card.Title>
              <button className="btn btn-color text-white mt-3">View Course</button>
            </Card.Body>
          </div>
        </Col>
      </div>
    );
};

export default Course;