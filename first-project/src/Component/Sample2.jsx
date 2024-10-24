import { Component } from "react";


export class Sample2 extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <i className="fa fa-map-marker-alt text-primary me-2"></i>
                            <small>123 Street, New York, USA</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-3">
                            <i className="far fa-clock text-primary me-2"></i>
                            <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <i className="fa fa-phone-alt text-primary me-2"></i>
                            <small>+012 345 6789</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href="#">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="btn btn-sm-square rounded-circle bg-white text-primary me-0" href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
        
}
 