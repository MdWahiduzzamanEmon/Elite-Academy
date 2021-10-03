import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css'
const Course = (props) => {
    const {c_img,c_price,c_name,C_total_lesson } = props.course;
    return (
      <div>
        <Col className="shadow_class">
          <div className="d-md-flex justify-content-between align-items-center ">
            <Card.Img src={c_img} className="img-cls mt-md-0 mt-4" />
            <Card.Body>
              <Card.Title>
                <h3 className="second-text-color fw-bold">{c_price}</h3>
              </Card.Title>
              <Card.Text>
                <h4 className="text-dark fw-bold py-3">{c_name}</h4>
                <small>{C_total_lesson}</small>
                        </Card.Text>
                        <button className="btn btn-color text-white">Buy Course</button>
            </Card.Body>
          </div>
        </Col>
      </div>
    );
};

export default Course;