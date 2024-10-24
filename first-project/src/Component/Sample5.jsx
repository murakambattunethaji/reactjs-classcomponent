import { Component } from "react";

export class Sample5 extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* Image Section */}
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex flex-column">
                                <img className="img-fluid rounded w-75 align-self-end" src="img/about-1.jpg" alt="About 1" />
                                <img
                                    className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                                    src="img/about-2.jpg"
                                    alt="About 2"
                                    style={{ marginTop: '-25%' }}
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <p className="d-inline-block border rounded-pill py-1 px-4">About Us</p>
                            <h1 className="mb-4">Why You Should Trust Us? Get to Know About Us!</h1>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                            <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum.</p>
                            <p><i className="far fa-check-circle text-primary me-3"></i>Quality health care</p>
                            <p><i className="far fa-check-circle text-primary me-3"></i>Only Qualified Doctors</p>
                            <p><i className="far fa-check-circle text-primary me-3"></i>Medical Research Professionals</p>
                            <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="#">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}