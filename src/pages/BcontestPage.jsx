import pimg4 from "../assets/images/pimg4.jpg";

const BcontestPage = () =>{
    return (
        <>
        {/* <!-- Sound pack home section begins here --> */}
    <div className="container-fluid px-0" style={{"backgroundColor": "rgb(22, 22, 22)", "marginTop": "60px"}}>

        {/* <!-- Banner section begins here --> */}
        <div className="container-fluid m-0 p-0 position-relative" style={{"height": "auto", "backgroundColor":"rgb(17, 17, 17)"}}>
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
                                <span className="text-white me-4" style={{"fontSize": "13px","fontWeight": "300"}}>
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

            <div className="container-fluid mx-0 px-0 text-center mt-3 py-3">
                {/* <!-- View Entry button link --> */}
                <a href="./viewentry.html" className="btn btn-outline-white w-50">
                    View Entry
                </a>
            </div>

            
        </div>
        {/* <!-- Banner section ends here --> */}

        {/* <!-- main contents container begins here --> */}
        <div className="container-fluid px-0 py-4">
            {/* <!-- row --> */}
            <div className="row mx-0 px-0">
                {/* <!-- image column --> */}
                <div className="col-sm-12 col-md-6">
                    {/* <!-- image --> */}
                    <img src={pimg4} width="210px" height="240px" className="m-0 p-0 d-block rounded" alt="Gustuni soundpack image" />
                </div> 

                {/* <!-- Contest description --> */}
                <div className="col-sm-12 col-md-6">
                    <div className="container rounded bg-dark py-3">
                        {/* <!-- Header --> */}
                        <span className="h5 d-block text-start text-white">Who can make the best track?</span>

                        {/* <!-- Download pack button --> */}
                        <button className="btn btn-success btn-md d-block my-1" style={{"width": "180px"}}>Download Pack</button>

                        {/* <!-- Enter contest Button --> */}
                        <a href="./bentercontest.html" className="btn btn-outline-light btn-md d-block mt-1 mb-3" style={{"width": "180px"}}>
                            Enter Contest
                        </a>

                        {/* <!-- Description --> */}
                        <p className="text-white py-2" style={{"fontSize": "14px", "lineHeight": "1.7", "maxHeight": "150px", "overflowY": "scroll"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis placeat aperiam ab voluptate molestias eum excepturi sit voluptatibus officiis at autem, amet distinctio incidunt aspernatur rerum veritatis fugit nostrum et illum itaque doloribus quos aliquid, provident reiciendis? Quia repellendus aliquid accusantium veniam sapiente voluptate debitis ipsa minima! Adipisci soluta doloremque expedita corporis iste quisquam laborum quae delectus sed! Nemo libero commodi odio quas saepe provident deleniti vel, laudantium amet, ducimus recusandae mollitia maxime et ipsa quae accusantium ratione!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores velit consectetur porro. Soluta, aliquam, alias sed iure eaque eos ipsa ad odit modi tempore voluptatem sequi nulla fugit. Molestias deleniti facere eum, molestiae similique error corporis rem necessitatibus consequuntur reprehenderit voluptate dolores exercitationem voluptatum adipisci!
                        </p>

                        {/* <!-- Submission Begin --> */}
                        <span className="text-white h6 d-block py-1">
                            Submission Begin:
                            <span style={{"color": "rgb(168, 168, 168)"}}>June 8th 2022, 2pm EAT</span>
                        </span>

                        {/* <!-- Submission End --> */}
                        <span className="text-white h6 d-block py-1">
                            Submission End:
                        </span>
                        <span style={{"color": "rgb(168, 168, 168)"}}>June 30th 2022, 12pm EAT</span>

                        {/* <!-- Winner Announcement --> */}
                        <span className="text-white h6 d-block py-1">
                            Winner Announcement:
                            <span style={{"color": "rgb(168, 168, 168)"}}>July 15th 2022, 12pm EAT</span>
                        </span>

                        {/* <!-- Best of luck message --> */}
                        <span className="text-white d-block">
                            Best of luck to everyone and have fun with it!
                        </span>

                        {/* <!-- contest rules --> */}
                        <a href="#">Click here for official contest rules</a>

                    </div>
                </div>
            </div>
        </div>
        {/* <!-- main contents container ends here --> */}
    </div>
    {/* <!-- Sound pack home section ends here --> */}
        </>
    )
}

export default BcontestPage;