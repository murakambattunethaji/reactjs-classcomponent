import { Component } from "react";

export class Contact extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div class="contact_section">
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-6">
                  <div class="contact_bg">
                     <div class="input_main">
                        <div class="container">
                           <h2 class="request_text">REQUEST A CALL BACK</h2>
                           <form action="/action_page.php">
                              <div class="form-group">
                                 <input type="text" class="email-bt" placeholder="Your Name" name="Name"/>
                              </div>
                              <div class="form-group">
                                 <input type="text" class="email-bt" placeholder="Email" name="Email"/>
                              </div>
                              <div class="form-group">
                                 <input type="text" class="email-bt" placeholder="Phone" name="Email"/>
                              </div>
                           <form action="/action_page.php">
                              <div class="form-group">
                                 <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="text"></textarea>
                              </div>
                           </form>
                           </form>
                        </div>
                     </div>
                     <div class="send_bt"><a href="#">SEND</a></div>
                  </div>
               </div>
               <div class="col-md-6 padding_0">
                  <div class="map-responsive">
                     <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="450" frameborder="0"
                    //   style="border:0; width: 100%;" 
                      allowfullscreen></iframe>
                  </div>
               </div>
            </div>
         </div>
      </div>
        )
    }
}