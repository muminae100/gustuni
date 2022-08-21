import pimg4 from "../assets/images/pimg4.jpg";

const BlogPage = () => {
  return (
    <>
    {/* <!-- Blog home section begins here --> */}
    <div class="container-fluid px-0 pb-1" style={{"backgroundColor": "rgb(22, 22, 22)", "marginTop": "60px"}}>
        {/* <!-- banner images begin here --> */}
        <div class="container-fluid position-relative mb-4 pb-3 bg-dark">

            {/* <!-- ROW for the images --> */}
            <div class="row py-3">
                {/* <!-- Trending News Header --> */}
            <div class="container-fluid mx-0 px-0 py-2">
                <span class="bg-warning text-white p-2 w-auto">
                    TRENDING NEWS
                </span>
            </div>

            <hr />
                {/* <!-- main container image --> */}
                <div class="col-lg-6 col-12">
                    {/* <!-- image link --> */}
                    <a href="#" class="position-relative">
                        {/* <!-- image --> */}
                        <img src={pimg4} alt="News Heading Description" height="459px" class="w-100 position-relative" style={{"zIndex": 1}} />
                        {/* <!-- container for metadata --> */}
                        <div class="# position-absolute p-2" style={{"top": "67%", "zindex": 2}}>
                            {/* <!-- category name --> */}
                            <span class="text-white text-center text-uppercase d-block p-1" style={{"backgroundColor": "rgb(22, 22, 22)", "width": "150px", "fontSize": "14px"}}>
                                Category Name
                            </span>

                            {/* <!-- heading --> */}
                            <span class="h6 text-start px-1 d-block" style={{"color": "rgb(168, 168, 168)", "fontSize": "17px", "width": "459px"}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos facere fugiat accusamus? Error, autem.
                            </span>

                            {/* <!-- Author name and date --> */}
                            <span class="text-start mt-2" style={{"color": "rgb(168, 168, 168)"}}>
                                {/* <!-- Author name --> */}
                                <a href="#" class="text-white text-start p-1 me-1" style={{"fontSize": "15px", "fontWeight": 500}}><i class="fas fa-user text-primary"></i> Author Name</a>
                                |
                                {/* <!-- Date --> */}
                                <span class="text-start pb-3" style={{"color": "rgb(214, 214, 214)", "fontStyle": "12px"}}>
                                    March 22, 2022
                                </span>
                            </span>
                        </div>
                    </a>
                </div>

                {/* <!-- side container images --> */}
                <div class="col-lg-6 col-12 d-sm-none d-md-block">

                    {/* <!-- items row --> */}
                    <div class="row">

                        {/* <!-- item 1 --> */}
                        <div class="col-12">
                            {/* <!-- image link --> */}
                            <a href="#" class="position-relative d-block">
                                {/* <!-- image --> */}
                                <img src={pimg4} alt="News Heading Description" height="270px" class="w-100 position-relative" style={{"zIndex": 1}} />
                                {/* <!-- container for metadata --> */}
                                <div class="# position-absolute p-2" style={{"top": "57%", "zindex": 2}}>
                                    {/* <!-- category name --> */}
                                    <span class="text-white text-center text-uppercase d-block p-1" style={{"backgroundColor": "rgb(22, 22, 22)", "width": "150px", "fontSize": "14px"}}>
                                        Category Name
                                    </span>

                                    {/* <!-- heading --> */}
                                    <span class="h6 text-start px-1 d-block" style={{"color": "rgb(168, 168, 168)", "fontSize": "17px", "width": "459px"}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos facere fugiat accusamus? Error, autem.
                                    </span>
                                </div>
                            </a>
                        </div>

                        {/* <!-- Item 2 and 3 --> */}
                        <div class="col-12 d-flex justify-content-between align-items-center pt-2">
                            {/* <!-- image link --> */}
                            <a href="#" class="position-relative d-block pe-1">
                                {/* <!-- image --> */}
                                <img src={pimg4} alt="News Heading Description" height="180px" class="w-100 position-relative" style={{"zIndex": 1}} />
                                {/* <!-- container for metadata --> */}
                                <div class="# position-absolute p-2" style={{"top": "53%", "zIndex": 2}}>
                                    {/* <!-- category name --> */}
                                    <span class="text-white text-center text-uppercase d-block p-1" style={{"backgroundColor": "rgb(22, 22, 22)", "width": "144px", "fontSize": "13px"}}>
                                        Category Name
                                    </span>

                                    {/* <!-- heading --> */}
                                    <span class="h6 text-start px-1 d-block" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px", "width": "250px"}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </span>
                                </div>
                            </a>

                            {/* <!-- image link --> */}
                            <a href="#" class="position-relative d-block ps-1">
                                {/* <!-- image --> */}
                                <img src={pimg4} alt="News Heading Description" height="180px" class="w-100 position-relative" style={{"zIndex": 1}} />
                                {/* <!-- container for metadata --> */}
                                <div class="# position-absolute p-2" style={{"top": "53%", "zIndex": 2}}>
                                    {/* <!-- category name --> */}
                                    <span class="text-white text-center text-uppercase d-block p-1" style={{"backgroundColor": "rgb(22, 22, 22)", "width": "144px", "fontSize": "13px"}}>
                                        Category Name
                                    </span>

                                    {/* <!-- heading --> */}
                                    <span class="h6 text-start px-1 d-block" style={{"color": "rgb(168, 168, 168)", "fontSize": "14px", "width": "250px"}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Banner images ends here --> */}

        {/* <!-- Navbar for the page contents --> */}
        <div class="container-fluid mx-0 px-0">
            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-expand navbar-dark shadow-0">
                {/* <!-- container wrapper --> */}
                <div class="container-fluid">
                    {/* <!-- toggle button --> */}
                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarLeftAlignExample" aria-controls="navbarLeftAlignExample" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    {/* <!-- collapsible wrapper --> */}
                    <div class="collapsible navbar-collapse" id="navbarLeftAlignExample">
                        {/* <!-- Left links --> */}
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <!-- link --> */}
                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link active drop-down-toggle" id="navbarDropdown" aria-current="page" role="button" data-mdb-toggle="dropdown" aria-expanded="false" >News <i class="fas fa-caret-down"></i></a>
                                {/* <!-- Dropdown menu --> */}
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {/* <!-- links --> */}
                                    <li>
                                        <a href="#" class="dropdown-item"><i class="fas fa-ticket me-1"></i> Events</a>
                                    </li>
                                    {/* <!-- links --> */}
                                    <li>
                                        <a href="#" class="dropdown-item"><i class="fas fa-football me-1"></i> Sports</a>
                                    </li>
                                    {/* <!-- links --> */}
                                    <li>
                                        <a href="#" class="dropdown-item"><i class="fas fa-film me-1"></i> Entertainment</a>
                                    </li>
                                    <li>
                                        <a href="#" class="dropdown-item"><i class="fas fa-podcast me-1"></i> Podcast</a>
                                    </li>
                                    <li>
                                        <a href="#" class="dropdown-item"><i class="fas fa-lightbulb me-1"></i> Featured</a>
                                    </li>
                                </ul>
                            </li>

                            {/* <!-- link --> */}
                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link drop-down-toggle" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false" >Store <i class="fas fa-caret-down"></i></a>
                                {/* <!-- Dropdown menu --> */}
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {/* <!-- links --> */}
                                    <li>
                                        <a href="#" class="dropdown-item"><i class="fas fa-shirt me-1"></i> Merchandise</a>
                                    </li>
                                    <li>
                                        <a href="#" class="dropdown-item"><i class="fas fa-file-audio me-1"></i> Sound Packs</a>
                                    </li>
                                    <li>
                                        <a href="#" class="dropdown-item"><i class="fas fa-record-vinyl me-1"></i> Tracks and sounds</a>
                                    </li>
                                </ul>
                            </li>

                            {/* <!-- link --> */}
                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link drop-down-toggle" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false" >Contests <i class="fas fa-caret-down"></i></a>
                                {/* <!-- Dropdown menu --> */}
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {/* <!-- links --> */}
                                    <li>
                                        <a href="#" class="dropdown-item"><i class="fas fa-headphones me-1"></i> Beat Contest</a>
                                    </li>
                                    <li>
                                        <a href="#" class="dropdown-item"><i class="fas fa-microphone-lines me-1"></i> Singing Contests</a>
                                    </li>
                                </ul>
                            </li>

                            {/* <!-- link --> */}
                            <li class="nav-item">
                                <a href="#" class="nav-link">For Creators</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        {/* <!-- Navbar page ends here --> */}

        {/* <!-- dont miss, socials and ads link begin here --> */}
        <div class="container-fluid position-relative my-3">
            {/* <!-- row --> */}
            <div class="row py-2">
                {/* <!-- heading here --> */}
                <span class="bg-warning text-start text-white text-uppercase p-2" style={{"width": "auto"}}>DON'T MISS</span>
                <hr />
                {/* <!-- main news item --> */}
                <div class="col-lg-4 col-12">

                    <div class="card bg-dark rounded-0 mb-2">
                        {/* <!-- image link --> */}
                        <a href="#" class="position-relative d-block">
                            {/* <!-- img --> */}
                            <img src={pimg4} alt="News title" width="100%" height="210px" />
                            {/* <!-- category tag --> */}
                            <span class="text-start text-white p-1 text-uppercase position-absolute bg-dark" style={{"fontSize": "13px", "fontWeight": "400", "bottom": "4px", "left": "2px"}}>Category Name</span>
                        </a>
                      {/* <!-- review text --> */}
                        <p class="card-text text-start text-white p-2">
                            {/* <!-- text --> */}
                            <span class="pb-1 d-block" style={{"fontSize": "14px"}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam!
                            </span>

                            <span class="d-block text-start" style={{"fontSize": "13px"}}>
                                <a href="#">Read <i class="fas fa-angle-right"></i></a>
                            </span>

                            {/* <!-- author & date --> */}
                            <span class="text-start mt-2 d-block" style={{"color": "rgb(168, 168, 168)"}}>
                                {/* <!-- Author name --> */}
                                <a href="#" class="text-white text-start p-1 me-1" style={{"fontSize": "14px", "fontWeight": "500"}}><i class="fas fa-user text-white"></i> Author Name</a>
                                |
                                {/* <!-- Date --> */}
                                <span class="text-start pb-3" style={{"color": "rgb(214, 214, 214)", "fontSize": "13px"}}>
                                    March 22, 2022
                                </span>
                            </span>
                        </p>
                    </div>
                </div>

                {/* <!-- side news items --> */}
                <div class="col-lg-8 col-12">
                    {/* <!-- item row --> */}
                    <div class="row mb-2">
                        {/* <!-- item img --> */}
                        <div class="col-lg-3 col-3">
                            {/* <!-- link --> */}
                            <a href="#">
                                <img src={pimg4} alt="item title" width="100%" height="141px" class="shadow" />
                            </a>
                            
                        </div>

                        {/* <!-- meta --> */}
                        <div class="col-lg-9 col-9">
                            {/* <!-- link --> */}
                            <a href="#">
                                {/* <!-- head --> */}
                                <p class="pb-1 text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias.
                                </p>

                                {/* <!-- author & date --> */}
                                <span class="text-start mt-2 d-block" style={{"color": "rgb(168, 168, 168)"}}>
                                    {/* <!-- Author name --> */}
                                    <a href="#" class="text-white text-start p-1 me-1" style={{"fontSize": "14px", "fontWeight": "500"}}><i class="fas fa-user text-white"></i> Author Name</a>
                                |
                                    {/* <!-- Date --> */}
                                    <span class="text-start pb-3" style={{"color": "rgb(214, 214, 214)", "fontSize": "14px"}}>
                                        March 22, 2022
                                    </span>
                                </span>

                                {/* <!-- icons container --> */}
                                <div class="d-flex justify-content-start align-items-center py-1">
                                    {/* <!-- Like --> */}
                                    <span class="text-start me-5" style={{"color": "#ffff", "cursor": "pointer"}} onclick="#">
                                        <i class="fas fa-thumbs-up"></i>
                                        <span class="text-start px-1" style={{"fontSize": "13px"}}>
                                            12k
                                        </span>
                                    </span>

                                    {/* <!-- dislike --> */}
                                    <span class="text-start me-5" style={{"color": "#ffff", "cursor": "pointer"}} onclick="#">
                                        <i class="fas fa-thumbs-down"></i>
                                        <span class="text-start px-1" style={{"fontSize": "13px"}}>
                                            12k
                                        </span>
                                    </span>

                                    {/* <!-- comment --> */}
                                    <span class="text-start me-5" style={{"color": "#ffff", "cursor": "pointer"}} onclick="#">
                                        <i class="fas fa-comments"></i>
                                        <span class="text-start px-1" style={{"fontSize": "13px"}}>
                                            12k
                                        </span>
                                    </span>

                                    {/* <!-- share --> */}
                                    <span class="text-start me-5" style={{"color": "#ffff", "cursor": "pointer"}} onclick="#">
                                        <i class="fas fa-share"></i>
                                        <span class="text-start px-1" style={{"fontSize": "13px"}}>
                                            12k
                                        </span>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <hr />
                    {/* <!-- item row --> */}
                    <div class="row mb-2">
                        {/* <!-- item img --> */}
                        <div class="col-lg-3 col-3">
                            {/* <!-- link --> */}
                            <a href="#">
                                <img src={pimg4} alt="item title" width="100%" height="141px" class="shadow" />
                            </a>
                            
                        </div>

                        {/* <!-- meta --> */}
                        <div class="col-lg-9 col-9">
                            {/* <!-- link --> */}
                            <a href="#">
                                {/* <!-- head --> */}
                                <p class="pb-1 text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias.
                                </p>

                                {/* <!-- author & date --> */}
                                <span class="text-start mt-2 d-block" style={{"color": "rgb(168, 168, 168)"}}>
                                    {/* <!-- Author name --> */}
                                    <a href="#" class="text-white text-start p-1 me-1" style={{"fontSize": "14px", "fontWeight": "500"}}><i class="fas fa-user text-white"></i> Author Name</a>
                                |
                                    {/* <!-- Date --> */}
                                    <span class="text-start pb-3" style={{"color": "rgb(214, 214, 214)", "fontSize": "14px"}}>
                                        March 22, 2022
                                    </span>
                                </span>

                                {/* <!-- icons container --> */}
                                <div class="d-flex justify-content-start align-items-center py-1">
                                    {/* <!-- Like --> */}
                                    <span class="text-start me-5" style={{"color": "#ffff", "cursor": "pointer"}} onclick="#">
                                        <i class="fas fa-thumbs-up"></i>
                                        <span class="text-start px-1" style={{"fontSize": "13px"}}>
                                            12k
                                        </span>
                                    </span>

                                    {/* <!-- dislike --> */}
                                    <span class="text-start me-5" style={{"color": "#ffff", "cursor": "pointer"}} onclick="#">
                                        <i class="fas fa-thumbs-down"></i>
                                        <span class="text-start px-1" style={{"fontSize": "13px"}}>
                                            12k
                                        </span>
                                    </span>

                                    {/* <!-- comment --> */}
                                    <span class="text-start me-5" style={{"color": "#ffff", "cursor": "pointer"}} onclick="#">
                                        <i class="fas fa-comments"></i>
                                        <span class="text-start px-1" style={{"fontSize": "13px"}}>
                                            12k
                                        </span>
                                    </span>

                                    {/* <!-- share --> */}
                                    <span class="text-start me-5" style={{"color": "#ffff", "cursor": "pointer"}} onclick="#">
                                        <i class="fas fa-share"></i>
                                        <span class="text-start px-1" style={{"fontSize": "13px"}}>
                                            12k
                                        </span>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Pagination --> */}
                    <div class="container-flud mx-0 mt-2 px-0 text-center">
                        <nav class="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a href="#" class="page-link" aria-label="Previous">
                                        <span class="text-success" aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>

                                <li class="page-item active">
                                    <a href="#" class="page-link text-white">1</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link text-success">2</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link text-success">3</a>
                                </li>

                                <li class="page-item">
                                    <a href="#" class="page-link" aria-label="Previous">
                                        <span class="text-success" aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            
        </div>
        {/* <!-- dont miss, socials and ads link end here --> */}

        {/* <!-- latest and popular posts begin here --> */}
        <div class="container-fluid position-relative my-3">
            {/* <!-- row --> */}
            <div class="row">
                {/* <!-- main latest news --> */}
                <div class="col-lg-8 col-12">
                    
                    <div class="row py-2">
                        {/* <!-- heading here --> */}
                        <span class="bg-warning text-start text-white text-uppercase p-2" style={{"width": "auto"}}>Latest Posts</span>
                        <hr />
                        {/* <!-- main news item --> */}
                        <div class="col-lg-6 col-6">
        
                            <div class="card bg-dark rounded-0 mb-2">
                                {/* <!-- image link --> */}
                                <a href="#" class="position-relative d-block">
                                    {/* <!-- img --> */}
                                    <img src={pimg4} alt="News title" width="100%" height="210px" />
                                    {/* <!-- category tag --> */}
                                    <span class="text-start text-white p-1 text-uppercase position-absolute bg-dark" style={{"fontSize": "13px", "fontWeight": "400", "bottom": "4px", "left": "2px"}}>Category Name</span>
                                </a>
                                {/* <!-- review text --> */}
                                <p class="card-text text-start text-white p-2">
                                    {/* <!-- text --> */}
                                    <span class="pb-1 d-block" style={{"fontSize": "14px"}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam!
                                    </span>
        
                                    <span class="d-block text-start" style={{"fontSize": "13px"}}>
                                        <a href="#">Read <i class="fas fa-angle-right"></i></a>
                                    </span>
        
                                    {/* <!-- author & date --> */}
                                    <span class="text-start mt-2 d-block" style={{"color": "rgb(168, 168, 168)"}}>
                                        {/* <!-- Author name --> */}
                                        <a href="#" class="text-white text-start p-1 me-1" style={{"fontSize": "14px", "fontWeight": "500"}}><i class="fas fa-user text-white"></i> Author Name</a>
                                        |
                                        {/* <!-- Date --> */}
                                        <span class="text-start pb-3" style={{"color": "rgb(214, 214, 214)", "fontSize": "13px"}}>
                                            March 22, 2022
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/*} <!-- main news item --> */}
                        <div class="col-lg-6 col-6">
        
                            <div class="card bg-dark rounded-0 mb-2">
                                {/* <!-- image link --> */}
                                <a href="#" class="position-relative d-block">
                                    {/* <!-- img --> */}
                                    <img src={pimg4} alt="News title" width="100%" height="210px" />
                                    {/* <!-- category tag --> */}
                                    <span class="text-start text-white p-1 text-uppercase position-absolute bg-dark" style={{"fontSize": "13px", "fontWeight": 400, "bottom": "4px", "left": "2px"}} >Category Name</span>
                                </a>
                                {/* <!-- review text --> */}
                                <p class="card-text text-start text-white p-2">
                                    {/* <!-- text --> */}
                                    <span class="pb-1 d-block" style={{"fontSize": "14px"}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam!
                                    </span>
        
                                    <span class="d-block text-start" style={{"fontSize": "13px"}}>
                                        <a href="#">Read <i class="fas fa-angle-right"></i></a>
                                    </span>
        
                                    {/* <!-- author & date --> */}
                                    <span class="text-start mt-2 d-block" style={{"color": "rgb(168, 168, 168)"}}>
                                        {/* <!-- Author name --> */}
                                        <a href="#" class="text-white text-start p-1 me-1" style={{"fontSize": "14px", "fontWeight": "500"}}><i class="fas fa-user text-white"></i> Author Name</a>
                                        |
                                        {/* <!-- Date --> */}
                                        <span class="text-start pb-3" style={{"color": "rgb(214, 214, 214)", "fontSize": "13px"}}>
                                            March 22, 2022
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
        
                        
                    </div>

                    {/* <!-- Pagination --> */}
                    <div class="container-flud mx-0 mt-2 px-0 text-center">
                        <nav class="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a href="#" class="page-link" aria-label="Previous">
                                        <span class="text-success" aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>

                                <li class="page-item active">
                                    <a href="#" class="page-link text-white">1</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link text-success">2</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link text-success">3</a>
                                </li>

                                <li class="page-item">
                                    <a href="#" class="page-link" aria-label="Previous">
                                        <span class="text-success" aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* <!-- popular posts --> */}
                <div class="col-lg-4 col-12">

                    <div class="row py-2 px-3">
                        {/* <!-- heading here --> */}
                        <span class="text-start text-warning text-uppercase p-2" style={{"width": "auto"}}>Popular Posts</span>
                        <hr />
                        <div class="col-12">
                            <ol class="text-white">
                                {/* <!-- News item --> */}
                                <li class="py-3">
                                    {/* <!-- news head --> */}
                                    <a href="#" class="h6 d-block text-start" style={{"color": "rgb(168, 168, 168)"}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum?
                                    </a>
                                    {/* <!-- author & date --> */}
                                    <span class="text-start mt-2 d-block" style={{"color": "rgb(168, 168, 168)"}}>
                                        {/* <!-- Author name --> */}
                                        <a href="#" class="text-white text-start p-1 me-1" style={{"fontSize": "14px", "fontWeight": "500"}}><i class="fas fa-user text-primary"></i> Author Name</a>
                                        |
                                        {/* <!-- Date --> */}
                                        <span class="text-start pb-3" style={{"color": "rgb(214, 214, 214)", "fontSize": "13px"}}>
                                            March 22, 2022
                                        </span>
                                    </span>
                                </li>

                                {/* <!-- News item --> */}
                                <li class="py-3">
                                    {/* <!-- news head --> */}
                                    <a href="#" class="h6 d-block text-start" style={{"color": "rgb(168, 168, 168)"}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum?
                                    </a>
                                    {/* <!-- author & date --> */}
                                    <span class="text-start mt-2 d-block" style={{"color": "rgb(168, 168, 168)"}}>
                                        {/* <!-- Author name --> */}
                                        <a href="#" class="text-white text-start p-1 me-1" style={{"fontSize": "14px", "fontWeight": "500"}}><i class="fas fa-user text-primary"></i> Author Name</a>
                                        |
                                        {/* <!-- Date --> */}
                                        <span class="text-start pb-3" style={{"color": "rgb(214, 214, 214)", "fontSize": "13px"}}>
                                            March 22, 2022
                                        </span>
                                    </span>
                                </li>

                                {/* <!-- News item --> */}
                                <li class="py-3">
                                    {/* <!-- news head --> */}
                                    <a href="#" class="h6 d-block text-start" style={{"color": "rgb(168, 168, 168)"}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum?
                                    </a>
                                    {/* <!-- author & date --> */}
                                    <span class="text-start mt-2 d-block" style={{"color": "rgb(168, 168, 168)"}}>
                                        {/* <!-- Author name --> */}
                                        <a href="#" class="text-white text-start p-1 me-1" style={{"fontSize": "14px", "fontWeight": "500"}}><i class="fas fa-user text-primary"></i> Author Name</a>
                                        |
                                        {/* <!-- Date --> */}
                                        <span class="text-start pb-3" style={{"color": "rgb(214, 214, 214)", "fontSize": "13px"}}>
                                            March 22, 2022
                                        </span>
                                    </span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        {/* <!-- latest posts and popular end here --> */}

        {/* <!-- break line --> */}
        <div class="container">
            <hr />
        </div>

        {/* <!-- Subscribe to our newsletter section begins here --> */}
        <div class="container-flud position-relative d-flex justify-content-between py-2 px-1">
            {/* <!-- form begins here --> */}
            <form action="#" method="post">
                {/* <!-- header --> */}
                <span class="h6 d-block text-start text-white text-uppercase">
                    NEWSLETTER
                </span>

                {/* <!-- danger line --> */}
                <span class="d-block py-1" style={{"height": "2px", "width": "60px", "borderTop": "1px solid red"}}></span>

                {/* <!-- parargraph desc. --> */}
                <p class="py-1 text-start text-white">
                    Subscribe to our newsletter for news,
                    <br />
                    updates, exclusives discounts and offers.
                </p>

                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                    <input type="email" class="form-control" id="form2Example1" required />
                    <label for="form2Example" class="form-label text-white">Enter Email</label>
                </div>

                {/* <!-- Subscribe button --> */}
                <button type="submit" class="btn btn-primary btn-block">Subscribe</button>
            </form>
            {/* <!-- Form ends here --> */}

            {/* <!-- stay connected section goes here --> */}
            <div class="row" style={{"width": "50%"}}>
                
                {/* <!-- Socials here --> */}
                <div class="col-12 py-1">
                    {/* <!-- Connect Us --> */}
                    <span class="text-start d-block h6 text-white">
                        Connect with us
                    </span>

                    {/* <!-- danger line --> */}
                    <span class="d-block py-1" style={{"height": "2px", "width": "60px", "borderTop": "1px solid red"}}></span>

                    {/* <!-- Facebook --> */}
                    <a href="#" class="d-block mb-2 px-2 w-100" style={{"fontSize": "39px"}}>
                        <i class="fab fa-facebook"></i>

                        {/* <!-- Follower count --> */}
                        <span class="text-white ms-1" style={{"fontSize": "14px"}}>
                            16, 193 fans
                        </span>

                    </a>

                    {/* <!-- Twitter --> */}
                    <a href="#" class="d-block mb-2 px-2" style={{"fontSize": "39px"}}>
                        <i class="fab fa-twitter"></i>

                        {/* <!-- Follower count --> */}
                        <span class="text-white ms-1" style={{"fontSize": "14px"}}>
                            16, 193 fans
                        </span>
                    </a>

                    {/* <!-- Instagram --> */}
                    <a href="#" class="d-block mb-2 px-2" style={{"fontSize": "39px"}}>
                        <i class="fab fa-instagram"></i>

                        {/* <!-- Follower count --> */}
                        <span class="text-white ms-1" style={{"fontSize": "14px"}}>
                            16, 193 fans
                        </span>
                    </a>
                </div>

            </div>
            {/* <!-- stay connected section ends here --> */}
        </div>
        {/* <!-- subscribe to our newsletter section ends here --> */}
        
    </div>
    {/* <!-- Blog home section ends here --> */}
    </>
  )
}

export default BlogPage;