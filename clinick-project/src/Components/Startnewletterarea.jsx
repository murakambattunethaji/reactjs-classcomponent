import { Component } from "react";

export class Startnewletterarea extends Component {
    constructor() {
        super()
    }
    render() {
        return <section class="newsletter section">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-6  col-12">
                        <div class="subscribe-text ">
                            <h6>Sign up for newsletter</h6>
                            <p class="">Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,<br/> homero alterum.</p>
                        </div>
                    </div>
                    <div class="col-lg-6  col-12">
                        <div class="subscribe-form ">
                            <form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
                                <input name="EMAIL" placeholder="Your email address" class="common-input" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Your email address'" required="" type="email"/>
                                    <button class="btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}