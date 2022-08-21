const Category = () => {
  return (
    <>
     {/* <!-- E-commerce category home section begins here --> */}
    <div class="container-fluid px-0" style={{"backgroundColor": "rgb(22, 22, 22)", "marginTop": "60px"}}>
        {/* <!-- Nav-link container --> */}
        <div class="d-flex justify-content-start py-3">
            {/* <!-- Home --> */}
            <a href="./commerce.html" class="px-2 text-white text-center">Home</a>
            &gt;
            {/* <!-- Category Name --> */}
            <a href="#" class="px-2 text-white text-center">Category Name</a>
        </div>

        {/* <!-- Banner lsit of sub-categories --> */}
        <div class="container-fluid py-2">
            {/* <!-- Row --> */}
            <div class="row">
                {/* <!-- Sub-category--> */}
                <div class="col-lg-2 col-3">
                    <a href="#">
                        {/* <!-- Category image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sub categort name" width="90px" height="60px" />

                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)"}}>
                            Sub category Name
                        </span>
                    </a>
                </div>

                {/* <!-- Sub-category--> */}
                <div class="col-lg-2 col-3">
                    <a href="#">
                        {/* <!-- Category image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sub categort name" width="90px" height="60px" />

                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)"}}>
                            Sub category Name
                        </span>
                    </a>
                </div>

                {/* <!-- Sub-category--> */}
                <div class="col-lg-2 col-3">
                    <a href="#">
                        {/* <!-- Category image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sub categort name" width="90px" height="60px" />

                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)"}}>
                            Sub category Name
                        </span>
                    </a>
                </div>

                {/* <!-- Sub-category--> */}
                <div class="col-lg-2 col-3">
                    <a href="#">
                        {/* <!-- Category image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sub categort name" width="90px" height="60px" />

                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)"}}>
                            Sub category Name
                        </span>
                    </a>
                </div>

                {/* <!-- Sub-category--> */}
                <div class="col-lg-2 col-3">
                    <a href="#">
                        {/* <!-- Category image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sub categort name" width="90px" height="60px" />

                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)"}}>
                            Sub category Name
                        </span>
                    </a>
                </div>

                {/* <!-- Sub-category--> */}
                <div class="col-lg-2 col-3">
                    <a href="#">
                        {/* <!-- Category image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sub categort name" width="90px" height="60px" />

                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)"}}>
                            Sub category Name
                        </span>
                    </a>
                </div>

               
            </div>
        </div>

        {/* <!-- top deal section begins here --> */}
        <div class="container-fluid bg-dark position-relative py-3 my-3">
            {/* <!-- heading container--> */}
            <div class="d-flex justify-content-between pb-0 mx-0" style={{"borderBottom": "1px solid rgb(168, 168, 168)"}}>
                {/* <!-- heading --> */}
                <span class="text-danger px-2 py-1 mb-0">
                    <span class="text-white" style={{"fontSize": "14px"}}>
                        TOP DEALS
                    </span>
                </span>

                {/* <!-- Filter --> */}
                <div class="d-flex justify-content-start align-items-center text-white px-2 pb-0 mb-0" style={{"border": "1px solid rgb(168, 168, 168)"}}>
                    {/* <!-- text  --> */}
                    <i class="fa fa-filter"></i>
                    {/* <!-- select --> */}
                    <select name="store-select" id="store-select" class="form-select bg-dark px-2 py-1 rounded-0 border-dark" aria-label="Default select example">
                        {/* <!-- options --> */}
                        <option selected>Popularity</option>
                        <option value="">Newest Arrivals</option>
                        <option value="">Price: Low to High</option>
                        <option value="">Price: High to Low</option>
                        <option value="">Product Rating</option>
                    </select>
                </div>
            </div>

            {/* <!-- items row --> */}
            <div class="row py-2">
                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="./productpage.html">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>
            </div>

            {/* <!-- Pagination --> */}
            <div class="container-flud mx-0 px-0 text-center py-3">
                <nav class="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a href="#" class="page-link" aria-label="Previous">
                                <span class="text-white" aria-hidden="true" style={{"fontSize": "14px"}}>&laquo;</span>
                            </a>
                        </li>

                        <li class="page-item active">
                            <a href="#" class="page-link text-white">1</a>
                        </li>
                        <li class="page-item">
                            <a href="#" class="page-link text-white">2</a>
                        </li>
                        <li class="page-item">
                            <a href="#" class="page-link text-white">3</a>
                        </li>

                        <li class="page-item">
                            <a href="#" class="page-link" aria-label="Previous">
                                <span class="text-white" aria-hidden="true" style={{"fontSize": "14px"}}>&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>


        </div>
        {/* <!-- top deal section ends here --> */}

        {/* <!-- recently viewed section begins here --> */}
        <div class="container-fluid position-relative py-3 my-3">
            {/* <!-- heading container--> */}
            <div class="d-flex justify-content-between pb-0 mx-0" style={{"borderBottom": "1px solid rgb(168, 168, 168)"}}>
                {/* <!-- heading --> */}
                <span class="text-danger px-2 py-1 mb-0" style={{"backgroundColor": "rgb(22, 22, 22)"}}>
                    <span class="text-white" style={{"fontSize": "14px"}}>
                        Recently Viewed
                    </span>
                </span>

                {/* <!-- See all --> */}
                <div class="d-flex justify-content-between align-items-center text-white px-2 pb-0 mb-0">
                    <a href="./recentlyviewedproducts.html" class="text-success" style={{"fontSize": "13px"}}>SEE ALL &gt; </a>
                </div>
            </div>

            {/* <!-- items row --> */}
            <div class="row py-2">
                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div class="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span class="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

                        {/* <!-- Rating --> */}
                        <div class="text-start">
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                            {/* <!-- starts --> */}
                            <span style={{"color": "gold", "fontSize": "13px"}}>
                                <i class="fas fa-star"></i>
                            </span>
                        </div>

                        {/* <!-- price --> */}
                        <span class="text-start text-white" style={{"fontSize": "15px", "fontWeight": "400"}}>
                            KSH 800
                        </span>

                        {/* <!-- price line through --> */}
                        <span class="text-start text-decoration-line-through" style={{"color": "rgb(168, 168, 168)", "fontSize": "13px", "fontWeight": "400"}}>
                            KSH 1200
                        </span>
                    </a>
                </div>
            </div>
        </div>
        {/* <!-- recently viewed section ends here --> */}
    </div>
    </>
  )
}
export default Category;