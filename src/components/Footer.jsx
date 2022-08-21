import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BackToTop from "react-back-to-top-button";

const Footer = () => {
  
  return (
  <footer class="bg-dark text-white pt-5 pb-4">

    <div class="container-fluid">
    <BackToTop
    showOnScrollUp={false}
    showAt={50}
    speed={1500}
    easing="easeInOutSine"
   >
       <i class="fa-solid fa-chevron-up" style={{"padding": "15px", "backgroundColor": "#208AAE", "color": "black", "borderRadius": "50%", "z-index": 10000, "fontSize": "20px", "color": "white"}}></i>
    </BackToTop>

      {/* <!-- Upper footer --> */}
     <div class="row">
        {/* <!-- about Gutsuni --> */}
        <div class="col-md-4 col-lg-4 col-xl-4 mt-3 about-g">
          <h6 class="text-uppercase mb-4 font-weight-bold text-success text-start">Gutsuni</h6>
          <p>Gutsuni is the one stop platform for music, instrumental and acapella download, streaming, artists' merchandise, music/sound equipment, podcasts, events news and updates, entertainment news and all things music.</p>

          {/* <!-- Contact Us container --> */}
          <div class="c-us-cont mt-4">
            <span class="d-block c-us text-success"><i class="fa-solid fa-envelope"></i> <a href="#">contact@gutsuni.co.ke</a></span>
            <span class="d-block c-us my-2 text-success"><i class="fa-solid fa-phone"></i> <a href="#">+254712339293</a></span>
          </div>
        </div>

        {/* <!-- Quick Links --> */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 com-container">
          <h6 class="text-success">Quick Links</h6>
          <span class="q-links d-block"><a href="#">&gt; Blog</a></span>
            <span class="q-links d-block"><a href="#">&gt; Contact Us</a></span>
            <span class="q-links d-block"><a href="#">&gt; Personalized Video</a></span>
            <span class="q-links d-block"><a href="#">&gt; Tip Artist</a></span>
            <span class="q-links d-block"><a href="#">&gt; Premium Service</a></span>
            <span class="q-links d-block"><a href="#">&gt; FAQ</a></span>
            <span class="q-links d-block"><a href="#">&gt; Report Abuse</a></span>
            <span class="q-links d-block"><a href="#">&gt; Terms & Conditions</a></span>
            <span class="q-links d-block"><a href="#">&gt; Privacy Policy</a></span>
        </div>

        {/* <!-- For Creators --> */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 com-container">
          <h6 class="text-success">For Creators</h6>
            <span class="q-links d-block"><a href="#">&gt; Join As Creator</a></span>
            <span class="q-links d-block"><a href="#">&gt; Record Label</a></span>
            <span class="q-links d-block"><a href="#">&gt; Request Collabo</a></span>
            <span class="q-links d-block"><a href="#">&gt; Monetization</a></span>
            <span class="q-links d-block"><a href="#">&gt; Can't Join?</a></span>
        </div>

        {/* <!-- Store --> */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 com-container">
          <h6 class="text-success">Store</h6>
            <span class="q-links d-block"><a href="#">&gt; Artists Merchandise</a></span>
            <span class="q-links d-block"><a href="#">&gt; Music Equipment</a></span>
            <span class="q-links d-block"><a href="#">&gt; Payment & Delivery</a></span>
            <span class="q-links d-block"><a href="#">&gt; Terms & Conditions</a></span>
            <span class="q-links d-block"><a href="#">&gt; Sell Gutsuni</a></span>
        </div>

        {/* <!-- Advertising --> */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 com-container">
            <h6 class="text-success">Advertising</h6>
            <span class="q-links d-block"><a href="#">&gt; Advertise With Us</a></span>
            <span class="q-links d-block"><a href="#">&gt; Affiliate marketing</a></span>
            <span class="q-links d-block"><a href="#">&gt; Learn More</a></span>
        </div>
      </div>

      {/* <!-- lower footer --> */}
      <div class="row">
        <div class="container-fluid mt-5 l-footer">
          <span class="h6 c-right-cont">
            <span class="c-right"><i class="fa-regular fa-copyright"></i></span> 
            <a href="#" class="g-link text-decoration-none text-success"> Gutsuni</a>, 2022.
          </span>
         {/* <!-- Social Icons --> */}
         <span class="s-icon-cont">
            <span class="s-icon me-2">
              <a href="#" class="g-social-link"><i class="fab fa-facebook"></i></a>
            </span>
            <span class="s-icon me-2">
             <a href="#" class="g-social-link"><i class="fab fa-instagram"></i></a>
            </span>
            <span class="s-icon me-2">
              <a href="#" class="g-social-link"><i class="fab fa-twitter"></i></a>
            </span>
            <span class="s-icon me-2">
              <a href="#" class="g-social-link"><i class="fab fa-linkedin"></i></a>
            </span>
            <span class="s-icon me-2">
              <a href="#" class="g-social-link"><i class="fab fa-youtube"></i></a>
            </span>
         </span>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer