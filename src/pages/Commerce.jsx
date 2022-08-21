import pimg4 from "../assets/images/pimg4.jpg";

const Commerce = () => {
  return (
    <div>
         {/* <!-- E-commerce home section begins here --> */}
    <div className="container-fluid px-0" style={{"backgroundColor": "rgb(22, 22, 22)", "marginTop": "70px"}}>
        {/* <!-- banner section begins here --> */}
        <div className="container-fluid position-relative bg-dark">
            {/* <!-- row --> */}
            <div className="row py-3 position-relative">
                {/* <!-- column for banner image --> */}
                <div className="col-lg-8 col-12 position-relative">
                    <a href="#" className="position-relative">
                        <img src={pimg4} alt="Gustuni product" height="316px" width="100%" />
                    </a>

                    {/* <!-- Shop now button --> */}
                    <a href="#" className="btn btn-outline-white position-absolute" style={{"width": "150px", "bottom": "12%","left": "7%"}}>Shop Now</a>
                </div>

                {/* <!-- column for side promos --> */}
                <div className="col-lg-4 col-12 d-sm-none d-md-block">
                    {/* <!-- item --> */}
                    <div className="container-fluid mx-0 px-0 bg-dark">
                        <a href="#">
                            {/* <!-- image --> */}
                            <img src={pimg4} alt="Gustuni product" width="100%" height="150px" />
                        </a>
                    </div>

                    {/* <!-- item --> */}
                    <div className="container-fluid my-3 mx-0 px-0 bg-dark">
                        <a href="#">
                            {/* <!-- image --> */}
                            <img src={pimg4} alt="Gustuni product" width="100%" height="150px" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- banner section ends here --> */}

        {/* <!-- Category section begins here --> */}
        <div className="container-fluid position-relative py-3">
            {/* <!-- Heading --> */}
            <span className="text-white text-center d-block h6">Popular Categories</span>
            <div className="d-flex justify-content-center">
                <span className="h6 text-center d-block" style={{"width": "210px", "height": "0.5px", "borderBottom": "1px solid rgb(168, 168, 168)"}}></span>
            </div>
            {/* <!-- row --> */}
            <div className="row py-3 position-relative">
                {/* <!-- item --> */}
                <div className="col-lg-3 col-6 position-relative">
                    <a href="./categories.html" className="position-relative" style={{"zIndex": 1}}>
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni category name" width="150px" height="150px" className="rounded-circle position-relative d-block" />
                        {/* <!-- banner head --> */}
                        <span className="d-block text-warning px-5 py-2 text-start">
                            Studio
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div className="col-lg-3 col-6 position-relative">
                    <a href="#" className="position-relative" style={{"zIndex": 1}}>
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni category name" width="150px" height="150px" className="rounded-circle position-relative d-block" />
                        {/* <!-- banner head --> */}
                        <span className="d-block text-warning px-5 py-2 text-start">
                            Artist Merchandise
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div className="col-lg-3 col-6 position-relative">
                    <a href="#" className="position-relative" style={{"zIndex": 1}}>
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni category name" width="150px" height="150px" className="rounded-circle position-relative d-block" />
                        {/* <!-- banner head --> */}
                        <span className="d-block text-warning px-5 py-2 text-start">
                            Music Instruments
                        </span>
                    </a>
                </div>

                {/* <!-- item --> */}
                <div className="col-lg-3 col-6 mb-2">
                    <a href="#" className="position-relative" style={{"zIndex": 1}}>
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni category name" width="150px" height="150px" className="rounded-circle position-relative d-block" />
                        {/* <!-- banner head --> */}
                        <span className="d-block text-warning px-5 py-2 text-start">
                            Electronics
                        </span>
                    </a>
                </div>
            </div>
        </div>
        {/* <!-- Category Section ends here --> */}

        {/* <!-- hot deal section begins here --> */}
        <div className="container-fluid bg-dark position-relative py-3 my-3">
            {/* <!-- heading container--> */}
            <div className="d-flex justify-content-between pb-0 mx-0" style={{"borderBottom": "1px solid rgb(168, 168, 168)"}}>
                {/* <!-- heading --> */}
                <span className="text-danger px-2 py-1 mb-0" style={{"backgroundColor": "rgb(22, 22, 22)"}}>
                    <i className="fas fa-fire"></i>
                    <span className="text-white" style={{"fontSize": "14px"}}>
                        HOT DEALS
                    </span>
                </span>

                {/* <!-- Time --> */}
                <div className="d-flex justify-content-between align-items-center text-white px-2 pb-0 mb-0" style={{"border": "1px solid rgb(168, 168, 168)"}}>
                    {/* <!-- clock --> */}
                    <i className="fa fa-clock me-1"></i>
                    |

                    {/* <!-- Days --> */}
                    <span className="ps-2 pe-1" style={{"fontSize": "14px"}}>
                        3D
                    </span>
                    :
                    {/* <!-- minutes --> */}
                    <span className="px-1" style={{"fontSize": "14px"}}>
                        22M
                    </span>
                    :
                    {/* <!-- seconds --> */}
                    <span className="px-1" style={{"fontSize": "14px"}}>
                        45 S
                    </span>
                </div>
            </div>

            {/* <!-- items row --> */}
            <div className="row py-2">
                {/* <!-- item --> */}
                <div className="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span className="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

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
                    </a>
                </div>

                {/* <!-- item --> */}
                <div className="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span className="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

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
                    </a>
                </div>

                {/* <!-- item --> */}
                <div className="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span className="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

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
                    </a>
                </div>

                {/* <!-- item --> */}
                <div className="col-lg-3 col-6 my-2">
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span className="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

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
                    </a>
                </div>
            </div>
        </div>
        {/* <!-- Hot deal section ends here --> */}

        {/* <!-- Trending items begins here --> */}
        <div className="container-fluid">
            {/* <!-- heading container--> */}
            <div className="d-flex justify-content-between pb-0 mx-0" style={{"borderBottom": "1px solid rgb(168, 168, 168)"}}>
                {/* <!-- heading --> */}
                <span className="text-danger px-2 py-1 mb-0" style={{"backgroundColor": "rgb(22, 22, 22)"}}>
                    <i className="fas fa-fire"></i>
                    <span className="text-white" style={{"fontSize": "14px"}}>
                        Trending
                    </span>
                </span>

                {/* <!-- Filter --> */}
                <div className="d-flex justify-content-between align-items-center text-white px-2 pb-0 mb-0">
                    {/* <!-- fILTER --> */}
                    <div className="d-flex justify-content-between align-items-center text-white px-2 pb-0 mb-0">
                        <div className="filter-menu n-arrival m-0 p-0">
                            <ul className="m-0 p-0">
                                <li className="active mx-1 text-start py-1 px-3 mb-3" data-filter="*">All</li>
                                <li className="mx-1 mb-3 text-start py-1 px-3" data-filter=".studio">Studio</li>
                                <li className="mx-1 mb-3 text-start py-1 px-3" data-filter=".merch">Merchandise</li>
                                <li className="mx-1 mb-3 text-start py-1 px-3" data-filter=".inst">Instruments</li>
                                <li className="mx-1 mb-3 text-start py-1 px-3" data-filter=".elec">Electronics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- row for items --> */}
            <div className="filter-items row narrive-cont">

                {/* <!-- items --> */}
                <div className="item studio col-lg-3 col-6 my-2">
                    {/* <!-- link here --> */}
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span className="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

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
                    </a>
                </div>

                {/* <!-- items --> */}
                <div className="item studio col-lg-3 col-6 my-2">
                    {/* <!-- link here --> */}
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span className="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

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
                    </a>
                </div>

                {/* <!-- items --> */}
                <div className="item merch col-lg-3 col-6 my-2">
                    {/* <!-- link here --> */}
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span className="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

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
                    </a>
                </div>

                {/* <!-- items --> */}
                <div className="item merch col-lg-3 col-6 my-2">
                    {/* <!-- link here --> */}
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span className="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

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
                    </a>
                </div>

                {/* <!-- items --> */}
                <div className="item inst col-lg-3 col-6 my-2">
                    {/* <!-- link here --> */}
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span className="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

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
                    </a>
                </div>

                {/* <!-- items --> */}
                <div className="item inst col-lg-3 col-6 my-2">
                    {/* <!-- link here --> */}
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span className="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

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
                    </a>
                </div>

                {/* <!-- items --> */}
                <div className="item elec col-lg-3 col-6 my-2">
                    {/* <!-- link here --> */}
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span className="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

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
                    </a>
                </div>

                {/* <!-- items --> */}
                <div className="item elec col-lg-3 col-6 my-2">
                    {/* <!-- link here --> */}
                    <a href="#">
                        {/* <!-- image --> */}
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />

                        {/* <!-- Product Name --> */}
                        <span className="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                            Product Name
                        </span>

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
                    </a>
                </div>

 
            </div>
        </div>
        {/* <!-- Trending items ends here --> */}

        {/* <!-- Daily deals section begins here --> */}
        <div className="container-fluid bg-dark position-relative py-3 my-3">
            {/* <!-- heading container--> */}
            <div className="d-flex justify-content-between pb-0 mx-0" style={{"borderBottom": "1px solid rgb(168, 168, 168)"}}>
                {/* <!-- heading --> */}
                <span className="text-danger px-2 py-1 mb-0" style={{"backgroundColor": "rgb(22, 22, 22)"}}>
                    <i className="fas fa-fire"></i>
                    <span className="text-white" style={{"fontSize": "14px"}}>
                        DAILY DEALS
                    </span>
                </span>

                {/* <!-- Time --> */}
                <div className="d-flex justify-content-between align-items-center text-white px-2 pb-0 mb-0" style={{"border": "1px solid rgb(168, 168, 168)"}}>
                    {/* <!-- clock --> */}
                    <i className="fa fa-clock me-1"></i>
                    |

                    {/* <!-- Days --> */}
                    <span className="ps-2 pe-1" style={{"fontSize": "14px"}}>
                        3D
                    </span>
                    :
                    {/* <!-- minutes --> */}
                    <span className="px-1" style={{"fontSize": "14px"}}>
                        22M
                    </span>
                    :
                    {/* <!-- seconds --> */}
                    <span className="px-1" style={{"fontSize": "14px"}}>
                        45 S
                    </span>
                </div>
            </div>

            {/* <!-- Container for items --> */}
            <div className="container-fluid mx-0 px-0">
                {/* <!-- ROW --> */}
                <div className="row py-3">

                    {/* <!-- ITEM 1 --> */}
                    <div className="col-lg-6 col-12 py-2">

                        {/* <!-- ITEM --> */}
                        <div className="container-fluid mx-0">
                            {/* <!-- Items row --> */}
                            <div className="row">
                                {/* <!-- image --> */}
                                <div className="col-lg-5 col-6">
                                    <a href="#">
                                        {/* <!-- image --> */}
                                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />
                                    </a>
                                </div>

                                {/* <!-- metadata --> */}
                                <div className="col-lg-7 col-6">
                                    <a href="#">
                                        {/* <!-- Product Name --> */}
                                        <span className="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                                            Product Name
                                        </span>

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

                                        {/* <!-- Available --> */}
                                        <span className="d-block text-start text-white py-2">
                                            Available:
                                            <span className="text-warning ms-1">100</span>
                                        </span>

                                        {/* <!-- Progress bar --> */}
                                        <div className="progress" style={{"height": "20px"}}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <!-- ITEM 2 --> */}
                    <div className="col-lg-6 col-12 py-2">
                        {/* <!-- ITEM --> */}
                        <div className="container-fluid mx-0">
                            {/* <!-- Items row --> */}
                            <div className="row">
                                {/* <!-- image --> */}
                                <div className="col-lg-5 col-6">
                                    <a href="#">
                                        {/* <!-- image --> */}
                                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni Product Name" width="150px" height="150px" />
                                    </a>
                                </div>

                                {/* <!-- metadata --> */}
                                <div className="col-lg-7 col-6">
                                    <a href="#">
                                        {/* <!-- Product Name --> */}
                                        <span className="d-block text-start" style={{"color": "rgb(168, 168, 168)", "fontSize": "15px", "fontWeight": "400"}}>
                                            Product Name
                                        </span>

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

                                        {/* <!-- Available --> */}
                                        <span className="d-block text-start text-white py-2">
                                            Available:
                                            <span className="text-warning ms-1">100</span>
                                        </span>

                                        {/* <!-- Progress bar --> */}
                                        <div className="progress" style={{"height": "20px"}}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* <!-- Daily deals scetion ends here --> */}
        
    </div>
    {/* <!-- E-commerce home section ends here --> */}
    </div>
  )
}

export default Commerce