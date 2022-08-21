import pimg4 from "../assets/images/pimg4.jpg";
import image6 from "../assets/images/image-6.jpeg";

const BeatContest = () =>{
    return (
        <>
        <div style={{ "marginTop": "60px"}}> 
        {/* <!-- Sound pack home section begins here --> */}
    <div className="container-fluid px-0" style={{"background-color": "rgb(22, 22, 22)"}}>

        {/* <!-- Banner section begins here --> */}
        <div className="container-fluid m-0 p-0 position-relative" style={{"height": "330px", "backgroundColor" : "rgb(17, 17, 17)"}}>
            {/* <!-- image --> */}
            <img src={pimg4} width="390px" height="240px" className="m-0 p-0 rounded" alt="Gustuni soundpack image" style={{"position": "absolute", "left": "3%", "top": "14%"}} />

            {/* <!-- Title, price and download container --> */}
            <div className="position-absolute" style={{"bottom": "27%", "left": "45%"}}>
                {/* <!-- Title --> */}
                <span className="d-block h6 text-start text-white" style={{"fontFamily": "500"}}>
                    <a href="#" className="text-white" style={{"textDecoration": "none"}}>Contest Name</a>
                </span>

                {/* <!-- Details --> */}
                <span className="d-block h6 text-uppercase text-start text-info mb-4" style={{"fontWeight": "400", "fontSize": "13px"}}>
                    <a href="#" style={{"textDecoration": "none"}}>
                        Learn more
                        <i className="fas fa-angle-right"></i>
                    </a>
                </span>

                {/* <!-- Add to cart button --> */}
                <button className="btn btn-md btn-success">
                    <i className="fas fa-download me-1"></i>
                    Download Pack
                </button>

                {/* <!-- Enter contest button --> */}
                <button className="btn text-white" style={{"marginLeft": "10px", "border": "1px solid #f1f1f1"}}>Enter Contest</button>
            </div>
            
        </div>
        {/* <!-- Banner section ends here --> */}

        {/* <!-- New arrivals section begins here --> */}
        <section id="NewArrivals" className="position-relative">
            {/* <!-- filter section begins here --> */}
            <div className="container mt-2 pt-3 mx-0 px-0">
                <div className="filter-menu n-arrival m-0 p-0">
                    <ul className="m-0 p-0">
                        <li className="active mx-1 text-start py-1 px-3 mb-3" data-filter="*">All Contests</li>
                        <li className="mx-1 mb-3 text-start py-1 px-3" data-filter=".forprod">For Producers</li>
                        <li className="mx-1 mb-3 text-start py-1 px-3" data-filter=".forart">For artist challenge</li>
                        <li className="mx-1 mb-3 text-start py-1 px-3" data-filter=".open">Open</li>
                        <li className="mx-1 mb-3 text-start py-1 px-3" data-filter=".closed">Closed</li>
                    </ul>
                </div>

                <div className="container-fluid m-0 p-0">
                    <div className="filter-items row narrive-cont">

                        {/* <!-- items --> */}
                        <div className="item forprod col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="./bcontestpage.html" className="shadow" style={{"textDecoration": "none"}}>
                                {/* <!-- card --> */}
                                <div className="card bg-dark">
                                    <div className="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" className="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div className="card-body bg-dark">
                                        {/* <!-- Contest Name --> */}
                                        <span className="h6 card-title text-white" style={{"textDecoration": "none"}}>Contest Name</span>
                                        {/* <!-- Status --> */}
                                        <p className="card-text text-white">
                                            <a href="#" className="#" style={{"fontSize": "13px", "textDecoration": "none"}}>
                                                learn more
                                                <i className="fas fa-angle-right"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- items --> */}
                        <div className="item forprod col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="#" className="shadow" style={{"textDecoration": "none"}}>
                                {/* <!-- card --> */}
                                <div className="card bg-dark">
                                    <div className="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" className="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div className="card-body bg-dark">
                                        {/* <!-- Contest Name --> */}
                                        <span className="h6 card-title text-white">Contest Name</span>
                                        {/* <!-- Status --> */}
                                        <p className="card-text text-white">
                                            <a href="#" className="#" style={{"fontSize": "13px","textDecoration": "none"}}>
                                                learn more
                                                <i className="fas fa-angle-right"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- items --> */}
                        <div className="item forart col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="#" className="shadow" style={{"textDecoration": "none"}}>
                                {/* <!-- card --> */}
                                <div className="card bg-dark">
                                    <div className="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" className="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div className="card-body bg-dark">
                                        {/* <!-- Contest Name --> */}
                                        <span className="h6 card-title text-white">Contest Name</span>
                                        {/* <!-- Status --> */}
                                        <p className="card-text text-white">
                                            <a href="#" className="#" style={{"fontSize": "13px","textDecoration": "none"}}>
                                                learn more
                                                <i className="fas fa-angle-right"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- items --> */}
                        <div className="item forart col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="#" className="shadow" style={{"textDecoration": "none"}}>
                                {/* <!-- card --> */}
                                <div className="card bg-dark">
                                    <div className="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" className="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div className="card-body bg-dark">
                                        {/* <!-- Contest Name --> */}
                                        <span className="h6 card-title text-white">Contest Name</span>
                                        {/* <!-- Status --> */}
                                        <p className="card-text text-white">
                                            <a href="#" className="#" style={{"fontSize": "13px","textDecoration": "none"}}>
                                                learn more
                                                <i className="fas fa-angle-right"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- items --> */}
                        <div className="item open col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="#" className="shadow" style={{"textDecoration": "none"}}>
                                {/* <!-- card --> */}
                                <div className="card bg-dark">
                                    <div className="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" className="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div className="card-body bg-dark">
                                        {/* <!-- Contest Name --> */}
                                        <span className="h6 card-title text-white">Contest Name</span>
                                        {/* <!-- Status --> */}
                                        <p className="card-text text-white">
                                            <a href="#" className="#" style={{"fontSize": "13px","textDecoration": "none"}}>
                                                learn more
                                                <i className="fas fa-angle-right"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- items --> */}
                        <div className="item open col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="#" className="shadow" style={{"textDecoration": "none"}}>
                                {/* <!-- card --> */}
                                <div className="card bg-dark">
                                    <div className="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" className="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div className="card-body bg-dark">
                                        {/* <!-- Contest Name --> */}
                                        <span className="h6 card-title text-white">Contest Name</span>
                                        {/* <!-- Status --> */}
                                        <p className="card-text text-white">
                                            <a href="#" className="#" style={{"fontSize": "13px","textDecoration": "none"}}>
                                                learn more
                                                <i className="fas fa-angle-right"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- items --> */}
                        <div className="item closed col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="#" className="shadow" style={{"textDecoration": "none"}}>
                                {/* <!-- card --> */}
                                <div className="card bg-dark">
                                    <div className="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" className="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div className="card-body bg-dark">
                                        {/* <!-- Contest Name --> */}
                                        <span className="h6 card-title text-white">Contest Name</span>
                                        {/* <!-- Status --> */}
                                        <p className="card-text text-white">
                                            <a href="#" className="#" style={{"fontSize": "13px","textDecoration": "none"}}>
                                                learn more
                                                <i className="fas fa-angle-right"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- items --> */}
                        <div className="item closed col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="#" className="shadow" style={{"textDecoration": "none"}}>
                                {/* <!-- card --> */}
                                <div className="card bg-dark">
                                    <div className="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" className="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div className="card-body bg-dark">
                                        {/* <!-- Contest Name --> */}
                                        <span className="h6 card-title text-white">Contest Name</span>
                                        {/* <!-- Status --> */}
                                        <p className="card-text text-white">
                                            <a href="#" className="#" style={{"fontSize": "13px", "textDecoration": "none"}}>
                                                learn more
                                                <i className="fas fa-angle-right"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
         
                    </div>
                </div>

                {/* <!-- View more container --> */}
                <div className="container-fluid text-center mx-0 mt-0 px-0 py-2">
                    <button type="button" className="btn btn-sm my-1 text-white" style={{"width": "210px", "border": "1px solid #f1f1f1"}}>
                        View More
                    </button>
                </div>
            </div>
            {/* <!-- filter section ends here --> */}
        </section>

        {/* <!-- New arrivals section ends here --> */}
    </div>
    {/* <!-- Sound pack home section ends here --> */}

        </div>
        </>
    )
}

export default BeatContest;