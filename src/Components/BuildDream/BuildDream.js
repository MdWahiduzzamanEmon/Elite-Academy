import React from 'react';
import idea from '../../images/idea-discuss.webp';
import web from '../../images/web-development.webp';
import system from '../../images/system-adminis.webp';
import graphic from '../../images/Graphic-design.webp';
import './BuildDream.css'

const BuildDream = () => {
    return (
        // build up dream section 
      <div>
        <div className="text-center py-5 my-5">
          <p>START LEARNING CODING LANGUAGES </p>
          <h1 className="text-color fw-bold">
            {" "}
            Build Your Dream <span className="second-text-color">TODAY</span>
          </h1>
        </div>
        <div>
          <div className="row text-center py-5">
            <div className="col-md-3">
              <img src={idea} alt="" className="img-fluid pb-4" />
              <h3>Idea Discussion</h3>
              <p className='p-text-hover'>
                Get teamed up with the specialists who work and teach coding for
                years at famous universities.
              </p>
            </div>
            <div className="col-md-3">
              <img src={web} alt="" className="img-fluid pb-4" />
              <h3>Web development</h3>
              <p className='p-text-hover'>
                Learn to start building a webpage from scratch. You decide your
                own pace, course and speed.
              </p>
            </div>
            <div className="col-md-3">
              <img src={system} alt="" className="img-fluid pb-4" />
              <h3>System Administration</h3>
              <p className='p-text-hover'>
                Learners are encouraged to study the mechanism and structure of
                system administration.
              </p>
            </div>
            <div className="col-md-3">
              <img src={graphic} alt="" className="img-fluid pb-4" />
              <h3>Graphic Design</h3>
              <p className='p-text-hover'>
                Have a passion for graphics and arts? Show your talents with
                confidence and self-assertiveness.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BuildDream;