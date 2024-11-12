import { Component } from "react";

export class Startfortpolio extends Component {
    constructor() {
        super()
    }
    render() {
        return <section class="portfolio section" >
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
                            <img src="img/section-img.png" alt="#"/>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-12">
                        <div class="owl-carousel portfolio-slider">
                            <div class="single-pf">
                                <img src="img/pf1.jpg" alt="#"/>
                                    <a href="portfolio-details.html" class="btn">View Details</a>
                            </div>
                            <div class="single-pf">
                                <img src="img/pf2.jpg" alt="#"/>
                                    <a href="portfolio-details.html" class="btn">View Details</a>
                            </div>
                            <div class="single-pf">
                                <img src="img/pf3.jpg" alt="#"/>
                                    <a href="portfolio-details.html" class="btn">View Details</a>
                            </div>
                            <div class="single-pf">
                                <img src="img/pf4.jpg" alt="#"/>
                                    <a href="portfolio-details.html" class="btn">View Details</a>
                            </div>
                            <div class="single-pf">
                                <img src="img/pf1.jpg" alt="#"/>
                                    <a href="portfolio-details.html" class="btn">View Details</a>
                            </div>
                            <div class="single-pf">
                                <img src="img/pf2.jpg" alt="#"/>
                                    <a href="portfolio-details.html" class="btn">View Details</a>
                            </div>
                            <div class="single-pf">
                                <img src="img/pf3.jpg" alt="#"/>
                                    <a href="portfolio-details.html" class="btn">View Details</a>
                            </div>
                            <div class="single-pf">
                                <img src="img/pf4.jpg" alt="#"/>
                                    <a href="portfolio-details.html" class="btn">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}