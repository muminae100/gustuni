import pimg4 from "../assets/images/pimg4.jpg";

const Others = () => {
  return (
    <>
    {/* <!-- bundle section begins here --> */}
    <div class="container-fluid px-0 bg-dark" style={{"marginTop": "60px"}}>

        {/* <!-- Banner section begins here --> */}
        <div class="container-fluid m-0 p-0 position-relative bg-dark" style={{"height": "auto"}}>
            {/* <!-- image and details row --> */}
            <div class="row mx-0 py-4 px-0">
                {/* <!-- image container --> */}
                <div class="col-lg-6 col-12 position-relative d-flex align-items-center">
                    {/* <!-- image --> */}
                    <img src={pimg4} alt="#" width="300px" height="300px" class="#" />
                </div>

                {/* <!-- details container --> */}
                <div class="col-lg-6 col-12 position-relative">
                    {/* <!-- Bundle Name --> */}
                    <span class="h5 d-block text-start text-white">Bundle Name</span>
                    {/* <!-- Bundle price --> */}
                    <span class="h6 d-block text-white text-start">KSH 3500</span>
                    
                    {/* <!-- angle down --> */}
                    <a href="#overview" class="text-white d-block text-center">
                        <i class="fas fa-angle-down"></i>
                    </a>

                    {/* <!-- product list container --> */}
                    <ul class="text-white ms-0 ps-0 mt-5">
                        <li class="ms-0 ps-0 d-flex justify-content-between" style={{"listStyleType": "none"}}>
                            {/* <!-- Pack Name --> */}
                            <span class="h6 text-start">Pack Name</span>

                            {/* <!-- Price --> */}
                            <span class="h6 text-start">KSH 2500</span>
                        </li>
                        
                    </ul>
                    <hr />

                    {/* <!-- Total value & Discount price --> */}
                    <ul class="text-white ms-0 ps-0 mt-3">
                        <li class="ms-0 ps-0 d-flex justify-content-between" style={{"listStyleType": "none"}}>
                            {/* <!-- Total value --> */}
                            <span class="h6 text-start text-uppercase">Total value</span>

                            {/* <!-- Price --> */}
                            <span class="h6 text-start text-decoration-line-through">KSH 2500</span>
                        </li>
                        <li class="ms-0 ps-0 d-flex justify-content-between text-danger" style={{"listStyleType": "none"}}>
                            {/* <!-- Discount price --> */}
                            <span class="h6 text-start text-uppercase">Discount price</span>

                            {/* <!-- Price --> */}
                            <span class="h6 text-start">KSH 1700</span>
                        </li>
                    </ul>
                    <hr />

                </div>
            </div>

            {/* <!-- special-price and add to cart row --> */}
            <div class="row mx-0 px-0 py-3">
                {/* <!-- Prices --> */}
                <span class="d-block h6 text-white text-center">
                    {/* <!-- total price --> */}
                    <span class="text-decoration-line-through">KSH 4200</span>

                    {/* <!-- discounted price --> */}
                    <span class="ms-2 text-danger">KSH 3500</span>
                </span>

                {/* <!-- Special Prices --> */}
                <span class="d-block h6 text-white text-center text-uppercase">
                    Special Price
                </span>

                {/* <!-- add to cart --> */}
                <span class="d-block text-center my-3">
                    <button class="btn btn-success btn-sm" style={{"width": "150px"}}>
                        <i class="fas fa-shopping-cart"></i>
                        <span class="ms-1 text-uppercase">Add to cart</span>
                    </button>
                </span>
            </div>
            
        </div>
        {/* <!-- Banner section ends here --> */}

        {/* <!-- overview section begins here --> */}
        <div class="container-fluid m-0 px-0 py-3 position-relative bg-dark" id="overview">
            {/* <!-- heading --> */}
            <span class="d-block d-flex justify-content-center">
                <span class="text-white h5 text-center py-3" style={{"width":"210px", "borderTop": "1px solid rgb(159, 157, 157)"}}>
                    Overview
                </span>
            </span>

            {/* <!-- overview item --> */}
            <div class="row mx-0 px-0">
                {/* <!-- image --> */}
                <div class="col-lg-6 col-12">
                    <img src={pimg4} alt="#" width="240px" height="240px" class="#" />
                </div>

                {/* <!-- details container --> */}
                <div class="col-lg-6 col-12">
                    {/* <!-- overall container --> */}
                    <div class="container-fluid mx-0 px-0 my-0 py-0" style={{"backgroundColor": "#525252"}}>
                        {/* <!-- white strip --> */}
                        <span class="d-block m-0 p-0 bg-light" style={{"height": "2px", "maxWidth": "100%"}}></span>
                        {/* <!-- header --> */}
                        <span class="d-block py-3 text-white row text-center text-sm-center">
                            {/* <!-- Pack Name --> */}
                            <span class="h6">
                                Pack Name
                            </span>

                            {/* <!-- value price --> */}
                            <span class="h6 d-block text-warning text-uppercase" style={{"fontSize": "14px"}}>
                                KSH 1700 value
                            </span>
                        </span>

                        {/* <!-- white strip --> */}
                        <span class="d-block m-0 ms-2 px-0 bg-light" style={{"height": ".5px", "maxWidth": "6%", "backgroundColor": "#d8d8d8"}}></span>

                        {/* <!-- Description --> */}
                        <p class="ms-2 py-3" style={{"color": "#ccc", "fontSize": "13px", "maxHeight": "180px"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum dolores perferendis qui pariatur voluptates, porro temporibus, corporis vero culpa consectetur magnam optio doloremque.
                        </p>

                        {/* <!-- container for wavesurfer --> */}
                        <div id="waveform"></div>
                        
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- overview section ends here --> */}

        {/* <!-- Free bonus pack scetion begins here --> */}
        <div class="container-fluid m-0 px-0 bg-dark">
            {/* <!-- heading --> */}
            <span class="d-block d-flex mb-0 pb-0 justify-content-center">
                <span class="text-white h5 d-block text-center mb-0 pt-3 px-5" style={{"borderTop": "1px solid rgb(159, 157, 157)"}}>
                    Free bonus pack: Pack Name
                </span>
            </span>

            <span class="text-center d-block py-3" style={{"color": "rgb(180, 180, 180)"}}>
                This bonus are ONLY valid with your copy of Pack Name
            </span>

            {/* <!-- overview item --> */}
            <div class="row mx-0 px-0">
                {/* <!-- image --> */}
                <div class="col-lg-6 col-12">
                    <img src={pimg4} alt="#" width="240px" height="240px" class="#" />
                </div>

                {/* <!-- details container --> */}
                <div class="col-lg-6 col-12">
                    {/* <!-- overall container --> */}
                    <div class="container-fluid mx-0 px-0 my-0 py-0" style={{"backgroundColor": "#525252"}}>
                        {/* <!-- white strip --> */}
                        <span class="d-block m-0 p-0 bg-light" style={{"height": "2px", "maxWidth": "100%"}}></span>
                        {/* <!-- header --> */}
                        <span class="d-block py-3 text-white row text-center text-sm-center">
                            {/* <!-- Bonus --> */}
                            <span class="h6 d-block text-end px-3 text-warning">
                                BONUS
                            </span>

                            {/* <!-- Pack Name --> */}
                            <span class="h6">
                                Pack Name
                            </span>

                            {/* <!-- value price --> */}
                            <span class="h6 d-block text-warning text-uppercase" style={{"fontSize": "14px"}}>
                                KSH 1700 value
                            </span>
                        </span>

                        {/* <!-- white strip --> */}
                        <span class="d-block m-0 ms-2 px-0 bg-light" style={{"height": ".5px", "maxWidth": "6%", "backgroundColor": "#d8d8d8"}}></span>

                        {/* <!-- Description --> */}
                        <p class="ms-2 py-3" style={{"color": "#ccc", "fontSize": "13px", "maxHeight": "180px"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum dolores perferendis qui pariatur voluptates, porro temporibus, corporis vero culpa consectetur magnam optio doloremque.
                        </p>

                        {/* <!-- container for wavesurfer --> */}
                        <div id="waveform"></div>
                        
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Free bonus pack section ends here --> */}

    </div>
    {/* <!-- bundle section ends here --> */}
    </>
  )
}

export default Others;