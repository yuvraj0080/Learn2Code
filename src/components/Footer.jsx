import Aboutus from "./Aboutus";
import { Link } from "react-router-dom";
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">

                <p>copyright @Learn2Code.org(2022)</p>

                <Link to={"/about"} className="navItem">
                <button class="footerItem">About Us</button>
                </Link>

                <Link to={"/contact"} className="navItem">
                <button class="footerItem">Contact Us</button>

                
            </Link>
            </div>
        );
    }
}

export default Footer;
