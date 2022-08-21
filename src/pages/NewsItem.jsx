const NewsItem = () => {
  return (
    // <!-- main section starts here -->
  <main className="pt-5 mt-5">
    <div className="container-fluid mb-4">
      {/* <!-- News image --> */}
      <section className="blog-banner" id="blog-banner">
        {/* <!-- header --> */}
      <span className="heda d-block h5 text-start mb-3">
       <span className="fw-bold">Todays'</span>
       <span> Headlines</span>
     </span>
        {/* <!-- img --> */}
        <a href="#">
          <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="News Header" height="330px" width="100%" />
        </a>
        {/* <!-- icons --> */}
        <div className="icons-container text-start mt-2">
          {/* <!-- Eye --> */}
          <span className="blog-icon me-4">
            <i className="fa-solid fa-eye"></i>
            <span className="ms-1 see-count text-uppercase">1.5K</span>
          </span>
          {/* <!-- comments --> */}
          <span className="blog-icon me-4">
            <i className="fa-solid fa-message"></i>
            <span className="ms-1 comment-count text-uppercase">793</span>
          </span>
          {/* <!-- share --> */}
          <span className="blog-icon">
            <i className="fa-solid fa-share-nodes"></i>
            <span className="ms-1 share-count text-uppercase">292</span>
          </span>
        </div>
        {/* <!-- Blog heading & read more btn --> */}
        <div className="bg-heading-btn-container mt-3">
          {/* <!-- Blog header --> */}
          <span className="h6 d-block text-start blog-header fw-bold">
            Dems sees one last chance to boost his new album <a href="#">Come Get Me</a>
            <hr />
          </span>
          {/* <!-- Blog contents begins here --> */}
          <p className="blog-contents">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam modi ipsum eius. A necessitatibus itaque porro sit. Deleniti totam quisquam amet at delectus ratione beatae, non commodi similique et aliquid autem veniam aspernatur facere quam eligendi veritatis temporibus id harum impedit optio ipsa possimus. Voluptate, commodi, expedita laborum natus sequi enim delectus itaque aperiam amet ipsa facere ea. Rerum deserunt animi totam eius adipisci, officiis earum ab quis sunt saepe, dolores perferendis sapiente sed facilis itaque accusamus nesciunt modi! Perferendis soluta, officia vel odit ea voluptatem vero quos dolores voluptate optio magnam autem est amet quibusdam rem ab accusamus consequatur.
          </p>
          {/* <!-- Blog contents ends here --> */}

          {/* <!-- Comments and coment section begins here --> */}
          <div className="comments-section">
            {/* <!-- post comments form --> */}
            <div className="post-comment col-12">
              <form action="#" method="post">
                <hr />
                <span className="h5 form-heda d-block">Comments</span>
                <div className="col-12 text-end">
                  <label for="comment"></label>
                  <input type="text" name="comment" placeholder="Enter comment" required />
                  {/* <!-- post comment btn --> */}
                  <button type="submit" className="btn btn-primary btn-sm">Post Comment</button>
                </div>
              </form>
            </div>
            {/* <!-- posted comments section begins here --> */}
            <div className="posted-comment row mt-2">
              {/* <!-- img container --> */}
              <div className="col-2">
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User name" height="131px" width="100%" />
              </div>
              {/* <!-- comment container --> */}
              <div className="col-12">
                <p className="news-comment">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              {/* <!-- form for likes and replies --> */}
              <div className="col-12">
                <form action="#" method="post">
                   {/* <!-- icons --> */}
                  <div className="icons-container text-start">
                    {/* <!-- Eye --> */}
                    <span className="blog-icon me-4">
                      <i className="fa-solid fa-thumbs-up"></i>
                      <span className="ms-1 see-count text-uppercase">1.5K</span>
                    </span>
                    {/* <!-- reply --> */}
                    <span className="blog-icon me-4">
                      <i className="fa-solid fa-message"></i>
                      <span className="ms-1 reply-count text-uppercase">12</span>
                    </span>
                    {/* <!-- flag --> */}
                    <span className="blog-icon text-danger">
                      <i className="fa-solid fa-flag"></i>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- posted comments scetion ends here --> */}
          </div>
          {/* <!-- Comments and comment section ends here --> */}

          {/* <!-- Prev and Next Buttons conatiner goes here --> */}
          <div className="col-12 text-center">
            <hr />
            <button type="button" className="btn btn-sm btn-outline-success mx-2 navbut prev-navbut">
              <i className="fa-solid fa-arrow-left-long"></i>
              <span className="navtext">Prev</span>
            </button>
            <button type="button" className="btn btn-sm btn-outline-success mx-2 navbut next-navbut">
              <span className="navtext">Next</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          {/* <!-- Prev and next buttons container ends here --> */}

        </div>
        {/* <!-- Related News section begins here --> */}
        <div className="col-12 related-news mt-2">
          <div className="heda col-12">
            <span className="h6 d-block text-start">
              Related News
            </span>
          </div>
          <div className="row">
            {/* <!-- News Items --> */}
            <div className="col-lg-3 col-12">
              <a href="#" className="d-block">
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="131px" width="100%" />
              </a>
              {/* <!-- Nwes link plus news head --> */}
              <a href="#" className="news-link d-block mt-1 text-decoration-none">
                <span className="h6 d-block news-head">Lorem ipsum dolor sit.</span>
              </a>
              {/* <!-- Read More link btn --> */}
              <a href="#" className="read-more-news">
                Read More 
              </a>
            </div>
            {/* <!-- News Items --> */}
            <div className="col-lg-3 col-12">
              <a href="#" className="d-block">
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="131px" width="100%" />
              </a>
              {/* <!-- Nwes link plus news head --> */}
              <a href="#" className="news-link d-block mt-1 text-decoration-none">
                <span className="h6 d-block news-head">Lorem ipsum dolor sit.</span>
              </a>
              {/* <!-- Read More link btn --> */}
              <a href="#" className="read-more-news">
                Read More 
              </a>
            </div>
            {/* <!-- News Items --> */}
            <div className="col-lg-3 col-12">
              <a href="#" className="d-block">
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="131px" width="100%" />
              </a>
              {/* <!-- Nwes link plus news head --> */}
              <a href="#" className="news-link d-block mt-1 text-decoration-none">
                <span className="h6 d-block news-head">Lorem ipsum dolor sit.</span>
              </a>
              {/* <!-- Read More link btn --> */}
              <a href="#" className="read-more-news">
                Read More 
              </a>
            </div>
            {/* <!-- News Items --> */}
            <div className="col-lg-3 col-12">
              <a href="#" className="d-block">
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="131px" width="100%" />
              </a>
              {/* <!-- Nwes link plus news head --> */}
              <a href="#" className="news-link d-block mt-1 text-decoration-none">
                <span className="h6 d-block news-head">Lorem ipsum dolor sit.</span>
              </a>
              {/* <!-- Read More link btn --> */}
              <a href="#" className="read-more-news">
                Read More 
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Related News section ends here --> */}
      </section>
    </div>
  </main>
   // main section ends here 

  )
}

export default NewsItem;