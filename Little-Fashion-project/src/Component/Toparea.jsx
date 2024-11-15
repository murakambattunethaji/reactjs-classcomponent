import { Component } from "react";
import { Link } from 'react-router-dom';

export class Toparea extends Component {
    constructor() {
        super()
    }
    render() {
        return  <section class="top-area">
        <div class="header-area">
            <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                <div class="container">

                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i class="fa fa-bars"></i>
                        </button>
                        <a class="navbar-brand" href="index.html">list<span>race</span></a>

                    </div>
                    <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                        <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">


                            <li class=" scroll active"><a href="Home">
                                <Link to="Home">
                                Home
                                </Link>
                                </a></li>



                            <li class="scroll"><a href="#works">  <Link to="Workss">
                                How it works
                                </Link></a></li>



                            <li class="scroll"><a href="Explores">  <Link to="Explores">
                                Explore
                                </Link></a></li>



                            <li class="scroll"><a href="Blogs">  <Link to="Blogs">
                                Blog
                                </Link></a></li>



                            <li class="scroll"><a href="Statisticss">  <Link to="Statisticss">
                            Statisticss
                                </Link></a></li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    </section>
    }
}