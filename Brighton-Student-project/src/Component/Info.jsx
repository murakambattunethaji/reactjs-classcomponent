import { Component } from "react";

export class Info extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <section class="info_section layout_padding">
                <div class="container">
                    <div class="info_form">

                        <div class="row">
                            <div class="offset-lg-3 col-lg-3">
                                <h5 class="form_heading">
                                    Newsletter
                                </h5>
                            </div>
                            <div class="col-md-6">
                                <form action="#">
                                    <input type="text" placeholder="Enter Your email" />
                                    <button>
                                        subscribe
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="info_logo">
                                <div>
                                    <a href="">
                                        <img src="images/logo.png" alt="" />
                                        <span>
                                            Brighton
                                        </span>
                                    </a>
                                </div>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="info_links ">
                                <h5>
                                    Contact Us
                                </h5>
                                <p class="pr-0 pr-md-4 pr-lg-5">
                                    Donec odio. Quisque volutpat mattis eros.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                    odio. Quisque volutpat mattis eros
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="info_insta">
                                <h5>
                                    INFORMATION
                                </h5>
                                <p class="pr-0 pr-md-4 pr-md-5">
                                    Donec odio. Quisque volutpat mattis eros.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                    odio. Quisque volutpat mattis eros
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="pl-0 pl-lg-5 pl-md-4">
                                <h5>
                                    MY ACCOUNT

                                </h5>
                                <p>
                                    Donec odio. Quisque volutpat mattis eros.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                    odio. Quisque volutpat mattis eros
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}