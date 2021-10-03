import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
      fetch("./package.JSON")
        .then((res) => res.json())
        .then((data) => setCourses(data));
    }, []);
    return (
        <div>
            <div>
                <h1 className="text-center py-5 fw-bold text-color">*Courses*</h1>
            </div>
        <div className="container py-3 my-3">
                <Row xs={1} md={1} lg={ 2} className="g-4 ">
            {courses?.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
          </Row>
        </div>
      </div>
    );
};

export default Services;