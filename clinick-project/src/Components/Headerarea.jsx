import { Component } from "react";

export class Headerarea extends Component {
    constructor() {
        super()
    }
    render() {
        return <div> <header class="header" >
            <div class="topbar">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-5 col-12">
                            <ul class="top-link">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Doctors</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-6 col-md-7 col-12">
                            <ul class="top-contact">
                                <li><i class="fa fa-phone"></i>+880 1234 56789</li>
                                <li><i class="fa fa-envelope"></i><a href="mailto:support@yourmail.com">support@yourmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="header-inner">
                <div class="container">
                    <div class="inner">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-12">
                                <div class="logo">
                                    <a href="index.html"><img src="img/logo.png" alt="#" /></a>
                                </div>

                                <div class="mobile-nav"></div>
                            </div>
                            <div class="col-lg-7 col-md-9 col-12">

                                <div class="main-menu">
                                    <nav class="navigation">
                                        <ul class="nav menu">
                                            <li class="active"><a href="#">Home <i class="icofont-rounded-down"></i></a>
                                                <ul class="dropdown">
                                                    <li><a href="index.html">Home Page 1</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Doctos </a></li>
                                            <li><a href="#">Services </a></li>
                                            <li><a href="#">Pages <i class="icofont-rounded-down"></i></a>
                                                <ul class="dropdown">
                                                    <li><a href="404.html">404 Error</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Blogs <i class="icofont-rounded-down"></i></a>
                                                <ul class="dropdown">
                                                    <li><a href="blog-single.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                            <div class="col-lg-2 col-12">
                                <div class="get-quote">
                                    <a href="appointment.html" class="btn">Book Appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>








            <section class="slider">
                <div class="hero-slider">
                    <div class="single-slider"
                        style={{ backgroundImage: `url('img/slider2.jpg')` }}
                    >
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                                        <div class="button">
                                            <a href="#" class="btn">Get Appointment</a>
                                            <a href="#" class="btn primary">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="single-slider"
                        style={{ backgroundImage: `url('img/slider.jpg')` }}

                    >
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                                        <div class="button">
                                            <a href="#" class="btn">Get Appointment</a>
                                            <a href="#" class="btn primary">About Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="single-slider"
                        style={{ backgroundImage: `url('img/slider3.jpg')` }}
                    >
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                                        <div class="button">
                                            <a href="#" class="btn">Get Appointment</a>
                                            <a href="#" class="btn primary">Conatct Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>








            <section class="schedule">
            <div class="container">
                <div class="schedule-inner">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12 ">
                            <div class="single-schedule first">
                                <div class="inner">
                                    <div class="icon">
                                        <i class="fa fa-ambulance"></i>
                                    </div>
                                    <div class="single-content">
                                        <span>Lorem Amet</span>
                                        <h4>Emergency Cases</h4>
                                        <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
                                        <a href="#">LEARN MORE<i class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-schedule middle">
                                <div class="inner">
                                    <div class="icon">
                                        <i class="icofont-prescription"></i>
                                    </div>
                                    <div class="single-content">
                                        <span>Fusce Porttitor</span>
                                        <h4>Doctors Timetable</h4>
                                        <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
                                        <a href="#">LEARN MORE<i class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-12">
                            <div class="single-schedule last">
                                <div class="inner">
                                    <div class="icon">
                                        <i class="icofont-ui-clock"></i>
                                    </div>
                                    <div class="single-content">
                                        <span>Donec luctus</span>
                                        <h4>Opening Hours</h4>
                                        <ul class="time-sidual">
                                            <li class="day">Monday - Fridayp <span>8.00-20.00</span></li>
                                            <li class="day">Saturday <span>9.00-18.30</span></li>
                                            <li class="day">Monday - Thusday <span>9.00-15.00</span></li>
                                        </ul>
                                        <a href="#">LEARN MORE<i class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        </div>

    }
}