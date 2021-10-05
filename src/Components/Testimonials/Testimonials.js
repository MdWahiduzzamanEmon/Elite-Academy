import React from 'react';
import { Link } from 'react-router-dom';
import buycourse from '../../images/buycourse.jpg'
const Testimonials = () => {
    return (
      <div>
        <div className="text-center py-5 my-3">
          <h1>
            <span className="text-color fw-bold">Please!! </span> Buy a course
            to get your Testimonial.
          </h1>
        </div>
        <div className="text-center pb-4 mb-5">
          <Link to="/courses">
            <button className="btn btn-color text-white">
              Click here to see courses
            </button>
          </Link>
        </div>
        <div className="text-center">
          <img src={buycourse} alt="" className="img-fluid" />
        </div>
      </div>
    );
};

export default Testimonials;