import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Home from "../../Components/Home/Home";
import About from '../About/About';
import BecomeTeacher from '../BecomeTeacher/BecomeTeacher';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import Services from "../Services/Services";
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';

const Routing = () => {
    return (
      <div>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/courses">
              <Services></Services>
            </Route>
            <Route path="/team">
              <Team></Team>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/testimonials">
              <Testimonials></Testimonials>
            </Route>
            <Route path="/become-a-teacher">
              <BecomeTeacher></BecomeTeacher>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    );
};

export default Routing;