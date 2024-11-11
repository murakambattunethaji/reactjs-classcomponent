import { Component } from "react";


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
                                    <li><a href="index.html">HOME</a></li>
                                    <li><a href="about.html">ABOUT</a></li>
                                    <li><a href="services.html">SERVICES</a></li>
                                    <li><a href="projects.html">PROJECTS</a></li>
                                    <li><a href="contact.html">CONTACT US</a></li>
                                    <li><a href="clients.html">CLIENTS</a></li>
                                    <li><a href="#"><img src="images/search-icon.png" /></a></li>
                                </ul>
                                <div id="myNav" className="overlay">
                                    <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
                                    <div className="overlay-content">
                                        <a href="index.html">HOME</a>
                                        <a href="about.html">ABOUT</a>
                                        <a href="services.html">SERVICES</a>
                                        <a href="projects.html">PROJECTS</a>
                                        <a href="contact.html">CONTACT US</a>
                                        <a href="client.html">CLIENTS</a>
                                    </div>
                                </div>
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