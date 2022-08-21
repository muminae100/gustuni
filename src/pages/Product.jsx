import pimg4 from "../assets/images/pimg4.jpg";

import { useState } from "react";

const Product = () => {
  const [desc, setDesc] = useState(true);
  const [details, setDetails] = useState(false);
  const [reviews, setReviews] = useState(false);

  const handleShowDesc = () =>{
    setDesc(true);
    setDetails(false);
    setReviews(false);
  }

  const handleShowDetails = () =>{
    setDesc(false);
    setDetails(true);
    setReviews(false);
  }

  const handleShowReviews = () =>{
    setDesc(false);
    setDetails(false);
    setReviews(true);
  }

  return (
    <>    
    {/* <!-- E-commerce product page home section begins here --> */}
    <div className="container-fluid px-0" style={{"backgroundColor": "rgb(22, 22, 22)"}}>
        {/* <!-- Nav-link container --> */}
        <div className="d-flex justify-content-start py-3">
            {/* <!-- Home --> */}
            <a href="./commerce.html" className="px-2 text-white text-center">Home</a>
            &gt;
            {/* <!-- Category Name --> */}
            <a href="#" className="px-2 text-white text-center">Category Name</a>
        </div>

        {/* <!-- Product main container row --> */}
        <div className="row px-2 py-3">
            {/* <!-- image and image sprites --> */}
            <div className="col-lg-3 col-12 ecommerce-gallery" datamdb-zoom-effect="true" data-mdb-auto-height="true">
                {/* <!-- Main image --> */}
                <div className="lightbox">
                    <img src={pimg4} alt="Product Name" width="100%" height="288px" className="ecommerce-gallery-main-img active" data-mdb-img={pimg4} />
                </div>

                <div className="row py-2">
                    {/* <!-- sprite item --> */}
                    <div className="col-3 mt-1">
                        <img src={pimg4} alt="Product Name" width="50px" height="60px" data-mdb-img={pimg4} />
                    </div>

                    {/* <!-- sprite item --> */}
                    <div className="col-3 mt-1">
                        <img src={pimg4} alt="Product Name" width="50px" height="60px" data-mdb-img={pimg4} />
                    </div>

                    {/* <!-- sprite item --> */}
                    <div className="col-3 mt-1">
                        <img src={pimg4} alt="Product Name" width="50px" height="60px" data-mdb-img={pimg4} />
                    </div>

                    {/* <!-- sprite item --> */}
                    <div className="col-3 mt-1">
                        <img src={pimg4} alt="Product Name" width="50px" height="60px" data-mdb-img={pimg4} />
                    </div>
                </div>
            </div>

            {/* <!-- Product metadata --> */}
            <div className="col-lg-9 col-12">
                {/* <!-- product NAme --> */}
                <span className="h6 d-block text-start fw-bold" style={{"color": "rgb(168, 168, 168)"}}>Product Name</span>

                {/* <!-- Sub category --> */}
                <span className="d-block text-start text-white" style={{"font-size": "13px"}}>Sub category</span>

                {/* <!-- Rating --> */}
                <div className="text-start">
                    {/* <!-- starts --> */}
                    <span style={{"color": "gold", "fontSize": "13px"}}>
                        <i className="fas fa-star"></i>
                    </span>
                    {/* <!-- starts --> */}
                    <span style={{"color": "gold", "fontSize": "13px"}}>
                        <i className="fas fa-star"></i>
                    </span>
                    {/* <!-- starts --> */}
                    <span style={{"color": "gold", "fontSize": "13px"}}>
                        <i className="fas fa-star"></i>
                    </span>
                    {/* <!-- starts --> */}
                    <span style={{"color": "gold", "fontSize": "13px"}}>
                        <i className="fas fa-star"></i>
                    </span>
                    {/* <!-- starts --> */}
                    <span style={{"color": "gold", "fontSize": "13px"}}>
                        <i className="fas fa-star"></i>
                    </span>
                </div>

                {/* <!-- price --> */}
                <span className="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                    KSH 800
                </span>

                {/* <!-- price line through --> */}
                <span className="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                    KSH 1200
                </span>

                {/* <!-- % discount --> */}
                <span className="text-start text-danger ps-3" style={{"font-size": "13px"}}>-33%</span>

                {/* <!-- brief description --> */}
                <p className="w-lg-50 w-75 text-white py-2" style={{"fontSize": "13px", "fontWeight": "400"}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nulla optio quos! Quibusdam, delectus veniam.
                </p>

                {/* <!-- color and size row --> */}
                <div className="row">
                    {/* <!-- Select color --> */}
                <div className="col-lg-4 col-12 py-1">
                    {/* <!-- header --> */}
                    <span className="text-start text-white d-block" style={{"fontSize": "14px", "fontWeight": "400"}}>Color</span>
                    {/* <!-- color-item --> */}
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="color" id="color" value="option1" style={{"font-size": "13px"}} />
                        <label for="color" className="form-check-label text-white" style={{"fontWeight": "300", "fontSize": "13px"}}>Red</label>
                    </div>

                    {/* <!-- color-item --> */}
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="color" id="color" value="option1" />
                        <label for="color" className="form-check-label text-white" style={{"fontWeight": "300", "fontSize": "13px"}}>Green</label>
                    </div>

                    {/* <!-- color-item --> */}
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="color" id="color" value="option1" />
                        <label for="color" className="form-check-label text-white" style={{"fontWeight": "300", "fontSize": "13px"}}>Blue</label>
                    </div>
                </div>

                {/* <!-- Select size --> */}
                <div className="col-lg-8 col-12 py-1">
                    {/* <!-- header --> */}
                    <span className="text-start text-white d-block" style={{"fontSize": "14px", "fontWeight": "400"}}>Size</span>
                    {/* <!-- size-item --> */}
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="size" id="size" value="option1" />
                        <label for="size" className="form-check-label text-uppercase text-white" style={{"fontWeight": "300", "fontSize": "13px"}}>S</label>
                    </div>

                    {/* <!-- size-item --> */}
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="size" id="size" value="option1" />
                        <label for="size" className="form-check-label text-uppercase text-white" style={{"fontWeight": "300", "fontSize": "13px"}}>M</label>
                    </div>

                    {/* <!-- size-item --> */}
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="size" id="size" value="option1" />
                        <label for="size" className="form-check-label text-uppercase text-white" style={{"fontWeight": "300", "fontSize": "13px"}}>L</label>
                    </div>
                </div>
                </div>



                {/* <!-- Quantity --> */}
                <div className="d-flex mt-3 mb-4" style={{"width": "300px"}}>
                    <button className="btn btn-sm btn-primary px-3 me-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i className="fas fa-minus"></i>
                    </button>

                    <div className="form-outline">
                        <input type="number" id="form1" min="0" name="quantity" value="1" className="form-control text-white" />
                        <label for="form1" className="form-label" style={{"color": "rgb(168, 168, 168)"}}>Quantity</label>
                    </div>

                    <button className="btn btn-sm btn-primary px-3 ms-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>

                {/* <!-- Buy now and add to cart button --> */}
                <div className="d-flex justify-content-start">
                    {/* <!-- Buy Now --> */}
                    <a href="#" className="btn btn-primary me-1 btn-md" style={{"fontSize": "14px"}}>BUY NOW</a>

                    {/* <!-- add to cart --> */}
                    <button className="btn btn-success mx-1 btn-md" style={{"fontSize": "14px"}} type="button">
                        <i className="fas fa-shopping-cart"></i>
                        ADD TO CART
                    </button>
                </div>
            </div>
            
        </div>

        {/* <!-- product description, details and reviews container --> */}
        <div className="container-fluid mx-0 px-0" style={{"borderTop": "1px solid rgb(168, 168, 168)"}}>
            {/* <!-- TAB NAVS --> */}
            <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">

                <li className="nav-item" role="presentation">
                    <span className={`nav-link text-white ${desc && "active"}`} style={{"backgroundColor": "rgb(22, 22, 22)"}} onclick={handleShowDesc}>
                        Description
                    </span>
                </li>

                <li className="nav-item" role="presentation">
                    <span className={`nav-link text-white ${details && "active"}`} style={{"backgroundColor": "rgb(22, 22, 22)"}} onClick={handleShowDetails}>
                        Details
                    </span>
                </li>

                <li className="nav-item" role="presentation">
                    <span className={`nav-link text-white ${reviews && "active"}`} style={{"backgroundColor": "rgb(22, 22, 22)"}} onClick={handleShowReviews}>
                        Reviews(2)
                    </span>
                </li>
            </ul>

            {/* <!-- TABS CONTENT --> */}
            <div className="tab-content" id="ex1-content">
                {/* <!-- For description --> */}
                {desc && (
                <>
                <div className="tab-pane fade show active">
                    Description here
                </div>
                </>
                )}

                {/* <!-- For details --> */}
                {details && (
                  <>
                <div className="tab-pane fade show active">
                    Details Here
                </div>
                  </>
                )}

                {/* <!-- For reviews --> */}
                {reviews && (
                <>
                <div className="tab-pane fade show active">
                    {/* <!-- heading --> */}
                    <span className="text-center d-block h6 py-3" style={{"color": "rgb(168, 168, 168)"}}>
                        2 Reviews for Product Name
                    </span>

                    {/* <!-- row container for the reviews and form review --> */}
                    <div className="row p-2">
                        {/* <!-- col for reviews --> */}
                        <div className="col-lg-6 col-12">
                            {/* <!-- Review --> */}
                            <div className="card bg-dark mb-2">
                                {/* <!-- image --> */}
                                <span className="d-block text-center d-flex justify-content-center align-items-center pt-3 pb-2">
                                    <img src={pimg4} alt="User Name" width="60px" height="60px" className="rounded-circle" />
                                </span>

                                {/* <!-- username --> */}
                                <span className="d-block text-center" style={{"color":"rgb(168, 168, 168)"}}>
                                    User Name
                                </span>

                                {/* <!-- rating --> */}
                                <div className="text-center">
                                    {/* <!-- starts --> */}
                                    <span style={{"color": "gold", "fontSize": "13px"}}>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    {/* <!-- starts --> */}
                                    <span style={{"color": "gold", "fontSize": "13px"}}>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    {/* <!-- starts --> */}
                                    <span style={{"color": "gold", "fontSize": "13px"}}>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    {/* <!-- starts --> */}
                                    <span style={{"color": "gold", "fontSize": "13px"}}>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    {/* <!-- starts --> */}
                                    <span style={{"color": "gold", "fontSize": "13px"}}>
                                        <i className="fas fa-star"></i>
                                    </span>
                                </div>

                                {/* <!-- review text --> */}
                                <p className="card-text text-start text-white p-2">
                                    {/* <!-- ICON --> */}
                                    <i className="fas fa-quote-left"></i>

                                    {/* <!-- text --> */}
                                    <span style={{"fontSize": "14px"}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus optio at quas tempore eius.
                                    </span>
                                </p>
                            </div>

                            {/* <!-- Review --> */}
                            <div className="card bg-dark mb-2">
                                {/* <!-- image --> */}
                                <span className="d-block text-center d-flex justify-content-center align-items-center pt-3 pb-2">
                                    <img src={pimg4} alt="User Name" width="60px" height="60px" className="rounded-circle" />
                                </span>

                                {/* <!-- username --> */}
                                <span className="d-block text-center" style={{"color":"rgb(168, 168, 168)"}}>
                                    User Name
                                </span>

                                {/* <!-- rating --> */}
                                <div className="text-center">
                                    {/* <!-- starts --> */}
                                    <span style={{"color": "gold", "fontSize": "13px"}}>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    {/* <!-- starts --> */}
                                    <span style={{"color": "gold", "fontSize": "13px"}}>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    {/* <!-- starts --> */}
                                    <span style={{"color": "gold", "fontSize": "13px"}}>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    {/* <!-- starts --> */}
                                    <span style={{"color": "gold", "fontSize": "13px"}}>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    {/* <!-- starts --> */}
                                    <span style={{"color": "gold", "fontSize": "13px"}}>
                                        <i className="fas fa-star"></i>
                                    </span>
                                </div>

                                {/* <!-- review text --> */}
                                <p className="card-text text-start text-white p-2">
                                    {/* <!-- ICON --> */}
                                    <i className="fas fa-quote-left"></i>

                                    {/* <!-- text --> */}
                                    <span style={{"fontSize": "14px"}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus optio at quas tempore eius.
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* <!-- Post Review --> */}
                        <div className="col-lg-6 col-12">
                            {/* <!-- heading --> */}
                            <span className="text-center d-block p-0 m-0 pb-2" style={{"color": "rgb(168, 168, 168)" ,"fontSize": "14px", "fontWeight": "400"}}>
                                Rate this product
                            </span>

                            {/* <!-- rating --> */}
                            <div className="text-center pb-2">
                                {/* <!-- starts --> */}
                                <span style={{"color": "rgb(168, 168, 168)","fontSize": "13px"}} onmouseover="this.style.color='gold'">
                                    <i className="fas fa-star"></i>
                                </span>
                                {/* <!-- starts --> */}
                                <span style={{"color": "rgb(168, 168, 168)","fontSize": "13px"}} onmouseover="this.style.color='gold'">
                                    <i className="fas fa-star"></i>
                                </span>
                                {/* <!-- starts --> */}
                                <span style={{"color": "rgb(168, 168, 168)","fontSize": "13px"}} onmouseover="this.style.color='gold'">
                                    <i className="fas fa-star"></i>
                                </span>
                                {/* <!-- starts --> */}
                                <span style={{"color": "rgb(168, 168, 168)","fontSize": "13px"}} onmouseover="this.style.color='gold'">
                                    <i className="fas fa-star"></i>
                                </span>
                                {/* <!-- starts --> */}
                                <span style={{"color": "rgb(168, 168, 168)","fontSize": "13px"}} onmouseover="this.style.color='gold'">
                                    <i className="fas fa-star"></i>
                                </span>
                            </div>

                            {/* <!-- form begins here --> */}
                            <form action="#" method="post">
                                {/* <!-- Name input --> */}
                                <div className="form-outline mb-4">
                                    <input type="text" className="form-control" id="formExample1" style={{"color":"rgb(168, 168, 168)"}} />
                                    <label for="formExample1" className="form-label" style={{"color":"rgb(168, 168, 168)"}}>Name</label>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <input type="email" className="form-control" id="formExample1" style={{"color":"rgb(168, 168, 168)"}} />
                                    <label for="formExample1" className="form-label" style={{"color":"rgb(168, 168, 168)"}}>E-mail</label>
                                </div>

                                {/* <!-- Review input --> */}
                                <div className="form-outline mb-4">
                                    <textarea name="form4Example3" id="form4Example3" rows="4" className="form-control" style={{"color":"rgb(168, 168, 168)"}}></textarea>
                                    <label for="form4Example3" className="form-label" style={{"color":"rgb(168, 168, 168)"}}>Review</label>
                                </div>

                                {/* <!-- Submit button --> */}
                                <button className="btn btn-success btn-block mb-4" type="submit">Submit</button>
                            </form>
                            {/* <!-- form ends here --> */}
                        </div>
                    </div>
                </div>
                </>
              )}
            </div>


        </div>
        
    </div>
    {/* <!-- E-commerce product page home section ends here --> */}

    </>
  )
}

export default Product;