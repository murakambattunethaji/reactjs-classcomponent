import { Component } from "react";

export class HeaderInner extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div class="full_bg">
                <div class="section">
                    <div id="banner1" class="carousel slide slider_main">
                        <ol class="carousel-indicators ">
                            <li data-target="#banner1" data-slide-to="0" class="indicator-li-1">01</li>
                            <li data-target="#banner1" data-slide-to="1" class="">02</li>
                            <li data-target="#banner1" data-slide-to="2" class="active">03</li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="carousel-caption cuplle">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <div class="photog">
                                                    <h1>Care early<br />Coronavirus</h1>
                                                    <a class="read_more" href="javascript:void(0)">Read More</a>
                                                    <a class="read_more" href="about.html">About Us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-caption cuplle">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <div class="photog">
                                                    <h1>Care early<br />Coronavirus</h1>
                                                    <a class="read_more" href="javascript:void(0)">Read More</a>
                                                    <a class="read_more" href="about.html">About Us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="carousel-caption cuplle">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <div class="photog">
                                                    <h1>Care early<br />Coronavirus</h1>
                                                    <a class="read_more" href="javascript:void(0)">Read More</a>
                                                    <a class="read_more" href="about.html">About Us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a class="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
                            <i class="fa fa-angle-left" aria-hidden="true"></i>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#banner1" role="button" data-slide="next">
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}