import React from 'react';
import './Home.css';
import headerBg from '../../images/header.webp';
const Home = () => {
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
      </div>
    );
};

export default Home;