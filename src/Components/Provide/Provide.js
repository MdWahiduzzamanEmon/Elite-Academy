import React from 'react';
import { Link } from 'react-router-dom';

const Provide = () => {
    return (
      <div>
        <div>
          <p>TOGETHER WE CAN CREATE</p>
          <h1 className="fw-bold text-color">
            Services We <span className="second-text-color">Can Provide</span>{" "}
            For My Clients.
          </h1>
        </div>
        <ul className="text-secondary fw-bold">
          <li>Select & customize courses to your preferences</li>
          <li>Change the tutor and make arrangements</li>
          <li>Participate in events to join others</li>
          <li>Get the desired certificate delivered at house</li>
        </ul>
        <Link to="/services">
          <button className="btn btn-color text-light">Check courses</button>
        </Link>
      </div>
    );
};

export default Provide;