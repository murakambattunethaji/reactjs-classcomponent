import { Component } from "react";

export class Update extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div class="update">
                <div class="cevery_white">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="titlepage">
                                    <h2>Get Every Update.... </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cevery_bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <form id="colof" class="form_subscri">
                                    <input class="newsl" placeholder="Your Email" type="text" name="Email" />
                                    <button class="subsci_btn">Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}