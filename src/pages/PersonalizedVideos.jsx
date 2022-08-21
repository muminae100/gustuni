const PersonalizedVideos = () =>{
    return (
        <>
        {/* <!-- main section starts here --> */}
        <main>
        <div className="bookart" style={{"marginTop": "60px"}}>
            <div className="container-fluid p-0 position-relative">
            {/* <!-- BANNER --> */}
            <div className="container-fluid m-0 p-0 position-relative">
                {/* <!-- banner img --> */}
                <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="#" width="100%" height="81px" className="mb-2 top-0" />
                {/* <!-- header --> */}
                <div className="container-fluid ms-5 ps-5 pora">
                <span className="h6 heada d-block text-start ms-5 ps-4">Request Artist Name for personalized video</span>

                {/* <!-- container for book artist form --> */}
                <div className="row ms-5 ps-4">
                    <div className="col-lg-10 col-12 border border-success rounded p-3 mb-4">
                    <form action="#" method="post">
                        {/* <!-- heading --> */}
                        <span className="d-block text-primary mb-2">
                        Note:
                        {/* <!-- artist name --> */}
                        <a href="#" className="text-decoration-none artist-name text-info text-start">Artist Name</a>
                        fee per second is <span className="fee-rate">KSH 200.</span> with a deposit fee of <span className="deposit-fee-percentage">25%</span> of total fee.
                        Fill the form below to complete the request.
                        </span>
                        {/* <!-- Video Type --> */}
                        <div className="col-lg-12 col-12 mb-2">
                        <label htmlFor="vid">Video type</label>
                        <select id="vid" name="vid" className="w-100" required>
                            <option value="1">Commercial</option>
                            <option value="2">Birthday</option>
                            <option value="3">Gift</option>
                            <option value="4">School Event</option>
                            <option value="5">Other</option>
                        </select>
                        </div>
                        {/* <!-- date picker --> */}
                        <div className="col-lg-12 col-12 mb-3">
                        <div className="form-group">
                            <label className="control-label" htmlFor="db1">Pick date when the video is needed</label>
                            <input className="form-control" name="db1" type="text" data-role="datebox" data-datebox-mode="calbox" id="db1" placeholder="click calender" required />
                        </div>
                        </div>

                        {/* <!-- length for video --> */}
                        <div className="col-lg-12 col-12">
                            <label htmlFor="length">Enter time (in seconds)</label>
                            <input type="text" name="length" placeholder="eg. 120" className="w-100" />
                        </div>

                        {/* <!-- cost & deposit --> */}
                        <div className="col-lg-12 col-12 mt-3">
                        {/* <!-- cost --> */}
                        <span className="cost-here">
                            Cost:
                            <a href="#" className="cost text-success text-decoration-none">KSH 0</a>
                        </span>

                        {/* <!-- deposit --> */}
                        <span className="deposit-here ms-3">
                            Deposit:
                            <a href="#" className="deposit text-primary text-decoration-none">KSH 0</a>
                        </span>
                        <hr />
                        </div>

                        {/* <!-- prefered cost --> */}
                        <div className="col-lg-12 col-12">
                        <label htmlFor="prefcost">Enter your prefered cost per second(KSH)</label>
                        <input type="text" name="prefcost" placeholder="eg. 17" className="w-100" required />
                        </div>

                        {/* <!-- cost & deposit --> */}
                        <div className="col-lg-12 col-12 mt-3">
                        {/* <!-- cost --> */}
                        <span className="cost-here">
                            Cost:
                            <a href="#" className="cost text-success text-decoration-none">KSH 0</a>
                        </span>

                        {/* <!-- deposit --> */}
                        <span className="deposit-here ms-3">
                            Deposit:
                            <a href="#" className="deposit text-primary text-decoration-none">KSH 0</a>
                        </span>
                        <hr />
                        </div>

                        {/* <!-- description on video --> */}
                        <div className="col-lg-12 col-12 mt-4">
                        <label htmlFor="evendescdesc">Describe details you want in the video</label>
                        <textarea name="evendesc" id="evendesc" cols="84" rows="10" className="d-block w-100" maxlength="500"></textarea>
                        </div>

                        <div className="col-lg-12 col-12 mt-3">
                        <label htmlFor="check"></label>
                        <input type="checkbox" required className="text-success" />
                        <span className="text-start">
                            I have read and agreed to the 
                            {/* <!-- terms and conditions --> */}
                            <a href="#" className="text-success text-decoration-none">terms & conditions</a> and 
                            {/* <!-- privacy policy --> */}
                            <a href="#" className="text-success text-decoration-none">privacy policy</a>
                            of Gutsuni.
                        </span>
                        </div>

                        <div className="col-lg-12 col-12 mt-3 text-start">
                        <button type="submit" className="btn btn-success btn-md">Request personalized video</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>

                {/* <!-- profile image container --> */}
                <div className="row">
                <div className="col-lg-2 col-4 pomage">
                    {/* <!-- profile iamge goes here --> */}
                    <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="100%" height="150px" className="rounded-circle shadow" alt="#" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </main>
        {/* main section ends here  */}
        </>
    )
}

export default PersonalizedVideos;