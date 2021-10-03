import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Home from "../../Components/Home/Home";

const Routing = () => {
    return (
        <div>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Routing;