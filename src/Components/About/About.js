import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../images/About-us.webp';
import BuildDream from '../BuildDream/BuildDream';
import './About.css';

const About = () => {
    return (
      <div>
        <section className=" about-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src={about} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 text-center">
                <h1 className="fw-bold text-color py-4">About Us</h1>
                <p>
                  We are committed to take education to every single door,
                  making it a superb blend of knowledge and job specific. Our
                  mission is to create ethical and intellectual personnel
                  through qualitative education. Today, Excellence Classes is
                  located at Malad West, Mumbai, Maharashtra. And, we are
                  looking forward to spread our efficiency at every nook and
                  corner of India. We are the player with diverse courses,
                  teaching methodology, efficient faculty team and effective
                  management staff. Choose to contact or reach us for an assured
                  advanced career.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* bild-dream  */}
        <section className="container">
          <BuildDream></BuildDream>
            </section>
            {/* button  */}
            <section className="text-center pb-5">
                <Link to="/courses">
                    <button className="btn btn-color text-light p-4">Buy Course</button>
                </Link>
            </section>
      </div>
    );
};

export default About;