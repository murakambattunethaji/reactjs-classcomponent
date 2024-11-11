import { Component } from "react";

export class Head extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <section class="preloader">
                <div class="spinner">
                    <span class="sk-inner-circle"></span>
                </div>
            </section>
        )
    }
}