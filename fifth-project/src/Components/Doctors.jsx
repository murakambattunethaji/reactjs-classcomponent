import { Component } from "react";

export class Doctors extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div class="doctors">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage text_align_center ">
                                <h2>What doctors say..</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row d_flex">
                        <div class=" col-md-6">
                            <div id="ho_efcet" class="reader text_align_center">
                                <i><img src="images/doctor1.png" alt="#" /></i>
                                <h3>Dr.Golap den</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                                <span><img src="images/do.png" alt="#" /></span>
                            </div>
                        </div>
                        <div class=" col-md-6">
                            <div id="ho_efcet" class="reader text_align_center">
                                <i><img src="images/doctor2.png" alt="#" /></i>
                                <h3>Dr.Golap den</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                                <span><img src="images/do.png" alt="#" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}