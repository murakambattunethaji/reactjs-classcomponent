import { Component } from "react";

export class Footer extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div class="footer_section layout_padding">
         <div class="container">
         </div>
         <div class="footer_section_2">
            <div class="container">
               <h2 class="addres_text">Addres</h2>
               <div class="row map_addres">
                  <div class="col-sm-12 col-lg-4">
                     <div class="map_text"><img src="images/map-icon.png"/><span class="map_icon">No.123 Chalingt Gates, Supper market New York</span></div>
                  </div>
                  <div class="col-sm-12 col-lg-4">
                     <div class="map_text"><img src="images/phone-icon.png"/><span class="map_icon">( +71 7986543234 )</span></div>
                  </div>
                  <div class="col-sm-12 col-lg-4">
                     <div class="map_text"><img src="images/email-icon.png"/><span class="map_icon">demo@gmail.com</span></div>
                  </div>
               </div>
               <div class="social_icon">
                  <ul>
                     <li><a href="#"><img src="images/fb-icon.png"/></a></li>
                     <li><a href="#"><img src="images/twitter-icon.png"/></a></li>
                     <li><a href="#"><img src="images/in-icon.png"/></a></li>
                     <li><a href="#"><img src="images/instagram-icon.png"/></a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
        )
    }
}