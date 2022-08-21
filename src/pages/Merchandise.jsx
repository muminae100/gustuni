import { Link } from "react-router-dom";

const Merchandise = () => {
  return (
    <>
 {/* <!-- main section starts here --> */}
 <main class="pt-5 p-relative">
    <div class="container-fluid pt-2 mx-0 px-0 creators-container">
      {/* <!-- Background image goes here --> */}
      <div class="background-img col-12">
        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="120px" width="100%" />
      </div>

      {/* <!-- Profile Photo and followers count show here --> */}
      <div class="row profile-followers-container pt-2">
        <div class="col-12 mt-5 px-3 text-center">
          {/* <!-- profile img --> */}
          <a href="#" class="d-block col-md-12 col-6 text-center">
            <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Username" width="171px" height="171px" class="rounded-circle text-center shadow" />
          </a>
          {/* <!-- Username --> */}
          <span class="d-block h6 text-center a-name">Unauila Othanki</span>
          {/* <!-- Followers and following container --> */}
          <div class="container-fluid d-flex justify-content-center mx-0 px-0 my-3">
            {/* <!-- Followers --> */}
            <a href="./followers.html" class="followers center me-4">
              <span class="h6 d-block hoda">Followers</span>
              <span class="followers-count d-block h6 text-center i-count">9,753</span>
            </a>
            {/* <!-- Following --> */}
            <a href="./following.html" class="followers center me-4">
              <span class="h6 d-block hoda">Following</span>
              <span class="following-count d-block h6 text-center i-count">1,753</span>
            </a>
            {/* <!-- user badge --> */}
            <a href="./pricing.html" class="me-4 user-pricing" title="pricing package">
               <button class="btn btn-primary text-center btn-sm" title="user badge">
                <i class="fa-solid fa-star"></i>
               </button>
            </a>

          </div>
          {/* <!-- Follow button & tip btn --> */}
         <div class="fbtn-tipbtn-container text-center">
          <a href="./editprofile.html" class="btn btn-success f-btn btn-sm me-1" title="Edit profile">Edit Profile <i class="fa-solid fa-pen"></i></a>
          <a href="#" class="btn btn-info text-white f-btn btn-sm me-1" title="Profile insights"><i class="fa-solid fa-chart-line"></i></a>
          <a href="./settings.html" class="btn btn-danger f-btn btn-sm me-1" title="Account settings"><i class="fa-solid fa-gear"></i></a>
         </div>
        </div>
      </div>

     {/* <!-- CONTAINER FOR TRACKS  --> */}
     <div class="container-fluid mt-4 bg-white d-flex align-items-center flex-column">

      {/* <!-- header --> */}
      <div class="container-fluid headan d-flex justify-content-between">
        {/* <!-- header here --> */}
        <span class="h6 headani d-block text-start">
          <strong>Merchandise</strong>
        </span>

        <a href="/upload.html" class="btn btn-success btn-md">
          Upload Album
        </a>
      </div>

      {/* <!-- rows container for list of uploaded tracks --> */}
      <div class="container-fluid my-3 ulapoty">
        {/* <!-- song item --> */}
        <div class="row rounded shadow py-3 px-0 mb-2 ulikan">
          {/* <!-- song image --> */}
          <div class="col-lg-2 col-3 coto">
            <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" width="100px" height="90px" alt="song name" class="rounded" />
            {/* <!-- Play button --> */}
            <button class="d-lg-block d-none btn text-success btn-sm rounded-circle p-1 shadow boto">
              <i class="fas fa-play"></i>
            </button>
          </div>

          {/* <!-- song metadata --> */}
          <div class="col-lg-8 col-5">
            {/* <!-- song-name --> */}
            <span class="h6 song-name d-block text-start">
             <strong> Album Name</strong>
            </span>

            {/* <!-- Artist(s) name(s) --> */}
            <span class="artist-name d-block text-start">
              Artist Name
            </span>

            {/* <!-- Number of tracks --> */}
            <span class="artist-name d-block text-start">
              Tracks: <span>10</span>
            </span>

            {/* <!-- price --> */}
            <span class="price text-info">
              <i class="fas fa-file-arrow-down"></i>
             <strong> KSH 1000</strong>
            </span>

            {/* <!-- count number --> */}
            <div class="count m-0 p-0">

              {/* <!-- play --> */}
              <span>
                <i class="fas fa-headphones"></i>
                {/* <!-- play count --> */}
                <span class="play-count">
                  25k
                </span>
              </span>

              {/* <!-- downloads --> */}
              <span>
                <i class="fas fa-download"></i>
                {/* <!-- downloads count --> */}
                <span class="download-count">
                  2, 879
                </span>
              </span>
            </div>
          </div>

          {/* <!-- edit and insights button --> */}
          <div class="col-lg-2 col-4">
            <div class="container-fluid m-0 p-0 d-flex justify-content-end flex-column">
              {/* <!-- Edit --> */}
              <Link to="/editMerchandise" class="btn btn-primary btn-sm d-block mb-2">
                <i class="fas fa-pen"></i>
                Edit
              </Link>

              {/* <!-- Insights --> */}
              <a href="#" class="btn btn-info btn-sm d-block mb-2">
                <i class="fas fa-chart-line"></i>
                Insights
              </a>

                {/* <!-- remove --> */}
                <a href="#" class="btn btn-danger btn-sm d-block">
                    <i class="fas fa-trash"></i>
                    Remove
                  </a>
            </div>
          </div>
        </div>
        
        {/* <!-- song item --> */}
        <div class="row rounded shadow py-3 px-0 mb-2 ulikan">
          {/* <!-- song image --> */}
          <div class="col-lg-2 col-3 coto">
            <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" width="100px" height="90px" alt="song name" class="rounded" />
            {/* <!-- Play button --> */}
            <button class="d-lg-block d-none btn text-success btn-sm rounded-circle p-1 shadow boto">
              <i class="fas fa-play"></i>
            </button>
          </div>

          {/* <!-- song metadata --> */}
          <div class="col-lg-8 col-5">
            {/* <!-- song-name --> */}
            <span class="h6 song-name d-block text-start">
             <strong> Album Name</strong>
            </span>

            {/* <!-- Artist(s) name(s) --> */}
            <span class="artist-name d-block text-start">
              Artist Name
            </span>

            {/* <!-- Number of tracks --> */}
            <span class="artist-name d-block text-start">
                Tracks: <span>10</span>
              </span>

            {/* <!-- price --> */}
            <span class="price text-info">
              <i class="fas fa-file-arrow-down"></i>
             <strong> FREE</strong>
            </span>

            {/* <!-- count number --> */}
            <div class="count m-0 p-0">

              {/* <!-- play --> */}
              <span>
                <i class="fas fa-headphones"></i>
                {/* <!-- play count --> */}
                <span class="play-count">
                  25k
                </span>
              </span>

              {/* <!-- downloads --> */}
              <span>
                <i class="fas fa-download"></i>
                {/* <!-- downloads count --> */}
                <span class="download-count">
                  2, 879
                </span>
              </span>
            </div>
          </div>

          {/* <!-- edit and insights button --> */}
          <div class="col-lg-2 col-4">
            <div class="container-fluid m-0 p-0 d-flex justify-content-end flex-column">
              {/* <!-- Edit --> */}
              <a href="#" class="btn btn-primary btn-sm d-block mb-2">
                <i class="fas fa-pen"></i>
                Edit
              </a>

              {/* <!-- Insights --> */}
              <a href="#" class="btn btn-info btn-sm d-block mb-2">
                <i class="fas fa-chart-line"></i>
                Insights
              </a>

                {/* <!-- remove --> */}
                <a href="#" class="btn btn-danger btn-sm d-block">
                    <i class="fas fa-trash"></i>
                    Remove
                  </a>

            </div>
          </div>
        </div>

        {/* <!-- song item --> */}
        <div class="row rounded shadow py-3 px-0 mb-2 ulikan">
          {/* <!-- song image --> */}
          <div class="col-lg-2 col-3 coto">
            <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" width="100px" height="90px" alt="song name" class="rounded" />
            {/* <!-- Play button --> */}
            <button class="d-lg-block d-none btn text-success btn-sm rounded-circle p-1 shadow boto">
              <i class="fas fa-play"></i>
            </button>
          </div>

          {/* <!-- song metadata --> */}
          <div class="col-lg-8 col-5">
            {/* <!-- song-name --> */}
            <span class="h6 song-name d-block text-start">
             <strong> Album Name</strong>
            </span>

            {/* <!-- Artist(s) name(s) --> */}
            <span class="artist-name d-block text-start">
              Artist Name
            </span>

            {/* <!-- Number of tracks --> */}
            <span class="artist-name d-block text-start">
              Tracks: <span>10</span>
            </span>

            {/* <!-- price --> */}
            <span class="price text-info">
              <i class="fas fa-file-arrow-down"></i>
             <strong> KSH 1000</strong>
            </span>

            {/* <!-- count number --> */}
            <div class="count m-0 p-0">

              {/* <!-- play --> */}
              <span>
                <i class="fas fa-headphones"></i>
                {/* <!-- play count --> */}
                <span class="play-count">
                  25k
                </span>
              </span>

              {/* <!-- downloads --> */}
              <span>
                <i class="fas fa-download"></i>
                {/* <!-- downloads count --> */}
                <span class="download-count">
                  2, 879
                </span>
              </span>
            </div>
          </div>

          {/* <!-- edit and insights button --> */}
          <div class="col-lg-2 col-4">
            <div class="container-fluid m-0 p-0 d-flex justify-content-end flex-column">
              {/* <!-- Edit --> */}
              <a href="/editMerchandise" class="btn btn-primary btn-sm d-block mb-2">
                <i class="fas fa-pen"></i>
                Edit
              </a>

              {/* <!-- Insights --> */}
              <a href="#" class="btn btn-info btn-sm d-block mb-2">
                <i class="fas fa-chart-line"></i>
                Insights
              </a>

                {/* <!-- remove --> */}
                <a href="#" class="btn btn-danger btn-sm d-block">
                    <i class="fas fa-trash"></i>
                    Remove
                  </a>
            </div>
          </div>
        </div>

        {/* <!-- song item --> */}
        <div class="row rounded shadow py-3 px-0 mb-2 ulikan">
          {/* <!-- song image --> */}
          <div class="col-lg-2 col-3 coto">
            <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" width="100px" height="90px" alt="song name" class="rounded" />
            {/* <!-- Play button --> */}
            <button class="d-lg-block d-none btn text-success btn-sm rounded-circle p-1 shadow boto">
              <i class="fas fa-play"></i>
            </button>
          </div>

          {/* <!-- song metadata --> */}
          <div class="col-lg-8 col-5">
            {/* <!-- song-name --> */}
            <span class="h6 song-name d-block text-start">
             <strong> Album Name</strong>
            </span>

            {/* <!-- Artist(s) name(s) --> */}
            <span class="artist-name d-block text-start">
              Artist Name
            </span>

            {/* <!-- Number of tracks --> */}
            <span class="artist-name d-block text-start">
                Tracks: <span>10</span>
              </span>

            {/* <!-- price --> */}
            <span class="price text-info">
              <i class="fas fa-file-arrow-down"></i>
             <strong> FREE</strong>
            </span>

            {/* <!-- count number --> */}
            <div class="count m-0 p-0">

              {/* <!-- play --> */}
              <span>
                <i class="fas fa-headphones"></i>
                {/* <!-- play count --> */}
                <span class="play-count">
                  25k
                </span>
              </span>

              {/* <!-- downloads --> */}
              <span>
                <i class="fas fa-download"></i>
                {/* <!-- downloads count --> */}
                <span class="download-count">
                  2, 879
                </span>
              </span>
            </div>
          </div>

          {/* <!-- edit and insights button --> */}
          <div class="col-lg-2 col-4">
            <div class="container-fluid m-0 p-0 d-flex justify-content-end flex-column">
              {/* <!-- Edit --> */}
              <a href="#" class="btn btn-primary btn-sm d-block mb-2">
                <i class="fas fa-pen"></i>
                Edit
              </a>

              {/* <!-- Insights --> */}
              <a href="#" class="btn btn-info btn-sm d-block mb-2">
                <i class="fas fa-chart-line"></i>
                Insights
              </a>

                {/* <!-- remove --> */}
                <a href="#" class="btn btn-danger btn-sm d-block">
                    <i class="fas fa-trash"></i>
                    Remove
                  </a>

            </div>
          </div>
        </div>
        
      </div>

     </div>

    </div>
</main>
 {/* <!-- main section ends here --> */}
    </>
  )
}

export default Merchandise;