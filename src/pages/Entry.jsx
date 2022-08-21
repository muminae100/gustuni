import pimg4 from "../assets/images/pimg4.jpg";

const Entry = () => {
  return (
    <>
     {/* <!-- Sound pack home section begins here --> */}
    <div className="container-fluid px-0" style={{"backgroundColor": "rgb(22, 22, 22)"}}>

        {/* <!-- Banner section begins here --> */}
        <div className="container-fluid m-0 p-0 position-relative" style={{"height": "auto"}}>
            {/* <!-- Contest Name --> */}
            <span className="h5 text-white d-block text-center pt-3">Contest Name</span>

            {/* <!-- Winner Name --> */}
            <span className="text-light h6 d-block text-center mb-3" style={{"color": "rgb(175, 175, 175)", "fontWeight": "400"}}>
                Contest Winner: FALIM
            </span>

            {/* <!-- container for music track --> */}
            <div className="container-fluid mx-0 px-0" style={{"width": "auto"}}>
                <div className="container bg-dark py-2">
                    {/* <!-- row --> */}
                    <div className="row position-relative">
                    
                        {/* <!-- image --> */}
                        <div className="col-sm-12 col-md-3 position-relative">
                            {/* <!-- image --> */}
                            <img src={pimg4} width="120px" height="120px" className="m-0 p-0 d-block rounded" alt="Gustuni soundpack image" />

                            
                        </div>

                        {/* <!-- artist and song name --> */}
                        <div className="coll-sm-12 col-md-9">
                            {/* <!-- artist and track name --> */}
                            <span className="d-block">
                                {/* <!-- Track Name --> */}
                                <a href="#" className="d-block text-white" style={{"fontSize": "21px"}}>Track Name</a>
                                
                                {/* <!-- Artist Name --> */}
                                <a href="#" className="d-block mb-2" style={{"fontSize": "14px", "color": "rgb(168, 168, 168)"}}>Artist Name</a>

                                {/* <!-- Play button --> */}
                                <button className="btn btn-outline-success btn-sm" type="button"><i className="fas fa-play"></i></button>

                                {/* <!-- Download button --> */}
                                <button className="btn btn-outline-light btn-sm" style={{"marginLeft": "5px"}} type="button"><i className="fas fa-download me-1"></i> Download</button>

                                {/* <!-- Appproved message --> */}
                                <span className="my-1 d-block text-success pt-2" style={{"fontSize": "13px"}}>
                                    <i className="fas fa-check-double me-1"></i>
                                    This submission has officialy been listen to & judged by the Gustuni taem.
                                </span>

                                {/* <!-- view contest --> */}
                                <a href="./bcontestpage.html" className="d-block" style={{"fontSize": "13px"}}>View Contest &raquo</a>
                            </span>

                        </div>

                        {/* <!-- icons container --> */}
                        <div className="col-12">
                            {/* <!-- icons container --> */}
                            <span className="d-block mt-4">
                                {/* <!-- Like --> */}
                                <span className="text-white me-4" style={{"fontSize": "13px", "fontWeight": "300"}}>
                                    <i className="fa fa-heart"></i>

                                   <span className="ms-1"> 11.2k</span>
                                </span>

                                {/* <!-- Repost --> */}
                                <span className="text-white me-4" style={{"fontSize": "13px", "fontWeight": "300"}}>
                                    <i className="fa fa-retweet"></i>

                                   <span className="ms-1"> 1.2k</span>
                                </span>

                                {/* <!-- Playlist --> */}
                                <span className="text-white me-4" style={{"fontSize": "13px", "fontWeight": "300"}}>
                                    <i className="fa fa-plus"></i>

                                </span>

                                {/* <!-- Share --> */}
                                <span className="text-white me-4" style={{"fontSize": "13px", "fontWeight": "300"}}>
                                    <i className="fa fa-share"></i>

                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mx-2 p-3 text-start mt-3 py-3">
                {/* <!-- Description --> */}
                <p className="#" style={{"fontSize": "13px", "color": "rgb(168, 168, 168)"}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, optio tempore. Blanditiis?
                </p>
                <hr />
            </div>

            
        </div>
        {/* <!-- Banner section ends here --> */}

        {/* <!-- main contents container begins here --> */}
        <div className="container mx-2 p-3">
            {/* <!-- header --> */}
            <span className="h6 d-block text-center text-white mb-3">
                Latest Contest Entries
            </span>

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

            {/* <!-- View all entries button --> */}
            <div className="container-flud mx-0 px-0 text-center">
                <a href="./viewallentries.html" className="btn btn-sm btn-outline-light text-uppercase">View All Entries</a>
            </div>
        </div>
        {/* <!-- main contents container ends here --> */}
    </div>
    {/* <!-- Sound pack home section ends here --> */}

    </>
  )
}

export default Entry;