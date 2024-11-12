import { Component } from "react";

export class Topareas extends Component {
    constructor() {
        super()
    }
    render() {
        return <section class="top-area">
            <div class="header-area">
                <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                    <div class="container">

                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i class="fa fa-bars"></i>
                            </button>
                            <a class="navbar-brand" href="index.html">list<span>race</span></a>

                        </div>
                        <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li class=" scroll active"><a href="#home">home</a></li>
                                <li class="scroll"><a href="#works">how it works</a></li>
                                <li class="scroll"><a href="#explore">explore</a></li>
                                <li class="scroll"><a href="#blog">blog</a></li>
                                <li class="scroll"><a href="#contact">contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="clearfix"></div>

        </section>
    }
}