import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { BsFacebook } from "react-icons/bs";
import { Link } from 'react-router-dom';
import paymentImg from '../../images/payment.png'

const Footer = () => {
    // footer 
    return (
      <div className="bg-color">
        <div className="container">
                <div className="row py-5">
                    {/* address  */}
            <div className="col-md-6">
              <h3>Address</h3>
              <p>Jhikargachha,Jessore FL 33179-3899 +1 (305) 547-9909</p>
              <p>(9am - 5pm GMT, Monday - Friday)</p>
              <p>Mail: wahedemon09@gmail.com</p>
              <h5>
                <BsFacebook />
              </h5>
                    </div>

                    {/* route link  */}

            <div className="col-md-3">
              <h3>Explore</h3>
              <div className="d-flex flex-column">
                <Link to="/home" className="fw-bold selected">
                  <p>Home</p>
                </Link>
                <Link to="/services" className="fw-bold selected">
                  <p>Services</p>
                </Link>
                <Link to="/team" className="fw-bold selected">
                  <p>Team</p>
                </Link>
                <Link to="/Testimonials" className="fw-bold selected">
                  <p>Testimonials</p>
                </Link>
                <Link to="/become-a-teacher" className="fw-bold selected">
                  <p>Become a Teacher</p>
                </Link>
              </div>
                    </div>
                    {/* search filed  */}
            <div className="col-md-3">
              <h3>Information</h3>
              <InputGroup className="my-3">
                <FormControl
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
              <div>
                <img src={paymentImg} alt="" className="img-fluid py-3" />
              </div>
            </div>
          </div>
          <p className="text-center">
            &copy; 2021 MD-Wahiduzzaman-Emon. All Rights Reserved
          </p>
        </div>
      </div>
    );
};

export default Footer;