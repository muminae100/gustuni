import { Link } from "react-router-dom";

const News = () => {
  return (
    
//   <!-- main section starts here -->
  <main className="pt-5 mt-3">
    <div className="container-fluid mb-4">
     <div className="row mt-2">
       {/* <!-- main content begins here --> */}
       <div className="col-8">
         {/* <!-- blog banner section begins here --> */}
         <section className="blog-banner" id="blog-banner">
           {/* <!-- header --> */}
         <span className="heda d-block h5 text-start mb-3">
          <span className="fw-bold">Todays'</span>
          <span>Headlines</span>
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
             </span>
             {/* <!-- Read more btn --> */}
             <a href="#" className="btn btn-outline-success read-more-btn btn-sm">
               Read More 
             </a>
           </div>
         </section>
         {/* <!-- blog banner section ends here --> */}

         {/* <!-- Video section begins here --> */}
         <section className="blog-video my-4" id="blog-video">
           {/* <!-- Header --> */}
           <div className="header content d-flex justify-content-between mb-3">
             {/* <!-- header --> */}
             <span className="d-block h5 fw-bold text-start head">Video</span>
             {/* <!-- See all --> */}
             <a href="#" className="see-all text-decoration-none text-dark">See all </a>
           </div>
           <div className="row">
             {/* <!-- videos --> */}
             <div className="col-lg-6 col-12 vida-cont">
                <iframe height="189px" width="100%" className="rounded-4"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
               {/* <video src="./assets/videos/VID-20211112-WA0004.mp4" alt="Video Name" ></video> */}
               {/* <!-- video header --> */}
               <span className="h6 heda d-block text-start fw-bold mt-3">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
               {/* <!-- Play button --> */}
               
             </div>
             {/* <!-- videos --> */}
             <div className="col-lg-6 col-12 vida-cont">
             <iframe height="189px" width="100%" className="rounded-4"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
        
                {/* <!-- video header --> */}
                <span className="h6 heda d-block text-start fw-bold mt-3">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                {/* <!-- Play button --> */}
                
             </div>
           </div>
         </section>
         {/* <!-- Video section ends here --> */}

         {/* <!-- Latest News section begins here --> */}
         <section className="blog-latest" id="blog-latest">
            {/* <!-- Header --> */}
            <div className="header content d-flex justify-content-between mb-3">
              {/* <!-- header --> */}
              <span className="d-block h5 fw-bold text-start head">Latest News</span>
              {/* <!-- See all --> */}
              <a href="#" className="see-all text-decoration-none">See all </a>
            </div>
            {/* <!-- Latest news goes here --> */}
            <div className="row">
              {/* <!-- Contest News --> */}
              <div className="col-lg-6 col-12 blog-latest-news contest-news mb-3">
                {/* <!-- img --> */}
                <Link to="/news/1">
                  <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="News Item Header" height="210px" width="100%" />
                </Link>
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
                {/* <!-- heading  --> */}
                <span className="h6 heda d-block fw-bold text-start mt-2">Gustuni's #001 Contest</span>
                {/* <!-- Event description --> */}
                <p className="events-description mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, officiis error. Sapiente officiis suscipit earum.
                </p>
                {/* <!-- Learn More btn  --> */}
                <a href="#" className="learn-more text-success text-decoration-none">
                  Learn More 
                </a>
              </div>
              {/* <!-- Other News --> */}
              <div className="col-lg-6 col-12 blog-latest-news other-news mb-3">
                {/* <!-- img --> */}
                <Link to="/news/2">
                  <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="News Item Header" height="210px" width="100%" />
                </Link>
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
                {/* <!-- heading  --> */}
                <span className="h6 heda d-block fw-bold text-start mt-2">Gustuni's #001 Contest</span>
                {/* <!-- Event description --> */}
                <p className="events-description mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, officiis error. Sapiente officiis suscipit earum.
                </p>
                {/* <!-- Learn More btn  --> */}
                <a href="#" className="learn-more text-success text-decoration-none">
                  Learn More 
                </a>
              </div>
              {/* <!-- Other News --> */}
              <div className="col-lg-6 col-12 blog-latest-news other-news mb-3">
                {/* <!-- img --> */}
                <a href="#">
                  <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="News Item Header" height="210px" width="100%" />
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
                {/* <!-- heading  --> */}
                <span className="h6 heda d-block fw-bold text-start mt-2">Gustuni's #001 Contest</span>
                {/* <!-- Event description --> */}
                <p className="events-description mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, officiis error. Sapiente officiis suscipit earum.
                </p>
                {/* <!-- Learn More btn  --> */}
                <a href="#" className="learn-more text-success text-decoration-none">
                  Learn More 
                </a>
              </div>
              {/* <!-- Other News --> */}
              <div className="col-lg-6 col-12 blog-latest-news other-news mb-3">
                {/* <!-- img --> */}
                <a href="#">
                  <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="News Item Header" height="210px" width="100%" />
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
                {/* <!-- heading  --> */}
                <span className="h6 heda d-block fw-bold text-start mt-2">Gustuni's #001 Contest</span>
                {/* <!-- Event description --> */}
                <p className="events-description mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, officiis error. Sapiente officiis suscipit earum.
                </p>
                {/* <!-- Learn More btn  --> */}
                <a href="#" className="learn-more text-success text-decoration-none">
                  Learn More 
                </a>
              </div>
            </div>
         </section>
         {/* <!-- Latest News section ends here --> */}
       </div>
       {/* <!-- main content ends here --> */}

       {/* <!-- side content begins here --> */}
       <div className="col-4">
         {/* <!-- popular posts section begins here --> */}
         <section className="news-popular" id="news-popular">
           {/* <!-- Header --> */}
           <span className="h6 d-block text-start heda">
             <span className="fw-bold">Popular</span>
             <span>Posts</span>
           </span>

           {/* <!-- News start here --> */}
           <div className="row">
             {/* <!-- news item --> */}
             <div className="col-12 mb-3">
               {/* <!-- img --> */}
               <a href="#">
                 <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="News Heading" height="150px" width="100%" />
               </a>
               {/* <!-- icons --> */}
               <div className="icons-container text-start mt-2">
                {/* <!-- Eye --> */}
                <span className="blog-icon me-4">
                  <i className="fa-solid fa-eye"></i>
                  <span className="ms-1 see-count text-uppercase">1.5K</span>
                 </span>
               </div>
               {/* <!-- heading  --> */}
               <span className="h6 heda d-block fw-bold text-start mt-2">Gustuni's #001 Contest</span>
             </div>
             {/* <!-- news item --> */}
             <div className="col-12 mb-3">
               {/* <!-- img --> */}
               <a href="#">
                 <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="News Heading" height="150px" width="100%" />
               </a>
               {/* <!-- icons --> */}
               <div className="icons-container text-start mt-2">
                {/* <!-- Eye --> */}
                <span className="blog-icon me-4">
                  <i className="fa-solid fa-eye"></i>
                  <span className="ms-1 see-count text-uppercase">1.5K</span>
                 </span>
               </div>
               {/* <!-- heading  --> */}
               <span className="h6 heda d-block fw-bold text-start mt-2">Gustuni's #001 Contest</span>
             </div>
             {/* <!-- news item --> */}
             <div className="col-12 mb-3">
               {/* <!-- img --> */}
               <a href="#">
                 <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="News Heading" height="150px" width="100%" />
               </a>
               {/* <!-- icons --> */}
               <div className="icons-container text-start mt-2">
                {/* <!-- Eye --> */}
                <span className="blog-icon me-4">
                  <i className="fa-solid fa-eye"></i>
                  <span className="ms-1 see-count text-uppercase">1.5K</span>
                 </span>
               </div>
               {/* <!-- heading  --> */}
               <span className="h6 heda d-block fw-bold text-start mt-2">Gustuni's #001 Contest</span>
             </div>
             {/* <!-- news item --> */}
             <div className="col-12 mb-3">
               {/* <!-- img --> */}
               <a href="#">
                 <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="News Heading" height="150px" width="100%" />
               </a>
               {/* <!-- icons --> */}
               <div className="icons-container text-start mt-2">
                {/* <!-- Eye --> */}
                <span className="blog-icon me-4">
                  <i className="fa-solid fa-eye"></i>
                  <span className="ms-1 see-count text-uppercase">1.5K</span>
                 </span>
               </div>
               {/* <!-- heading  --> */}
               <span className="h6 heda d-block fw-bold text-start mt-2">Gustuni's #001 Contest</span>
             </div>
             {/* <!-- news item --> */}
             <div className="col-12 mb-3">
               {/* <!-- img --> */}
               <a href="#">
                 <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="News Heading" height="150px" width="100%" />
               </a>
               {/* <!-- icons --> */}
               <div className="icons-container text-start mt-2">
                {/* <!-- Eye --> */}
                <span className="blog-icon me-4">
                  <i className="fa-solid fa-eye"></i>
                  <span className="ms-1 see-count text-uppercase">1.5K</span>
                 </span>
               </div>
               {/* <!-- heading  --> */}
               <span className="h6 heda d-block fw-bold text-start mt-2">Gustuni's #001 Contest</span>
             </div>
           </div>

           {/* <!-- Subscribe to our newsletter --> */}
           <div className="row mb-4">
             {/* <!-- form --> */}
             <div className="col-12 news-letter">
               <hr />
               <form action="#" method="post">
                 {/* <!-- header --> */}
                 <span className="h6 d-block text-center fw-bold heda">Subscribe To Our Newsletter</span>
                 {/* <!-- email input --> */}
                 <div className="col-12 text-center">
                   <label for="email"></label>
                   <input type="email" name="email" placeholder="Enter e-mail address" required />
                 </div>
                 {/* <!-- Submit button --> */}
                 <div className="col-12 text-center my-3">
                   <button className="btn btn-primary sub-btn btn-md" type="submit">
                     Subscribe
                   </button>
                 </div>
               </form>
               <hr />
             </div>
           </div>

           {/* <!-- Follow us on social media --> */}
           <div className="row">
             <div className="col-12">
               <span className="d-block h6 heda text-center mt-3 fw-bold">Follow Us On Our Socials</span>
               <div className="gutsuni-socials text-center py-3">
                 {/* <!-- Facebook --> */}
                 <a href="#" className="gut-icons btn btn-success btn-md m-1">
                   <i className="fab fa-facebook"></i>
                  </a>
                 {/* <!-- Instagram --> */}
                 <a href="#" className="gut-icons btn btn-success btn-md m-1">
                   <i className="fab fa-instagram"></i>
                  </a>
                 {/* <!-- Twitter --> */}
                 <a href="#" className="gut-icons btn btn-success btn-md m-1">
                   <i className="fab fa-twitter"></i>
                  </a>
                 {/* <!-- Youtube --> */}
                 <a href="#" className="gut-icons btn btn-success btn-md m-1">
                   <i className="fab fa-youtube"></i>
                  </a>
                 {/* <!-- LimkedIn --> */}
                 <a href="#" className="gut-icons btn btn-success btn-md m-1">
                   <i className="fab fa-linkedin"></i>
                  </a>
               </div>
             </div>
           </div>
         </section>
         {/* <!-- Popular posts section ends here --> */}
       </div>
       {/* <!-- side content ends here --> */}
     </div>
    </div>
  </main>
  )
}

export default News;