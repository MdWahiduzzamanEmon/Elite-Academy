import React from 'react';
import { Link } from 'react-router-dom';
import mobile from '../../images/mobile-app-02.webp'
const MobileApp = () => {
    return (
      <div>
        <div className="row pb-5 align-items-center">
          <div className="col-md-6">
            <img src={mobile} className="img-fluid" alt="mobile" />
          </div>
          <div className="col-md-6">
            <p>WHAT ARE YOU LOOKING FOR?</p>
            <h1 className="text-color fw-bold py-3">
              Learn on your <span className="second-text-color">mobile</span>{" "}
              anytime!
            </h1>
            <p>
              Save lessons for later and revise or write notes at any time and
              on multiple devices on your way. Never interfere with activities
              of enjoyment or other precious moments.
            </p>

            <Link to="/download">
              <button className="btn btn-color text-light my-3">
                Download Our App
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default MobileApp;