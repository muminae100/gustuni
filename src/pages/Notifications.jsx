const Notifications = () => {
  return (
    <>
    {/* <!-- main section starts here --> */}
    <main>
        <div style={{"marginTop": "70px"}} class="container-fluid">
        {/* <!-- Recent --> */}
        <div class="container-fluid">
            {/* <!-- header --> */}
            <span class="h5 d-block text-start mb-4 mt-2">Today</span>
            {/* <!-- container for the notifications --> */}
            <div class="row"> 

            {/* <!-- for message --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- envelope icon --> */}
                <div class="col-1">
                    <span class="icona text-success me-1">
                    <i class="fas fa-envelope"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    <span class="username">David Palla</span>
                    messaged you
                </div>
                </div>
            </div>

            {/* <!-- for comment --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- message icon --> */}
                <div class="col-1">
                    <span class="icona text-success me-1">
                    <i class="fas fa-message"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    <span class="username">David Palla</span>
                    commented on your
                    {/* <!--link to creators post  --> */}
                    <a href="#" class="text-decoration-none text-primary">post</a>
                </div>
                </div>
            </div>

            {/* <!-- for likes --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- like icon --> */}
                <div class="col-1">
                    <span class="icona text-danger me-1">
                    <i class="fas fa-heart"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    <span class="username">David Palla</span>
                    liked your
                    {/* <!--link to creators post  --> */}
                    <a href="#" class="text-decoration-none text-primary">post</a>
                </div>
                </div>
            </div>

            {/* <!-- for follow --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- follow icon --> */}
                <div class="col-1">
                    <span class="icona text-success me-1">
                    <i class="fas fa-user-plus"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    <span class="username">David Palla</span>
                    followed you
                </div>
                </div>
            </div>

            {/* <!-- for repost --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- follow icon --> */}
                <div class="col-1">
                    <span class="icona text-success me-1">
                    <i class="fas fa-retweet"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    <span class="username">David Palla</span>
                    reposted your
                    {/* <!--link to creators post  --> */}
                    <a href="#" class="text-decoration-none text-primary">album</a>
                </div>
                </div>
            </div>

            {/* <!-- for personalized video --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- follow icon --> */}
                <div class="col-1">
                    <span class="icona text-success me-1">
                    <i class="fas fa-star"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    <span class="username">David Palla</span>
                    requested you for a personalized video.
                    {/* <!--link to personalized video request  --> */}
                    <a href="#" class="text-primary">Click here</a>
                    for deatils.
                </div>
                </div>
            </div>

            {/* <!-- for booking --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- follow icon --> */}
                <div class="col-1">
                    <span class="icona text-success me-1">
                    <i class="fas fa-ticket"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    <span class="username">David Palla</span>
                    requested to book you for an event.
                    {/* <!--link to book artist request  --> */}
                    <a href="#" class="text-primary">Click here</a>
                    for deatils.
                </div>
                </div>
            </div>

            {/* <!-- for purchase --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- follow icon --> */}
                <div class="col-1">
                    <span class="icona text-success me-1">
                    <i class="fas fa-cart-shopping"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    A user just purchased your merchandise from the Gutsuni store.
                    {/* <!--link to purchase description  --> */}
                    <a href="#" class="text-primary">Click here</a>
                    for deatils.
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* <!-- other days in descending order --> */}
        <div class="container-fluid">
            {/* <!-- header date --> */}
            <span class="h5 d-block text-start mb-4 mt-3 date">6 June</span>
            {/* <!-- container for the notifications --> */}
            <div class="row">

            {/* <!-- for message --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- envelope icon --> */}
                <div class="col-1">
                    <span class="icona text-success me-1">
                    <i class="fas fa-envelope"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    <span class="username">David Palla</span>
                    messaged you
                </div>
                </div>
            </div>

            {/* <!-- for comment --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- message icon --> */}
                <div class="col-1">
                    <span class="icona text-success me-1">
                    <i class="fas fa-message"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    <span class="username">David Palla</span>
                    commented on your
                    {/* <!--link to creators post  --> */}
                    <a href="#" class="text-decoration-none text-primary">post</a>
                </div>
                </div>
            </div>

            {/* <!-- for likes --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- like icon --> */}
                <div class="col-1">
                    <span class="icona text-danger me-1">
                    <i class="fas fa-heart"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    <span class="username">David Palla</span>
                    liked your
                    {/* <!--link to creators post  --> */}
                    <a href="#" class="text-decoration-none text-primary">post</a>
                </div>
                </div>
            </div>

            {/* <!-- for follow --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- follow icon --> */}
                <div class="col-1">
                    <span class="icona text-success me-1">
                    <i class="fas fa-user-plus"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    <span class="username">David Palla</span>
                    followed you
                </div>
                </div>
            </div>

            {/* <!-- for repost --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- follow icon --> */}
                <div class="col-1">
                    <span class="icona text-success me-1">
                    <i class="fas fa-retweet"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    <span class="username">David Palla</span>
                    reposted your
                    {/* <!--link to creators post  --> */}
                    <a href="#" class="text-decoration-none text-primary">album</a>
                </div>
                </div>
            </div>

            {/* <!-- for personalized video --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- follow icon --> */}
                <div class="col-1">
                    <span class="icona text-success me-1">
                    <i class="fas fa-star"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    <span class="username">David Palla</span>
                    requested you for a personalized video.
                    {/* <!--link to personalized video request  --> */}
                    <a href="#" class="text-primary">Click here</a>
                    for deatils.
                </div>
                </div>
            </div>

            {/* <!-- for booking --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- follow icon --> */}
                <div class="col-1">
                    <span class="icona text-success me-1">
                    <i class="fas fa-ticket"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    <span class="username">David Palla</span>
                    requested to book you for an event.
                    {/* <!--link to book artist request  --> */}
                    <a href="#" class="text-primary">Click here</a>
                    for deatils.
                </div>
                </div>
            </div>

            {/* <!-- for purchase --> */}
            <div class="col-12 shadow mb-4">
                <div class="row py-3">
                {/* <!-- follow icon --> */}
                <div class="col-1">
                    <span class="icona text-success me-1">
                    <i class="fas fa-cart-shopping"></i>
                    </span>
                </div>
                {/* <!-- content --> */}
                <div class="col-11">
                    A user just purchased your merchandise from the Gutsuni store.
                    {/* <!--link to purchase description  --> */}
                    <a href="#" class="text-primary">Click here</a>
                    for deatils.
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

export default Notifications