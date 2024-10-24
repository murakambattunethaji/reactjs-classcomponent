import { Component } from "react";
import OwlCarousel from 'react-owl-carousel'

export class Sample10 extends Component {
    
    constructor() {
        super()
    }

    

    render() {
        
        const testimonials = [
            {
              image: 'img/testimonial-1.jpg',
              text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
              name: 'Patient Name',
              profession: 'Profession',
            },
            {
              image: 'img/testimonial-2.jpg',
              text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
              name: 'Patient Name',
              profession: 'Profession',
            },
            {
              image: 'img/testimonial-3.jpg',
              text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
              name: 'Patient Name',
              profession: 'Profession',
            },
          ];

        return (
            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <p className="d-inline-block border rounded-pill py-1 px-4">Testimonial</p>
                        <h1>What Say Our Patients!</h1>
                    </div>
                    <OwlCarousel className="testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        {testimonials.map((testimonial, index) => (
                            <div className="testimonial-item text-center" key={index}>
                                <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src={testimonial.image} style={{ width: '100px', height: '100px' }} alt={testimonial.name} />
                                <div className="testimonial-text rounded text-center p-4">
                                    <p>{testimonial.text}</p>
                                    <h5 className="mb-1">{testimonial.name}</h5>
                                    <span className="fst-italic">{testimonial.profession}</span>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        )
    }
}