import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Charts from '../Charts/Charts';
import Provide from '../Provide/Provide';
import './Team.css';

const Team = () => {
  const [tearchers, setTeachers] = useState([]);
  // api call 
    useEffect(() => {
        fetch("./package-2.JSON")
          .then((res) => res.json())
          .then((data) => setTeachers(data));
    }, [])
   
    return (
      <div className="container">
        <div className="row">
          <div className="mt-5 col-md-6">
            {/* charts  */}
            <Charts></Charts>
            <h4 className="text-color ms-5 fw-bold">----Our Teaching Progress</h4>
          </div>
          <div className="mt-5 col-md-6">
            {/* provide section  */}
            <Provide></Provide>
          </div>
        </div>
        <div>
          {/* team members  */}
          <h2 className="text-center mt-5 py-4 fw-bold text-color">
            *Team Members*
          </h2>
          <Row xs={1} md={4} className="g-4 my-3">
            {tearchers.map((teacher) => (
              <Col key={teacher.id}>
                <Card className="h-100 card-Hover">
                  <Card.Img
                    variant="top"
                    src={teacher.t_img}
                    className="h-75"
                  />
                  <Card.Body>
                    <Card.Title>{teacher.Name}</Card.Title>
                    <Card.Title>
                      <h5 className="text-secondary">{teacher.prof}</h5>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
};

export default Team;