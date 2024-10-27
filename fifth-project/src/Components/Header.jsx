import { Component } from "react";

export class Header extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <header class="header-area">
                <div class="left">
                    <a href="Javascript:void(0)"><i class="fa fa-search" aria-hidden="true"></i></a>
                </div>
                <div class="right">
                    <a href="Javascript:void(0)"><i class="fa fa-user" aria-hidden="true"></i></a>
                </div>
                <div class="container">
                    <div class="row d_flex">
                        <div class="col-sm-3 logo_sm">
                            <div class="logo">
                                <a href="index.html"></a>
                            </div>
                        </div>
                        <div class="col-lg-10 offset-lg-1 col-md-12 col-sm-9">
                            <div class="navbar-area">
                                <nav class="site-navbar">
                                    <ul>
                                        <li><a class="active" href="index.html">Home</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="action.html">take action</a></li>
                                        <li><a href="index.html" class="logo_midle">covido</a></li>
                                        <li><a href="news.html">news</a></li>
                                        <li><a href="doctores.html">doctores</a></li>

                                        <li><a href="contact.html">Contact </a></li>
                                    </ul>
                                    <button class="nav-toggler">
                                        <span></span>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}