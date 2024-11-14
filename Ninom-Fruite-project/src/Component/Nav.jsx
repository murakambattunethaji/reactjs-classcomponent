import { Component } from "react";
import navbar from './imginfo.json'
import { Link } from 'react-router-dom';


export class Nav extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <section class="nav_section">
    <div class="container">
      <div class="custom_nav2">
        <nav class="navbar navbar-expand custom_nav-container ">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex  flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">


              <li class="nav-item">
                  <a class="nav-link" href="Home">
                    <Link to={'Home'}>Home</Link>
                  </a>
                </li>


                <li class="nav-item">
                  <a class="nav-link" href="About">
                    <Link to={'About'}>About</Link>
                  </a>
                </li>


                <li class="nav-item">
                  <a class="nav-link" href="Fruite">
                    <Link to={'Fruite'}>Our Fruite</Link>
                  </a>
                </li>


                  <li class="nav-item">
                  <a class="nav-link" href="Client">
                    <Link to={'Client'}>Client</Link>
                  </a>
                </li>


                <li class="nav-item">
                  <a class="nav-link" href="Contact">
                    <Link to={'Contact'}>Contact us</Link>
                  </a>
                </li>


                <li class="nav-item">
                  <a class="nav-link" href="Shop">
                    <Link to={'Shop'}>Buy Now</Link>
                  </a>
                </li>
              </ul>

              
              <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </section>
        )
    }
}