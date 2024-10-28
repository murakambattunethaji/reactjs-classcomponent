import { Component } from "react";

export class Coronota extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div class="coronata">
                <div class="container">
                    <div class="row d_flex grid">
                        <div class="col-md-7">
                            <div class="coronata_img text_align_center">
                                <figure><img src="images/corona.png" alt="#" /></figure>
                            </div>
                        </div>
                        <div class="col-md-5 oder1">
                            <div class="titlepage text_align_left">
                                <h2>Coronavirus what it is?</h2>
                                <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, as opposed to using
                                </p>
                                <a class="read_more" href="coronata.html">About More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}