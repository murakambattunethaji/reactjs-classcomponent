import { Component } from "react";

export class Footer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <section class="container-fluid footer_section ">
                <p>
                    &copy; <span id="displayYear"></span> All Rights Reserved. Design by
                    <a href="https://html.design/">Free Html Templates</a>
                </p>
            </section>
        )
    }
}