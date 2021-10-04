import React from 'react';
import { Link } from 'react-router-dom';
import './Provide.css'
const Provide = () => {
    return (
        <div>
            {/* what this site provide section  */}
        <div>
          <p>TOGETHER WE CAN CREATE</p>
          <h1 className="fw-bold text-color mb-4">
            Services We <span className="second-text-color">Can Provide</span>{" "}
            For My Clients.
          </h1>
            </div>
            {/* list item  */}
        <ul className="text-secondary fw-bold li-class">
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