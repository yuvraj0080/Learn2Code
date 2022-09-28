import Aboutus from "./Aboutus";
import { Link } from "react-router-dom";
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">

                <p>copyright @Learn2Code.org(2022)</p>

                <Link to={"/about"} className="navItem">
                About Us
                </Link>

                <Link to={"/contact"} className="navItem">
                Contact Us
                </Link>

            </div>
        );
    }
}

export default Footer;
