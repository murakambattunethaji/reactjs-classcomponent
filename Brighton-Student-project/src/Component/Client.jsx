import { Component } from "react";

export class Client extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <section class="client_section layout_padding">
                <div class="container layout_padding2-top">
                    <div class="heading_container">
                        <h2>
                            Parent’s Feedback
                        </h2>
                    </div>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="client_container layout_padding">
                                    <div class="img-box">
                                        <img src="images/client.png" alt=""/>
                                    </div>
                                    <div class="detail-box">
                                        <h4>
                                            Rohali jonson
                                        </h4>
                                        <h6>
                                            customer
                                        </h6>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in
                                            some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                            are
                                            going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                            the
                                            middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                        </p>
                                        <img src="images/quote.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="client_container layout_padding">
                                    <div class="img-box">
                                        <img src="images/client.png" alt=""/>
                                    </div>
                                    <div class="detail-box">
                                        <h4>
                                            Rohali jonson
                                        </h4>
                                        <h6>
                                            customer
                                        </h6>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in
                                            some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                            are
                                            going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                            the
                                            middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                        </p>
                                        <img src="images/quote.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="client_container layout_padding">
                                    <div class="img-box">
                                        <img src="images/client.png" alt=""/>
                                    </div>
                                    <div class="detail-box">
                                        <h4>
                                            Rohali jonson
                                        </h4>
                                        <h6>
                                            customer
                                        </h6>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in
                                            some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                            are
                                            going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                            the
                                            middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                        </p>
                                        <img src="images/quote.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                </div>
            </section>
        )
    }
}