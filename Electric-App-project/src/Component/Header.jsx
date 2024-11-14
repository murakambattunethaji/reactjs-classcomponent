import { Component } from "react";
import { Link } from 'react-router-dom';


export class Header extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="header_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="logo"><a href="index.html"><img src="images/logo.png" /></a></div>
                        </div>
                        <div className="col-md-9">
                            <div className="menu_text">
                                <ul>
                                    {/* <a href="index.html">HOME</a> */}
                                    <li>
                                        <Link to={'Home'}>
                                            HOME
                                        </Link>
                                    </li>

                                    {/* <a href="About">ABOUT</a> */}
                                    <li>
                                        <Link to={'About'}>
                                            ABOUT
                                        </Link>
                                    </li>

                                    {/* <a href="Service">SERVICES</a> */}
                                    <li>
                                        <Link to={'Service'}>
                                            SERVICES
                                        </Link>
                                    </li>

                                    {/* <a href="Project">PROJECTS</a> */}
                                    <li>
                                        <Link to={'Project'}>
                                        PROJECTS
                                        </Link>
                                    </li>

                                    {/* <a href="Contact">CONTACT US</a> */}
                                    <li>
                                        <Link to={'Contact'}>
                                            CONTACT US
                                        </Link>
                                    </li>

                                    {/* <a href="Client">CLIENTS</a> */}
                                    <li>
                                        <Link to={'Client'}>
                                            CLIENTS
                                        </Link>
                                    </li>

                                    <li><a href="#"><img src="images/search-icon.png" /></a></li>
                                </ul>
                                {/* <div id="myNav" className="overlay">
                                    <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
                                    <div className="overlay-content">
                                        <a href="index.html">HOME</a>
                                        <a href="about.html">ABOUT</a>
                                        <a href="services.html">SERVICES</a>
                                        <a href="projects.html">PROJECTS</a>
                                        <a href="contact.html">CONTACT US</a>
                                        <a href="client.html">CLIENTS</a>
                                    </div>
                                </div> */}
                                <span
                                    //  style="font-size:33px;cursor:pointer; color: #ffffff;" 
                                    onclick="openNav()"><img src="images/toggle.png" className="toggle_menu" /></span>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        )


    }
}