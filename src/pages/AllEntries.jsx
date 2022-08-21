import pimg4 from "../assets/images/pimg4.jpg";

const AllEntries = () => {
  return (
    <>
    {/* <!-- Sound pack home section begins here --> */}
    <div className="container-fluid px-0" style={{"backgroundColor": "rgb(22, 22, 22)", "marginTop": "60px"}}>

        {/* <!-- main contents container begins here --> */}
        <div className="container mx-2 p-3">
            {/* <!-- header --> */}
            {/* <!-- Beat contest Name --> */}
            <span className="h6 d-block text-center text-light">Beat Contest Name</span>

            <div className="container d-flex justify-content-center flex-row">
                
                <span className="h6 d-block text-center mb-3 pt-2" style={{"color": "rgb(168, 168, 168)", "borderTop": "1px solid rgb(168, 168, 168)", "width": "120px"}}>
                    All Entries
                </span>
            </div>

            {/* <!-- entries row --> */}
            <div className="row py-3 mt-2 mb-3" style={{"border": "none" ,"outline": "none", "border": "1px solid rgb(168, 168, 168)", "borderRadius": "18px"}}>
                {/* <!-- image --> */}
                <div className="col-lg-2 col-12">
                    <a href="#">
                        <img src={pimg4} width="120px" height="120px" className="rounded" alt="" />
                    </a>
                </div>

                {/* <!-- metadata and play button --> */}
                <div className="col-lg-10 col-12">
                    {/* <!-- artist and track name --> */}
                    <span className="d-block">
                        {/* <!-- Track Name --> */}
                        <a href="#" className="d-block text-white" style={{"fontSize": "21px"}}>Track Name</a>
                        
                        {/* <!-- Artist Name --> */}
                        <a href="#" className="d-block mb-2" style={{"fontSize": "14px", "color": "rgb(168, 168, 168)"}}>Artist Name</a>

                        {/* <!-- Play button --> */}
                        <button className="btn btn-outline-success btn-sm" type="button"><i className="fas fa-play"></i></button>

                        {/* <!-- Download button --> */}
                        <button className="btn btn-outline-light btn-sm" type="button" style={{"marginLeft": "5px"}}><i className="fas fa-download me-1"></i> Download</button>

                        {/* <!-- Appproved message --> */}
                        <span className="py-2 mt-2 d-block text-success" style={{"fontSize": "13px"}}>
                            <i className="fas fa-check-double me-1"></i>
                            This submission has officialy been listen to & judged by the Gustuni taem.
                        </span>
                    </span>

                </div>

            </div>

            {/* <!-- entries row --> */}
            <div className="row py-3 mt-2 mb-3" style={{"border": "none", "outline": "none", "border": "1px solid rgb(168, 168, 168)", "borderRadius": "18px"}}>
                {/* <!-- image --> */}
                <div className="col-lg-2 col-12">
                    <a href="#">
                        <img src={pimg4} width="120px" height="120px" className="rounded" alt="" />
                    </a>
                </div>

                {/* <!-- metadata and play button --> */}
                <div className="col-lg-10 col-12">
                    {/* <!-- artist and track name --> */}
                    <span className="d-block">
                        {/* <!-- Track Name --> */}
                        <a href="#" className="d-block text-white" style={{"fontSize": "21px"}}>Track Name</a>
                        
                        {/* <!-- Artist Name --> */}
                        <a href="#" className="d-block mb-2" style={{"fontSize": "14px", "color": "rgb(168, 168, 168)"}}>Artist Name</a>

                        {/* <!-- Play button --> */}
                        <button className="btn btn-outline-success btn-sm" type="button"><i className="fas fa-play"></i></button>

                        {/* <!-- Download button --> */}
                        <button className="btn btn-outline-light btn-sm" type="button" style={{"marginLeft": "5px"}}><i className="fas fa-download me-1"></i> Download</button>

                        {/* <!-- Appproved message --> */}
                        <span className="py-2 mt-2 d-block text-success" style={{"fontSize": "13px"}}>
                            <i className="fas fa-check-double me-1"></i>
                            This submission has officialy been listen to & judged by the Gustuni taem.
                        </span>
                    </span>

                </div>

            </div>

            {/* <!-- entries row --> */}
            <div className="row py-3 mt-2 mb-3" style={{"border": "none", "outline": "none", "border": "1px solid rgb(168, 168, 168)", "borderRadius": "18px"}}>
                {/* <!-- image --> */}
                <div className="col-lg-2 col-12">
                    <a href="#">
                        <img src={pimg4} width="120px" height="120px" className="rounded" alt="" />
                    </a>
                </div>

                {/* <!-- metadata and play button --> */}
                <div className="col-lg-10 col-12">
                    {/* <!-- artist and track name --> */}
                    <span className="d-block">
                        {/* <!-- Track Name --> */}
                        <a href="#" className="d-block text-white" style={{"fontSize": "21px"}}>Track Name</a>
                        
                        {/* <!-- Artist Name --> */}
                        <a href="#" className="d-block mb-2" style={{"fontSize": "14px", "color": "rgb(168, 168, 168)"}}>Artist Name</a>

                        {/* <!-- Play button --> */}
                        <button className="btn btn-outline-success btn-sm" type="button"><i className="fas fa-play"></i></button>

                        {/* <!-- Download button --> */}
                        <button className="btn btn-outline-light btn-sm" type="button" style={{"marginLeft": "5px"}}><i className="fas fa-download me-1"></i> Download</button>

                        {/* <!-- Appproved message --> */}
                        <span className="py-2 mt-2 d-block text-success" style={{"fontSize": "13px"}}>
                            <i className="fas fa-check-double me-1"></i>
                            This submission has officialy been listen to & judged by the Gustuni taem.
                        </span>
                    </span>

                </div>

            </div>
            
            {/* <!-- entries row --> */}
            <div className="row py-3 mt-2 mb-3" style={{"border": "none", "outline": "none", "border": "1px solid rgb(168, 168, 168)", "borderRadius": "18px"}}>
                {/* <!-- image --> */}
                <div className="col-lg-2 col-12">
                    <a href="#">
                        <img src={pimg4} width="120px" height="120px" className="rounded" alt="" />
                    </a>
                </div>

                {/* <!-- metadata and play button --> */}
                <div className="col-lg-10 col-12">
                    {/* <!-- artist and track name --> */}
                    <span className="d-block">
                        {/* <!-- Track Name --> */}
                        <a href="#" className="d-block text-white" style={{"fontSize": "21px"}}>Track Name</a>
                        
                        {/* <!-- Artist Name --> */}
                        <a href="#" className="d-block mb-2" style={{"fontSize": "14px", "color": "rgb(168, 168, 168)"}}> Artist Name</a>

                        {/* <!-- Play button --> */}
                        <button className="btn btn-outline-success btn-sm" type="button"><i className="fas fa-play"></i></button>

                        {/* <!-- Download button --> */}
                        <button className="btn btn-outline-light btn-sm" type="button" style={{"marginLeft": "5px"}}><i className="fas fa-download me-1"></i> Download</button>

                        {/* <!-- Appproved message --> */}
                        <span className="py-2 mt-2 d-block text-success" style={{"fontSize": "13px"}}>
                            <i className="fas fa-check-double me-1"></i>
                            This submission has officialy been listen to & judged by the Gustuni taem.
                        </span>
                    </span>

                </div>

            </div>

            {/* <!-- Pagination --> */}
            <div className="container-flud mx-0 px-0 text-center">
                <nav className="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a href="#" className="page-link" aria-label="Previous">
                                <span className="text-success" aria-hidden="true">&laquo;</span>
                            </a>
                        </li>

                        <li className="page-item">
                            <a href="#" className="page-link text-success">1</a>
                        </li>
                        <li className="page-item">
                            <a href="#" className="page-link text-success">2</a>
                        </li>
                        <li className="page-item">
                            <a href="#" className="page-link text-success">3</a>
                        </li>

                        <li className="page-item">
                            <a href="#" className="page-link" aria-label="Previous">
                                <span className="text-success" aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        {/* <!-- main contents container ends here --> */}
    </div>
    {/* <!-- Sound pack home section ends here --> */}
    </>
  )
}

export default AllEntries;