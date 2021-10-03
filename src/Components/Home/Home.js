import React, { useEffect, useState } from 'react';
import './Home.css';
import headerBg from '../../images/header.webp';
import Course from '../Course/Course';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./package.JSON")
          .then((res) => res.json())
          .then((data) => setCourses(data.slice(0,4)));
    },[])
    return (
      <div>
        <section className="bg-color">
          <div className="container py-5">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <h2 className="text-color fw-bold pb-4">
                  Get Enrolled and Gain Excellence
                </h2>
                <p>
                  Learn any coding program in distance and for a reasonable fee.
                  You don't have to struggle alone, you've got our assistance
                  and help.
                </p>
                <button className="btn btn-color text-light mt-4">
                  Enquire Now
                </button>
              </div>
              <div className="col-md-6">
                <div>
                  <img src={headerBg} alt="logo" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* services */}
        <section className="py-5">
          <div className="text-center pb-4">
            <p>CHOOSE A COURSE TO GET STARTED</p>
            <h1 className="text-color fw-bold">
              Latest Featured <span className="second-text-color">Courses</span>
            </h1>
          </div>
          <div className="container">
                    <Row xs={1} md={1} lg={ 2} className="g-4 ">
              {courses?.map((course) => (
                <Course key={course.id} course={course}></Course>
              ))}
            </Row>

            <div className="text-center">
              <Link to="./services">
                <button className="btn btn-color text-white my-5">
                  See More Course
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Home;