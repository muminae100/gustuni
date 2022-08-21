import { useState } from "react";
import pimg4 from "../assets/images/pimg4.jpg";

const Cart = () => {
    const [store, setStore] = useState(true);
    const [sounds, setSounds] = useState(false);
    const [soundPacks, setSoundPacks] = useState(false);

    const handleShowSoundPacks = () =>{
        setSoundPacks(true);
        setStore(false);
        setSounds(false);
    }

    const handleShowSounds = () =>{
        setSoundPacks(false);
        setStore(false);
        setSounds(true);
    }

    const handleShowStore = () =>{
        setSoundPacks(false);
        setStore(true);
        setSounds(false);
    }

  return (
    <>
       {/* <!-- E-commerce cart page section begins here --> */}
    <div className="container-fluid px-0" style={{"backgroundColor": "rgb(22, 22, 22)", "marginTop": "60px"}}>
        {/* <!-- continue shopping header --> */}
        <a href="#" className="text-start w-100 text-white d-block h6 pt-2 ps-1">
            <i className="fas fa-angle-left"></i>
            Continue shopping
        </a>

        {/* <!-- Heading --> */}
        <div className="container-fluid mx-0 px-0">
            {/* <!-- TAB NAVS --> */}
            <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">

                <li className="nav-item" role="presentation">
                    <span className={store? 'nav-link text-white active' : 'nav-link text-white'} style={{"backgroundColor": "rgb(22, 22, 22)"}} aria-selected="true" onClick={handleShowStore}>
                        Store(5)
                    </span>
                </li>

                <li className="nav-item" role="presentation">
                    <span className={`nav-link text-white ${sounds && 'active'}`} style={{"backgroundColor": "rgb(22, 22, 22)"}} aria-selected="false" onClick={handleShowSounds}>
                        Sounds & instrumentals(4)
                    </span>
                </li>

                <li className="nav-item" role="presentation">
                    <span className={`nav-link text-white ${soundPacks && 'active'}`} style={{"backgroundColor": "rgb(22, 22, 22)"}}   aria-selected="false" onClick={handleShowSoundPacks}>
                        Sound Packs(2)
                    </span>
                </li>
            </ul>

            {store && (
            <>
            {/* <!-- TABS CONTENT --> */}
            <div className="tab-content" >
                {/* <!-- For Store --> */}
                <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                    {/* <!-- heading --> */}
                    <span className="text-start text-white d-block">Store Cart</span>
                    <span className="text-start d-block" style={{"backgroundColor": "rgb(168, 168, 168)"}}>You have 2 items</span>

                    {/* <!-- row container for cart items --> */}
                    <div className="row p-2">
                        {/* <!-- col for cart items --> */}
                        <div className="col-lg-7 col-12">

                            {/* <!-- item --> */}
                            <div className="card bg-dark mb-2">

                                {/* <!-- row for the item --> */}
                                <div className="row p-1">
                                    {/* <!-- image container --> */}
                                    <div className="col-lg-5 col-4">
                                        {/* <!-- image --> */}
                                        <img src={pimg4} alt="User Name" width="100%" height="222px" />
                                    </div>

                                    {/* <!-- Item meta data container --> */}
                                    <div className="col-lg-7 col-8">
                                        {/* <!-- category name --> */}
                                        <span className="d-block text-start" style={{"color":"rgb(168, 168, 168)" ,"fontSize": "14px"}}>
                                            <i className="fas fa-tag me-1"></i>
                                            Category Name
                                        </span>

                                        {/* <!-- Product Name --> */}
                                        <span className="text-start text-white">
                                            Product Name
                                        </span>

                                        {/* <!-- Color --> */}
                                        <span className="d-block text-start" style={{"color":"rgb(168, 168, 168)" ,"fontSize": "14px"}}>
                                            Color: Green
                                        </span>

                                        {/* <!-- Color --> */}
                                        <span className="d-block text-start" style={{"color":"rgb(168, 168, 168)" ,"fontSize": "14px"}}>
                                            Size: M
                                        </span>

                                        {/* <!-- delete and like button --> */}
                                        <div className="d-flex justify-content-start py-2">
                                            {/* <!-- Delete --> */}
                                            <button className="btn btn-primary me-1 py-2 px-3" title="remove from cart">
                                                <i className="fas fa-trash"></i>
                                            </button>

                                            {/* <!-- Like --> */}
                                            <button className="btn btn-danger me-1 py-2 px-3" title="add to wishlist">
                                                <i className="fas fa-heart"></i>
                                            </button>
                                        </div>

                                        {/* <!-- Quantity --> */}
                                        <div className="d-flex mt-3 mb-1" style={{"width": "auto"}}>
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

                                        {/* <!-- Price text --> */}
                                        <p className="card-text text-start fw-strong p-2" style={{"color": "rgb(180, 180, 180)"}}>
                                            KSH

                                            {/* <!-- text --> */}
                                            <span style={{"fontSize": "14px"}}>
                                                2250
                                            </span>
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* <!-- item --> */}
                            <div className="card bg-dark mb-2">

                                {/* <!-- row for the item --> */}
                                <div className="row p-1">
                                    {/* <!-- image container  --> */}
                                    <div className="col-lg-5 col-4">
                                        {/* <!-- image --> */}
                                        <img src={pimg4} alt="User Name" width="100%" height="222px" />
                                    </div>

                                    {/* <!-- Item meta data container --> */}
                                    <div className="col-lg-7 col-8">
                                        {/* <!-- category name --> */}
                                        <span className="d-block text-start" style={{"color":"rgb(168, 168, 168)" ,"fontSize": "14px"}}>
                                            <i className="fas fa-tag me-1"></i>
                                            Category Name
                                        </span>

                                        {/* <!-- Product Name --> */}
                                        <span className="text-start text-white">
                                            Product Name
                                        </span>

                                        {/* <!-- Color --> */}
                                        <span className="d-block text-start" style={{"color":"rgb(168, 168, 168)" ,"fontSize": "14px"}}>
                                            Color: Green
                                        </span>

                                        {/* <!-- Color --> */}
                                        <span className="d-block text-start" style={{"color":"rgb(168, 168, 168)" ,"fontSize": "14px"}}>
                                            Size: M
                                        </span>

                                        {/* <!-- delete and like button --> */}
                                        <div className="d-flex justify-content-start py-2">
                                            {/* <!-- Delete --> */}
                                            <button className="btn btn-primary me-1 py-2 px-3" title="remove from cart">
                                                <i className="fas fa-trash"></i>
                                            </button>

                                            {/* <!-- Like --> */}
                                            <button className="btn btn-danger me-1 py-2 px-3" title="add to wishlist">
                                                <i className="fas fa-heart"></i>
                                            </button>
                                        </div>

                                        {/* <!-- Quantity --> */}
                                        <div className="d-flex mt-3 mb-1" style={{"width": "auto"}}>
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

                                        {/* <!-- Price text --> */}
                                        <p className="card-text text-start fw-strong p-2" style={{"color": "rgb(180, 180, 180)"}}>
                                            KSH

                                            {/* <!-- text --> */}
                                            <span style={{"fontSize": "14px"}}>
                                                2250
                                            </span>
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* <!-- Summary and go to cart --> */}
                        <div className="col-lg-5 col-12">
                            {/* <!-- heading --> */}
                            <span className="text-center d-block p-0 m-0 pb-2" style={{"color": "rgb(168, 168, 168)", "fontSize": "18px", "fontWeight": "400"}}>
                                Summary
                            </span>
                            <hr />

                            {/* <!-- summary body --> */}
                           <div className="py-1">
                                {/* <!-- For store --> */}
                                <div className="d-flex justify-content-between align-items-center pb-2 mb-3">
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>Store(2 items)</span>
    
                                    {/* <!-- Total --> */}
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>KSH 1200</span>
                                </div>

                                {/* <!-- For sounds --> */}
                                <div className="d-flex justify-content-between align-items-center pb-2 mb-3">
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>Sounds & instrumentals(2 items)</span>
    
                                    {/* <!-- Total --> */}
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>KSH 1200</span>
                                </div>

                                {/* <!-- For sound packs --> */}
                                <div className="d-flex justify-content-between align-items-center pb-2 mb-3">
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>Sound packs(2 items)</span>
    
                                    {/* <!-- Total --> */}
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>KSH 1200</span>
                                </div>

                                {/* <!-- For shipping --> */}
                                <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>Shipping</span>
    
                                    {/* <!-- Total --> */}
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>Gratis</span>
                                </div>
                           </div>
                           <hr />

                           {/* <!-- Total amount --> */}
                           <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>
                                    Total Amount
                                    <br />
                                    (including VAT)
                                </span>

                                {/* <!-- Total --> */}
                                <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>KSH 3600</span>
                            </div>

                            {/* <!-- Check out button --> */}
                            <a href="#" className="btn btn-block btn-primary text-uppercase my-2">Go to Checkout</a>
                        </div>
                    </div>
                </div>
                </div>

            </>
            )}

                {sounds && (
                <>
                {/* <!-- For Sounds --> */}
                <div>
                    {/* <!-- heading --> */}
                    <span className="text-start text-white d-block">Sounds Cart</span>
                    <span className="text-start d-block" style={{"backgroundColor": "rgb(168, 168, 168)"}}>You have 2 items</span>

                    {/* <!-- row container for cart items --> */}
                    <div className="row p-2">
                        {/* <!-- col for cart items --> */}
                        <div className="col-lg-7 col-12">

                            {/* <!-- item --> */}
                            <div className="card bg-dark mb-2">

                                {/* <!-- row for the item --> */}
                                <div className="row p-1">
                                    {/* <!-- image container --> */}
                                    <div className="col-lg-5 col-4">
                                        {/* <!-- image --> */}
                                        <img src={pimg4} alt="User Name" width="100%" height="222px" />
                                    </div>

                                    {/* <!-- Item meta data container --> */}
                                    <div className="col-lg-7 col-8">
                                        {/* <!-- category name --> */}
                                        <span className="d-block text-start" style={{"color":"rgb(168, 168, 168)" ,"fontSize": "14px"}}>
                                            <i className="fas fa-tag me-1"></i>
                                            Category Name
                                        </span>

                                        {/* <!-- Product Name --> */}
                                        <span className="text-start text-white">
                                            Sound Name
                                        </span>

                                        {/* <!-- delete and like button --> */}
                                        <div className="d-flex justify-content-start py-2">
                                            {/* <!-- Delete --> */}
                                            <button className="btn btn-primary me-1 py-2 px-3" title="remove from cart">
                                                <i className="fas fa-trash"></i>
                                            </button>

                                            {/* <!-- Like --> */}
                                            <button className="btn btn-danger me-1 py-2 px-3" title="add to wishlist">
                                                <i className="fas fa-heart"></i>
                                            </button>
                                        </div>

                                        {/* <!-- Quantity --> */}
                                        <div className="d-flex mt-3 mb-1" style={{"width": "auto"}}>
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

                                        {/* <!-- Price text --> */}
                                        <p className="card-text text-start fw-strong p-2" style={{"color": "rgb(180, 180, 180)"}}>
                                            KSH

                                            {/* <!-- text --> */}
                                            <span style={{"fontSize": "14px"}}>
                                                2250
                                            </span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                            
                        </div>

                        {/* <!-- Summary --> */}
                        <div className="col-lg-5 col-12">
                            {/* <!-- heading --> */}
                            <span className="text-center d-block p-0 m-0 pb-2" style={{"color": "rgb(168, 168, 168)", "fontSize": "18px", "fontWeight": "400"}}>
                                Summary
                            </span>
                            <hr />

                            {/* <!-- summary body --> */}
                           <div className="py-1">
                                {/* <!-- For store --> */}
                                <div className="d-flex justify-content-between align-items-center pb-2 mb-3">
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>Store(2 items)</span>
    
                                    {/* <!-- Total --> */}
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>KSH 1200</span>
                                </div>

                                {/* <!-- For sounds --> */}
                                <div className="d-flex justify-content-between align-items-center pb-2 mb-3">
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>Sounds & instrumentals(2 items)</span>
    
                                    {/* <!-- Total --> */}
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>KSH 1200</span>
                                </div>

                                {/* <!-- For sound packs --> */}
                                <div className="d-flex justify-content-between align-items-center pb-2 mb-3">
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>Sound packs(2 items)</span>
    
                                    {/* <!-- Total --> */}
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>KSH 1200</span>
                                </div>

                                {/* <!-- For shipping --> */}
                                <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>Shipping</span>
    
                                    {/* <!-- Total --> */}
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>Gratis</span>
                                </div>
                           </div>
                           <hr />

                           {/* <!-- Total amount --> */}
                           <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>
                                    Total Amount
                                    <br />
                                    (including VAT)
                                </span>

                                {/* <!-- Total --> */}
                                <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>KSH 3600</span>
                            </div>

                            {/* <!-- Check out button --> */}
                            <a href="#" className="btn btn-block btn-primary text-uppercase my-2">Go to Checkout</a>
                        </div>
                    </div>
                </div>
                </>
                )}

                {soundPacks && (
                <>
                {/* <!-- For Sounds --> */}
                <div>
                    {/* <!-- heading --> */}
                    <span className="text-start text-white d-block">Sound Pack Cart</span>
                    <span className="text-start d-block" style={{"backgroundColor": "rgb(168, 168, 168)"}}>You have 1 items</span>

                    {/* <!-- row container for cart items --> */}
                    <div className="row p-2">
                        {/* <!-- col for cart items --> */}
                        <div className="col-lg-7 col-12">

                            {/* <!-- item --> */}
                            <div className="card bg-dark mb-2">

                                {/* <!-- row for the item --> */}
                                <div className="row p-1">
                                    {/* <!-- image container --> */}
                                    <div className="col-lg-5 col-4">
                                        {/* <!-- image --> */}
                                        <img src={pimg4} alt="User Name" width="100%" height="222px" />
                                    </div>

                                    {/* <!-- Item meta data container --> */}
                                    <div className="col-lg-7 col-8">
                                        {/* <!-- category name --> */}
                                        <span className="d-block text-start" style={{"color":"rgb(168, 168, 168)" ,"fontSize": "14px"}}>
                                            <i className="fas fa-tag me-1"></i>
                                            Category Name
                                        </span>

                                        {/* <!-- Product Name --> */}
                                        <span className="text-start text-white">
                                            Pack Name
                                        </span>

                                        {/* <!-- delete and like button --> */}
                                        <div className="d-flex justify-content-start py-2">
                                            {/* <!-- Delete --> */}
                                            <button className="btn btn-primary me-1 py-2 px-3" title="remove from cart">
                                                <i className="fas fa-trash"></i>
                                            </button>

                                            {/* <!-- Like --> */}
                                            <button className="btn btn-danger me-1 py-2 px-3" title="add to wishlist">
                                                <i className="fas fa-heart"></i>
                                            </button>
                                        </div>

                                        {/* <!-- Quantity --> */}
                                        <div className="d-flex mt-3 mb-1" style={{"width": "auto"}}>
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

                                        {/* <!-- Price text --> */}
                                        <p className="card-text text-start fw-strong p-2" style={{"color": "rgb(180, 180, 180)"}}>
                                            KSH

                                            {/* <!-- text --> */}
                                            <span style={{"fontSize": "14px"}}>
                                                2250
                                            </span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                            
                        </div>

                        {/* <!-- Summary --> */}
                        <div className="col-lg-5 col-12">
                            {/* <!-- heading --> */}
                            <span className="text-center d-block p-0 m-0 pb-2" style={{"color": "rgb(168, 168, 168)", "fontSize": "18px", "fontWeight": "400"}}>
                                Summary
                            </span>
                            <hr />

                            {/* <!-- summary body --> */}
                           <div className="py-1">
                                {/* <!-- For store --> */}
                                <div className="d-flex justify-content-between align-items-center pb-2 mb-3">
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px", "fontWeight": "400"}}>Store(2 items)</span>
    
                                    {/* <!-- Total --> */}
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>KSH 1200</span>
                                </div>

                                {/* <!-- For sounds --> */}
                                <div className="d-flex justify-content-between align-items-center pb-2 mb-3">
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>Sounds & instrumentals(2 items)</span>
    
                                    {/* <!-- Total --> */}
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>KSH 1200</span>
                                </div>

                                {/* <!-- For sound packs --> */}
                                <div className="d-flex justify-content-between align-items-center pb-2 mb-3">
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>Sound packs(2 items)</span>
    
                                    {/* <!-- Total --> */}
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>KSH 1200</span>
                                </div>

                                {/* <!-- For shipping --> */}
                                <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>Shipping</span>
    
                                    {/* <!-- Total --> */}
                                    <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>Gratis</span>
                                </div>
                           </div>
                           <hr />

                           {/* <!-- Total amount --> */}
                           <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>
                                    Total Amount
                                    <br />
                                    (including VAT)
                                </span>

                                {/* <!-- Total --> */}
                                <span className="text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px" ,"fontWeight": "400"}}>KSH 3600</span>
                            </div>

                            {/* <!-- Check out button --> */}
                            <a href="#" className="btn btn-block btn-primary text-uppercase my-2">Go to Checkout</a>
                        </div>
                    </div>
                </div>
                </>
            )}

            </div>

    </div>
    {/* <!-- E-commerce cart page section ends here --> */}
    </>
  )
}

export default Cart;