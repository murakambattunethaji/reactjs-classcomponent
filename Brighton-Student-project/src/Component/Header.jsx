import { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <header class="header_section">
                <div class="container">
                    <nav class="navbar navbar-expand-lg custom_nav-container ">
                        <a class="navbar-brand" href="index.html">
                            <img src="images/logo.png" alt="" />
                            <span>
                                Brighton
                            </span>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul class="navbar-nav  ">



                                    <li class="nav-item active">
                                        <a class="nav-link" href="Home">
                                            <Link to={'Home'}>
                                                Home
                                            </Link></a>
                                    </li>



                                    <li class="nav-item">
                                        <a class="nav-link" href="About"> <Link to={'About'}>
                                            About
                                        </Link> </a>
                                    </li>



                                    <li class="nav-item">
                                        <a class="nav-link" href="Client"> <Link to={'Client'}>
                                            Client
                                        </Link>  </a>
                                    </li>



                                    <li class="nav-item">
                                        <a class="nav-link" href="Contact"> <Link to={'Contact'}>
                                            Contact Us
                                        </Link> </a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}