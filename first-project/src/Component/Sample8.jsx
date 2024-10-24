import { Component } from "react";

export class Sample8 extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <p className="d-inline-block border rounded-pill py-1 px-4">Doctors</p>
                        <h1>Our Experienced Doctors</h1>
                    </div>
                    <div className="row g-4">
                        {/* Doctor 1 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/team-1.jpg" alt="Doctor 1" />
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 2 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/team-2.jpg" alt="Doctor 2" />
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 3 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/team-3.jpg" alt="Doctor 3" />
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 4 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/team-4.jpg" alt="Doctor 4" />
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
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