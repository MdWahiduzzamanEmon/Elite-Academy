import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/404-error-with-character-error-design-template-vector-20568716.jpg';
import './Error.css'
const Error = () => {
    return (
      <div className="page-height">
        <div className="text-center">
          <img src={errorImg} alt="error" className="img-fluid pt-5 w-75" />
        </div>
        <div className='text-center pb-5'>
          <Link to="/home">
            <button className="btn btn-color text-light">Back To Home</button>
          </Link>
        </div>
      </div>
    );
};

export default Error;