import { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

const Store = () => {
    const calculateTimeLeft = () => {
      let year = new Date().getFullYear();
      const difference = +new Date(`12/31/${year}`) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
      }
      return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearTimeout(timer);
    });
    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }
    
      timerComponents.push(
        <span>
          {timeLeft[interval]} {" "}
        </span>
      );
    });     

    console.log(timerComponents);

  return (
    // <!-- main section starts here -->
  <main className="pt-5 mt-3">
    <div className="container-fluid mb-4">
      {/* <!-- Bannerscetion begins here --> */}
      <section id="store-banner" className="store-banner">
        {/* <!-- slider --> */}
        <OwlCarousel className='owl-theme' items={1} loop margin={10} autoplay ={true}>

          {/* <!-- banner items --> */}
          <div className="item">
            {/* <!-- image --> */}
            <a href="#" className="banner-store-img">
              <img style={{"objectFit": "cover"}} src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Name" height="300px" width="100%" />
            </a>
            {/* <!-- product information --> */}
            <div className="store-product-info">
              {/* <!-- product banner News --> */}
              <span className="h4 d-block pro-banner-news text-uppercase">
                New Smartphone compare models air
              </span>
              {/* <!-- product small details --> */}
              <span className="product-small-details h6 d-block mt-3">
                Awaken your in between moments
              </span>
              {/* <!-- price --> */}
              <span className="price h5 d-block text-start text-uppercase mt-3">
                KSH 8500
              </span>
              {/* <!-- Shop Now button --> */}
              <a href="#" className="btn btn-dark shop-now-btn btn-md mt-1">Shop Now</a>
            </div>
          </div>
          {/* <!-- banner items --> */}
          <div className="item">
            {/* <!-- image --> */}
            <a href="#" className="banner-store-img">
              <img style={{"objectFit": "cover"}} src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Name" height="300px" width="100%" />
            </a>
            {/* <!-- product information --> */}
            <div className="store-product-info">
              {/* <!-- product banner News --> */}
              <span className="h4 d-block pro-banner-news text-uppercase">
                New Smartphone compare models air
              </span>
              {/* <!-- product small details --> */}
              <span className="product-small-details h6 d-block mt-3">
                Awaken your in between moments
              </span>
              {/* <!-- price --> */}
              <span className="price h5 d-block text-start text-uppercase mt-3">
                KSH 8500
              </span>
              {/* <!-- Shop Now button --> */}
              <a href="#" className="btn btn-dark shop-now-btn btn-md mt-1">Shop Now</a>
            </div>
          </div>
          {/* <!-- banner items --> */}
          <div className="item">
            {/* <!-- image --> */}
            <a href="#" className="banner-store-img">
              <img style={{"objectFit": "cover"}} src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Name" height="300px" width="100%" />
            </a>
            {/* <!-- product information --> */}
            <div className="store-product-info">
              {/* <!-- product banner News --> */}
              <span className="h4 d-block pro-banner-news text-uppercase">
                New Smartphone compare models air
              </span>
              {/* <!-- product small details --> */}
              <span className="product-small-details h6 d-block mt-3">
                Awaken your in between moments
              </span>
              {/* <!-- price --> */}
              <span className="price h5 d-block text-start text-uppercase mt-3">
                KSH 8500
              </span>
              {/* <!-- Shop Now button --> */}
              <a href="#" className="btn btn-dark shop-now-btn btn-md mt-1">Shop Now</a>
            </div>
          </div>
          </OwlCarousel>
      </section>
      {/* <!-- Banner section ends here --> */}

      {/* <!-- Popular categories begins here --> */}
      <section className="store-popular-categories">
        {/* <!-- header --> */}
        <span className="h5 d-block text-center mt-5 mb-3 fw-bold">Popular <span style={{"color": "#007e37"}}>Categories</span></span>
        {/* <!-- categories list --> */}
        <div className="row">
          {/* <!-- Microphones --> */}
          
          <div className="col-md-3 col-6 mb-2">
          <Link to="/category" className="d-block text-decoration-none"> 
              <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Studio Equipment" className="cat-item" height="180px" width="100%" />
              <span className="d-block h6 text-center fw-bold mt-3">Microphones & Headphones</span>
          </Link>
          </div>
          {/* <!-- studio Equipment --> */}
          <div className="col-md-3 col-6 mb-2">
            <a href="/category" className="d-block text-decoration-none">
              <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Studio Equipment" className="cat-item" height="180px" width="100%" />
              <span className="d-block h6 text-center fw-bold mt-3">Studio Equipment</span>
            </a>
          </div>
          {/* <!-- Monitors & speakers --> */}
          <div className="col-md-3 col-6 mb-2">
            <a href="/category" className="d-block text-decoration-none">
              <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Studio Equipment" className="cat-item" height="180px" width="100%" />
              <span className="d-block h6 text-center fw-bold mt-3">Monitors & Speakers</span>
            </a>
          </div>
          {/* <!-- Artist Merchandise --> */}
          <div className="col-md-3 col-6 mb-2">
            <a href="/category" className="d-block text-decoration-none">
              <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Studio Equipment" className="cat-item" height="180px" width="100%" />
              <span className="d-block h6 text-center fw-bold mt-3">Artist Merchandise</span>
            </a>
          </div>
          
        </div>
      </section>
      {/* <!-- Popular categories ends here --> */}

      {/* <!-- Filter section begins here --> */}
      <div className="container-fluid mt-3 pt-2 mb-5">
       {/* <!-- header --> */}
       <span className="h5 d-block text-center mt-5 mb-3 fw-bold">New <span style={{"color": "#007e37"}}>Arrivals</span></span>
      <div className="filter-menu n-arrival col-12 mb-3">
          <ul className="d-flex justify-content-start m-0 p-0">
              <li className="me-5 active" data-filter="*">All</li>
              <li className="me-5 text-center" data-filter=".studio">Studio</li>
              <li className="me-5 text-center" data-filter=".merchandise">Merchandise</li>
              <li className="me-5 text-center" data-filter=".utilities">Utilities</li>
          </ul>
      </div>
      <div className="container-fluid m-0 p-0">
          <div className="filter-items row narrive-cont">
              <div className="item studio col-lg-3 col-6 mb-3">
                  <a href="#" className="song-img m-0 d-block">
                      <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" width="100%" height="132px" />
                  </a>
                  <div className="products-caption text-center m-0">
                    <div className="star-rating">
                      <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                      <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                      <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                      <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                      <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
                    </div>
                    <span className="h6 d-block product-name fw-bold">Moja Moto</span>
                    <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
                  </div>
                  <span className="d-block text-center">
                    <button className="btn btn-outline-success btn-sm">Add to Cart</button>
                  </span>  
              </div>
              <div className="item merchandise col-lg-3 col-6 mb-3">
                <a href="#" className="song-img m-0 d-block">
                  <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" width="100%" height="132px" />
              </a>
              <div className="products-caption text-center m-0">
                <div className="star-rating">
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
                </div>
                <span className="h6 d-block product-name fw-bold">Moja Moto</span>
                <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
              </div>
              <span className="d-block text-center">
                <button className="btn btn-outline-success btn-sm">Add to Cart</button>
              </span>  
              </div>
              <div className="item utilities col-lg-3 col-6 mb-3">
                <a href="#" className="song-img m-0 d-block">
                  <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" width="100%" height="132px" />
              </a>
              <div className="products-caption text-center m-0">
                <div className="star-rating">
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
                </div>
                <span className="h6 d-block product-name fw-bold">Moja Moto</span>
                <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
              </div>
              <span className="d-block text-center">
                <button className="btn btn-outline-success btn-sm">Add to Cart</button>
              </span>  
              </div>
              <div className="item studio col-lg-3 col-6 mb-3">
                <a href="#" className="song-img m-0 d-block">
                  <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" width="100%" height="132px" />
              </a>
              <div className="products-caption text-center m-0">
                <div className="star-rating">
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
                </div>
                <span className="h6 d-block product-name fw-bold">Moja Moto</span>
                <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
              </div>
              <span className="d-block text-center">
                <button className="btn btn-outline-success btn-sm">Add to Cart</button>
              </span>  
              </div>
              <div className="item merchandise col-lg-3 col-6 mb-3">
                <a href="#" className="song-img m-0 d-block">
                  <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" width="100%" height="132px" />
              </a>
              <div className="products-caption text-center m-0">
                <div className="star-rating">
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
                </div>
                <span className="h6 d-block product-name fw-bold">Moja Moto</span>
                <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
              </div>
              <span className="d-block text-center">
                <button className="btn btn-outline-success btn-sm">Add to Cart</button>
              </span>  
              </div>
              <div className="item utilities col-lg-3 col-6 mb-3">
                <a href="#" className="song-img m-0 d-block">
                  <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" width="100%" height="132px" />
              </a>
              <div className="products-caption text-center m-0">
                <div className="star-rating">
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
                </div>
                <span className="h6 d-block product-name fw-bold">Moja Moto</span>
                <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
              </div>
              <span className="d-block text-center">
                <button className="btn btn-outline-success btn-sm">Add to Cart</button>
              </span>  
              </div>
              <div className="item studio col-lg-3 col-6 mb-3">
                <a href="#" className="song-img m-0 d-block">
                  <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" width="100%" height="132px" />
              </a>
              <div className="products-caption text-center m-0">
                <div className="star-rating">
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
                </div>
                <span className="h6 d-block product-name fw-bold">Moja Moto</span>
                <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
              </div>
              <span className="d-block text-center">
                <button className="btn btn-outline-success btn-sm">Add to Cart</button>
              </span>  
              </div>
              <div className="item merchandise col-lg-3 col-6 mb-3">
                <a href="#" className="song-img m-0 d-block">
                  <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" width="100%" height="132px" />
              </a>
              <div className="products-caption text-center m-0">
                <div className="star-rating">
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
                </div>
                <span className="h6 d-block product-name fw-bold">Moja Moto</span>
                <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
              </div>
              <span className="d-block text-center">
                <button className="btn btn-outline-success btn-sm">Add to Cart</button>
              </span>  
              </div>
              <div className="item utilities col-lg-3 col-6 mb-3">
                <a href="#" className="song-img m-0 d-block">
                  <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" width="100%" height="132px" />
              </a>
              <div className="products-caption text-center m-0">
                <div className="star-rating">
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
                </div>
                <span className="h6 d-block product-name fw-bold">Moja Moto</span>
                <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
              </div>
              <span className="d-block text-center">
                <button className="btn btn-outline-success btn-sm">Add to Cart</button>
              </span>  
          </div>
      </div>
    </div>
      {/* <!-- Filter section ends here --> */}
    </div>
    {/* <!-- filter section ends here --> */}

    {/* <!-- Featured Products beguns here --> */}
    <section className="store-featured-products" id="store-featured-products">
       {/* <!-- header --> */}
       <span className="h5 d-block text-center mt-5 mb-3 fw-bold">Featured <span style={{"color": "#007e37"}}>Products</span></span>
       {/* <!-- slider --> */}
       <OwlCarousel className='owl-theme' items={5} loop margin={10} autoplay ={true}>
         {/* <!-- featured itmes --> */}
         <div className="items">
           {/* <!-- img --> */}
           <a href="#">
             <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Name" height="171px" width="171px" />
           </a>
           {/* <!-- product caption --> */}
           <div className="products-caption text-center m-0">
            <div className="star-rating">
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
            </div>
            <span className="h6 d-block product-name fw-bold">Moja Moto</span>
            <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
          </div>
          <span className="d-block text-center">
            <button className="btn btn-outline-success btn-sm">Add to Cart</button>
          </span> 
         </div>
         {/* <!-- featured itmes --> */}
         <div className="items">
           {/* <!-- img --> */}
           <a href="#">
             <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Name" height="171px" width="171px" />
           </a>
           {/* <!-- product caption --> */}
           <div className="products-caption text-center m-0">
            <div className="star-rating">
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
            </div>
            <span className="h6 d-block product-name fw-bold">Moja Moto</span>
            <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
          </div>
          <span className="d-block text-center">
            <button className="btn btn-outline-success btn-sm">Add to Cart</button>
          </span> 
         </div>
         {/* <!-- featured itmes --> */}
         <div className="items">
           {/* <!-- img --> */}
           <a href="#">
             <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Name" height="171px" width="171px" />
           </a>
           {/* <!-- product caption --> */}
           <div className="products-caption text-center m-0">
            <div className="star-rating">
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
            </div>
            <span className="h6 d-block product-name fw-bold">Moja Moto</span>
            <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
          </div>
          <span className="d-block text-center">
            <button className="btn btn-outline-success btn-sm">Add to Cart</button>
          </span> 
         </div>
         {/* <!-- featured itmes --> */}
         <div className="items">
           {/* <!-- img --> */}
           <a href="#">
             <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Name" height="171px" width="171px" />
           </a>
           {/* <!-- product caption --> */}
           <div className="products-caption text-center m-0">
            <div className="star-rating">
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
            </div>
            <span className="h6 d-block product-name fw-bold">Moja Moto</span>
            <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
          </div>
          <span className="d-block text-center">
            <button className="btn btn-outline-success btn-sm">Add to Cart</button>
          </span> 
         </div>
         {/* <!-- featured itmes --> */}
         <div className="items">
           {/* <!-- img --> */}
           <a href="#">
             <img src="https://images.pexels.com/photos/5902850/pexels-photo-5902850.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Name" height="171px" width="171px"/>
           </a>
           {/* <!-- product caption --> */}
           <div className="products-caption text-center m-0">
            <div className="star-rating">
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
            </div>
            <span className="h6 d-block product-name fw-bold">Moja Moto</span>
            <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
          </div>
          <span className="d-block text-center">
            <button className="btn btn-outline-success btn-sm">Add to Cart</button>
          </span> 
         </div>
         {/* <!-- featured itmes --> */}
         <div className="items">
           {/* <!-- img --> */}
           <a href="#">
             <img src="https://images.pexels.com/photos/5902850/pexels-photo-5902850.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Name" height="171px" width="171px" />
           </a>
           {/* <!-- product caption --> */}
           <div className="products-caption text-center m-0">
            <div className="star-rating">
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
            </div>
            <span className="h6 d-block product-name fw-bold">Moja Moto</span>
            <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
          </div>
          <span className="d-block text-center">
            <button className="btn btn-outline-success btn-sm">Add to Cart</button>
          </span> 
         </div>
         {/* <!-- featured itmes --> */}
         <div className="items">
           {/* <!-- img --> */}
           <a href="#">
             <img src="https://images.pexels.com/photos/5902850/pexels-photo-5902850.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Name" height="171px" width="171px" />
           </a>
           {/* <!-- product caption --> */}
           <div className="products-caption text-center m-0">
            <div className="star-rating">
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
            </div>
            <span className="h6 d-block product-name fw-bold">Moja Moto</span>
            <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
          </div>
          <span className="d-block text-center">
            <button className="btn btn-outline-success btn-sm">Add to Cart</button>
          </span> 
         </div>
         {/* <!-- featured itmes --> */}
         <div className="items">
           {/* <!-- img --> */}
           <a href="#">
             <img src="https://images.pexels.com/photos/5902850/pexels-photo-5902850.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Name" height="171px" width="171px" />
           </a>
           {/* <!-- product caption --> */}
           <div className="products-caption text-center m-0">
            <div className="star-rating">
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
            </div>
            <span className="h6 d-block product-name fw-bold">Moja Moto</span>
            <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
          </div>
          <span className="d-block text-center">
            <button className="btn btn-outline-success btn-sm">Add to Cart</button>
          </span> 
         </div>
         {/* <!-- featured itmes --> */}
         <div className="items">
           {/* <!-- img --> */}
           <a href="#">
             <img src="https://images.pexels.com/photos/5902850/pexels-photo-5902850.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Name" height="171px" width="171px" />
           </a>
           {/* <!-- product caption --> */}
           <div className="products-caption text-center m-0">
            <div className="star-rating">
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
            </div>
            <span className="h6 d-block product-name fw-bold">Moja Moto</span>
            <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
          </div>
          <span className="d-block text-center">
            <button className="btn btn-outline-success btn-sm">Add to Cart</button>
          </span> 
         </div>
         {/* <!-- featured itmes --> */}
         <div className="items">
           {/* <!-- img --> */}
           <a href="#">
             <img src="https://images.pexels.com/photos/5902850/pexels-photo-5902850.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Name" height="171px" width="171px" />
           </a>
           {/* <!-- product caption --> */}
           <div className="products-caption text-center m-0">
            <div className="star-rating">
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
            </div>
            <span className="h6 d-block product-name fw-bold">Moja Moto</span>
            <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
          </div>
          <span className="d-block text-center">
            <button className="btn btn-outline-success btn-sm">Add to Cart</button>
          </span> 
         </div>
         {/* <!-- featured itmes --> */}
         <div className="items">
           {/* <!-- img --> */}
           <a href="#">
             <img src="https://images.pexels.com/photos/5902850/pexels-photo-5902850.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Name" height="171px" width="171px" />
           </a>
           {/* <!-- product caption --> */}
           <div className="products-caption text-center m-0">
            <div className="star-rating">
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
              <span className="me-1 str-icons"><i className="fa-solid fa-star-half"></i></span>
            </div>
            <span className="h6 d-block product-name fw-bold">Moja Moto</span>
            <span className="h6 d-block product-price text-uppercase">KSH 5500</span>
          </div>
          <span className="d-block text-center">
            <button className="btn btn-outline-success btn-sm">Add to Cart</button>
          </span> 
         </div>
         </OwlCarousel>
       
    </section>
    {/* <!-- Featured products ends here --> */}

    {/* <!-- Deals of the day bgeins here --> */}
    <section className="deals-of-day" id="deals-of-day">
      {/* <!-- header --> */}
      <span className="h5 d-block text-center mt-5 mb-4 fw-bold">Deals <span style={{"color": "#007e37"}}>of the day</span></span>
      {/* <!--slider --> */}




      <OwlCarousel className='owl-theme' items={2} loop margin={10} autoplay ={true}>
        {/* <!-- deals item --> */}
        <div className="item">
          <a href="#" className="text-decoration-none">
            <div className="row">
              {/* <!-- image --> */}
              <div className="col-6">
                <img src="https://images.pexels.com/photos/5519903/pexels-photo-5519903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="product name" height="240px" width="100%" />
              </div>
              {/* <!-- product caption --> */}
              <div className="col-6">
                {/* <!-- product name --> */}
                <span className="h6 fw-bold d-block text-start product-name text-dark">
                  Beats by Dre Headphones
                </span>
                {/* <!-- star rating --> */}
                <div className="star-rating mt-2">
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                  <span className="me-1 str-icons"><i className="fa-solid fa-star"></i></span>
                </div>
                {/* <!-- prices --> */}
                <div className="product-prices mt-3">
                  {/* <!-- line through price --> */}
                  <span className="f-price text-uppercase me-2 text-decoration">KSH 6500</span>
                  {/* <!-- Real price --> */}
                  <span className="n-price text-uppercase fw-bold">KSH 6200</span>
                </div>
                {/* <!-- Progress bar --> */}
                <span className="d-block text-start text-dark fw-bold mt-2">Available: <span className="available text-warning">15</span></span>
                <div className="progress" style={{"height": "21px"}}>
                  <div className="progress-bar" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <span className="remaining-amount">25</span>
                  </div>
                </div>
                {/* <!-- timer begins here --> */}
                <span className="text-dark fw-bold h6 d-block text-start mt-2">Offer ends in:</span>
                <div className="launch-time d-flex justify-content-between">
                  {/* <!-- days --> */}
                  <div>
                    <button className="btn btn-success btn-md" id="daysa" type="button">
                    {Boolean(timerComponents.length) ? timerComponents[0] : "00"}
                    </button>
                    <span>Days</span>
                  </div>
                  {/* <!-- hours --> */}
                  <div>
                    <button className="btn btn-success btn-md" id="hoursa" type="button">
                    {Boolean(timerComponents.length) ? timerComponents[1] : "00"}
                    </button>
                    <span>Hrs</span>
                  </div>
                  {/* <!-- minutes --> */}
                  <div>
                    <button className="btn btn-success btn-md" id="minutesa" type="button">
                    {Boolean(timerComponents.length) ? timerComponents[2] : "00"}
                    </button>
                    <span>Mins</span>
                  </div>
                  {/* <!-- seconds --> */}
                  <div>
                    <button className="btn btn-success btn-md" id="secondsa" type="button">
                    {Boolean(timerComponents.length) ? timerComponents[3] : "00"}
                    </button>
                    <span>Sec</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        </OwlCarousel>



    </section>
    {/* <!-- Deals of the day ends here --> */}
  </div>
  </main>
  //main section ends here 

  )
}

export default Store;