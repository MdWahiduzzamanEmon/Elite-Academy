import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Services = () => {
  const [courses, setCourses] = useState([]);
  const [display,setDisplay]=useState([])
    useEffect(() => {
      fetch("./package.JSON")
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
          setDisplay(data);
        });
    }, []);
  
   const handleToSearch = (e) => {
     const searchText = e.target.value;
     console.log(searchText);
     const s = courses.filter((c) => c.course.includes(searchText));
     setDisplay(s);
     
   };
    return (
      <div>
        <div>
          <h1 className="text-center py-5 fw-bold text-color">*Courses*</h1>
        </div>
        <div className="container py-3 my-3">
        {/* search new or old course */}
          <FloatingLabel controlId="floatingSelect" label="Works with selects" className='mb-4'>
            <Form.Select
              aria-label="Floating label select example"
              onChange={handleToSearch}
            >
              <option value='course'>Find New or Old course</option>
              <option value="new">New Course</option>
              <option value="old">Old Course</option>
            </Form.Select>
          </FloatingLabel>

          <Row xs={1} md={1} lg={2} className="g-4 ">
            {display?.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
          </Row>
        </div>
      </div>
    );
};

export default Services;