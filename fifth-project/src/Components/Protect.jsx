import { Component } from "react";

export class Protect extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div class="protect">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage text_align_center">
                                <h2>How to Protect Yourself</h2>
                                <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, as opposed to using
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="protect_bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="owl-carousel owl-theme">
                                    <div class="item">
                                        <div class="protect_box text_align_center">
                                            <div class="desktop">
                                                <i><img src="images/pro1.png" alt="#" /></i>
                                                <h3> Wear Mask</h3>
                                                <span> Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                                    default model text, and a search for</span>
                                            </div>
                                            <a class="read_more" href="protect.html">Read More</a>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="protect_box text_align_center">
                                            <div class="desktop">
                                                <i><img src="images/pro2.png" alt="#" /></i>
                                                <h3> Wash Your Hands</h3>
                                                <span> Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                                    default model text, and a search for</span>
                                            </div>
                                            <a class="read_more" href="protect.html">Read More</a>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="protect_box text_align_center">
                                            <div class="desktop">
                                                <i><img src="images/pro3.png" alt="#" /></i>
                                                <h3> Stay at Home</h3>
                                                <span> Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                                    default model text, and a search for</span>
                                            </div>
                                            <a class="read_more" href="protect.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}