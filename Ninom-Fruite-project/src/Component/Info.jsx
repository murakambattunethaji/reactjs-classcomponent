import { Component } from "react";
import imgg from "./imginfo.json"

export class Info extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <section class="info_section layout_padding">
                <div class="container">
                    <div class="info_logo">
                        <h2>
                            NiNom
                        </h2>
                    </div>
                    <div class="info_contact">
                        <div class="row">
                            <div class="col-md-4">
                                <a href="">
                                    <img src="images/location.png" alt="" />
                                    <span>
                                        Passages of Lorem Ipsum available
                                    </span>
                                </a>
                            </div>
                            <div class="col-md-4">
                                <a href="">
                                    <img src="images/call.png" alt="" />
                                    <span>
                                        Call : +012334567890
                                    </span>
                                </a>
                            </div>
                            <div class="col-md-4">
                                <a href="">
                                    <img src="images/mail.png" alt="" />
                                    <span>
                                        demo@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8 col-lg-9">
                            <div class="info_form">
                                <form action="">
                                    <input type="text" placeholder="Enter your email" />
                                    <button>
                                        subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-3">
                            <div class="info_social">
                                <div>
                                    {imgg.map((value)=>{
                                        return<a href="">
                                        <img src={value.img} alt="" />
                                    </a>

                                    })}
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}