import pimg4 from "../assets/images/pimg4.jpg";

const BlogItem = () =>{
    return (
        <>
        {/* <!-- Blog item home section begins here --> */}
    <div class="container-fluid px-0 pb-1" style={{"backgroundColor": "rgb(22, 22, 22)", "marginTop": "61px"}}>
        {/* <!-- Header braedcrumb --> */}
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="#" class="text-white">Category</a>
                </li>
                <li class="breadcrumb-item active">
                    <a href="#" class="text-white">News title</a>
                </li>
            </ol>
        </nav>
        {/* <!-- Header bredcrumb ends here --> */}

        {/* <!-- blog item heading here --> */}
        <span class="h5 d-block text-start text-white px-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus.
        </span>

        {/* <!-- Blog item description --> */}
        <p class="text-start p-1" style={{"color": "rgb(168, 168, 168)"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint nulla ea laudantium, tempore nisi!
            Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>

        {/* <!-- Image --> */}
        <div class="container-fluid py-2 pb-3">
            <img src={pimg4} width="100%" height="360px" alt="News Title" />

            {/* <!-- icons container --> */}
            <div class="d-flex justify-content-start align-items-center py-3">
                {/* <!-- Like --> */}
                <span class="text-start me-5" style={{"color": "#ffff", "cursor": "pointer"}} title="like">
                    <i class="fas fa-thumbs-up"></i>
                    <span class="text-start px-1" style={{"fontSize": "13px"}}>
                        12k
                    </span>
                </span>

                {/* <!-- dislike --> */}
                <span class="text-start me-5" style={{"color": "#ffff", "cursor": "pointer"}} title="dislike">
                    <i class="fas fa-thumbs-down"></i>
                    <span class="text-start px-1" style={{"fontSize": "13px"}}>
                        12k
                    </span>
                </span>

                {/* <!-- comment --> */}
                <span class="text-start me-5" style={{"color": "#ffff", "cursor": "pointer"}} title="comment">
                    <i class="fas fa-comments"></i>
                    <span class="text-start px-1" style={{"fontSize": "13px"}}>
                        12k
                    </span>
                </span>

                {/* <!-- share --> */}
                <span class="text-start me-5" style={{"color": "#ffff", "cursor": "pointer"}} title="share">
                    <i class="fas fa-share"></i>
                    <span class="text-start px-1" style={{"fontSize": "13px"}}>
                        12k
                    </span>
                </span>
            </div>
        </div>
        
        {/* <!-- author name and date posted as well as their socials --> */}
        <div class="container-fluid ms-1 mt-1" style={{"borderLeft": "2px solid #007E33"}}>
            {/* <!-- Author Name --> */}
            <span class="text-start text-white d-block">
                <i class="fas fa-user me-1"></i>

                Author Name
            </span>

            {/* <!-- Date --> */}
            <span class="text-start d-block py-1" style={{"color": "rgb(168, 168, 168)"}}>
                <i class="fas fa-calendar me-1"></i>
                11 Aug, 2022
            </span>


            {/* <!-- Socials --> */}
            <span class="d-flex justify-content-start py-1">
                {/* <!-- FB --> */}
                <a href="#" class="text-primary me-3">
                    <i class="fab fa-facebook"></i>
                </a>

                {/* <!-- IG --> */}
                <a href="#" class="text-primary me-3">
                    <i class="fab fa-instagram"></i>
                </a>

                {/* <!-- Twitter --> */}
                <a href="#" class="text-primary me-3">
                    <i class="fab fa-twitter"></i>
                </a>
            </span>

        </div>


        {/* <!-- Blog content goes here --> */}
        <div class="container-fluid text-white py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi impedit alias veritatis distinctio illo, neque beatae provident nulla sapiente rem blanditiis obcaecati quod suscipit veniam, praesentium dolores? Quas enim ea, sapiente sint officia ipsam minima suscipit molestiae eveniet commodi! Officiis voluptatum iure nostrum, dolore soluta, natus, alias itaque enim aut suscipit id. At dolores officia maxime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam iusto hic excepturi minus suscipit, enim officiis sed autem, vel quae neque quam tempore animi corrupti debitis repellendus. Maxime eum sequi perspiciatis assumenda, facere ab officiis esse modi molestiae? Tenetur odio ipsa obcaecati nostrum est quam dolore atque! Impedit natus explicabo, dolorum facilis eligendi deleniti quasi a asperiores culpa, nihil voluptatum magnam illo eius blanditiis aliquid. Voluptatum, eos laudantium harum fugiat numquam perferendis est nam, voluptates repellat rem voluptatem nostrum dolor. Sit ducimus magnam explicabo molestiae similique animi. Soluta numquam laboriosam, quo voluptatum perspiciatis beatae velit labore enim dolorem corporis quis aspernatur nam expedita obcaecati, cupiditate ipsa quidem nihil at debitis repellendus nobis culpa iusto. Est cupiditate recusandae consequuntur soluta ratione velit ex repellendus cum rem ducimus laborum, quasi placeat labore aliquam nihil dolore enim hic accusantium possimus. Vitae necessitatibus itaque perspiciatis deserunt natus recusandae explicabo amet labore ex ab!
        </div>
        {/* <!-- Blog content ends here --> */}

        {/* <!-- related and popular posts begin here --> */}
        <div class="container-fluid position-relative my-3">
            {/* <!-- row --> */}
            <div class="row">
                {/* <!-- main latest news --> */}
                <div class="col-lg-8 col-12">
                    
                    <div class="row py-2">
                        {/* <!-- heading here --> */}
                        <span class="bg-warning text-start text-white text-uppercase p-2" style={{"width": "auto"}}>Related</span>
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
        {/* <!-- related posts and popular end here --> */}

        {/* <!-- Subscribe to our newsletter section begins here --> */}
        <div class="container-flud position-relative d-flex justify-content-between py-2 px-1">
            {/* <!-- form begins here --> */}
            <form action="#" method="post">
                {/* <!-- header --> */}
                <span class="h6 d-block text-start text-white text-uppercase">
                    NEWSLETTER
                </span>

                {/* <!-- danger line --> */}
                <span class="d-block py-1" style={{"height": "2px", "width": "60px","borderTop": "1px solid red"}}></span>

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
                    <span class="d-block py-1" style={{"height": "2px", "width": "60px","borderTop": "1px solid red"}}></span>

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
    {/* <!-- Blog item home section ends here --> */}

        </>
    )
}

export default BlogItem;