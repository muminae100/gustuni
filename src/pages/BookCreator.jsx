const BookCreator = () => {
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
                <span className="h6 heada d-block text-start ms-5 ps-4">Book Artist Name</span>

                {/* <!-- container for book artist form --> */}
                <div className="row ms-5 ps-4">
                    <div className="col-lg-10 col-12 border border-success rounded p-3 mb-4">
                    <form action="#" method="post">
                        {/* <!-- heading --> */}
                        <span className="d-block text-primary mb-2">
                        Note:
                        {/* <!-- artist name --> */}
                        <a href="#" className="text-decoration-none artist-name text-info text-start">Artist Name</a>
                        fee per hour is <span className="fee-rate">KSH 2000.</span> with a deposit fee of <span className="deposit-fee-percentage">25%</span> of total fee.
                        Fill the form below to complete the booking.
                        </span>
                        {/* <!-- Event Type --> */}
                        <div className="col-lg-12 col-12 mb-2">
                        <label for="event">Event type</label>
                        <select id="event" name="event" className="w-100" required>
                            <option value="volvo">Party</option>
                            <option value="saab">Club event</option>
                            <option value="fiat">Concert</option>
                            <option value="audi">School Event</option>
                            <option value="audi">Other</option>
                        </select>
                        </div>
                        {/* <!-- date picker --> */}
                        <div className="col-lg-12 col-12 mb-3">
                        <div className="form-group">
                            <label className="control-label"for="db1">Pick date for event</label>
                            <input className="form-control" name="db1" type="text" data-role="datebox" data-datebox-mode="calbox" id="db1" placeholder="click calender" required />
                        </div>
                        </div>

                        {/* <!-- time picker --> */}
                        <div className="col-lg-12 col-12">
                        <label for="time">From</label>
                        <select id="time" name="time" required className="w-100">
                            <option value="1">0000 HRS</option>
                            <option value="2">0100 HRS</option>
                            <option value="3">0200 HRS</option>
                            <option value="4">0300 HRS</option>
                            <option value="5">0400 HRS</option>
                            <option value="6">0500 HRS</option>
                            <option value="7">0600 HRS</option>
                            <option value="8">0700 HRS</option>
                            <option value="9">0800 HRS</option>
                            <option value="10">0900 HRS</option>
                            <option value="11">1000 HRS</option>
                            <option value="12">1100 HRS</option>
                            <option value="13">1200 HRS</option>
                            <option value="14">1300 HRS</option>
                            <option value="15">1400 HRS</option>
                            <option value="16">1500 HRS</option>
                            <option value="17">1600 HRS</option>
                            <option value="18">1700 HRS</option>
                            <option value="19">1800 HRS</option>
                            <option value="20">1900 HRS</option>
                            <option value="21">2000 HRS</option>
                            <option value="22">2100 HRS</option>
                            <option value="23">2200 HRS</option>
                            <option value="24">2300 HRS</option>
                        </select>
                        </div>

                        <div className="col-lg-12 col-12 mt-2">
                        <label for="time">To</label>
                        <select id="time" name="time" required className="w-100">
                            <option value="1">0000 HRS</option>
                            <option value="2">0100 HRS</option>
                            <option value="3">0200 HRS</option>
                            <option value="4">0300 HRS</option>
                            <option value="5">0400 HRS</option>
                            <option value="6">0500 HRS</option>
                            <option value="7">0600 HRS</option>
                            <option value="8">0700 HRS</option>
                            <option value="9">0800 HRS</option>
                            <option value="10">0900 HRS</option>
                            <option value="11">1000 HRS</option>
                            <option value="12">1100 HRS</option>
                            <option value="13">1200 HRS</option>
                            <option value="14">1300 HRS</option>
                            <option value="15">1400 HRS</option>
                            <option value="16">1500 HRS</option>
                            <option value="17">1600 HRS</option>
                            <option value="18">1700 HRS</option>
                            <option value="19">1800 HRS</option>
                            <option value="20">1900 HRS</option>
                            <option value="21">2000 HRS</option>
                            <option value="22">2100 HRS</option>
                            <option value="23">2200 HRS</option>
                            <option value="24">2300 HRS</option>
                        </select>
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
                        <label for="prefcost">Enter your prefered cost per hour(KSH)</label>
                        <input type="text" name="prefcost" placeholder="eg. 1700" className="w-100" required />
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

                        {/* <!-- Location --> */}
                        <div className="col-lg-12 col-12 mt-4">
                        <label for="location">Choose County</label>
                        <select id="location" name="location" required className="w-100">
                            <option value="1">001: Mombasa</option>
                            <option value="2">002: Kwale</option>
                            <option value="3">003: Kilifi</option>
                            <option value="4">004: Tana River</option>
                            <option value="5">005: Lamu</option>
                            <option value="6">006: Taita Taveta</option>
                            <option value="7">007: Garissa</option>
                            <option value="8">008: Wajir</option>
                            <option value="9">009: Mandera</option>
                            <option value="10">010: Marsabit</option>
                            <option value="11">011: Isiolo</option>
                            <option value="12">012: Meru</option>
                            <option value="13">013: Tharaka Nithi</option>
                            <option value="14">014: Embu</option>
                            <option value="15">015: Kitui</option>
                            <option value="16">016: Machakos</option>
                            <option value="17">017: Makueni</option>
                            <option value="18">018: Nyandarua</option>
                            <option value="19">019: Nyeri</option>
                            <option value="20">020: Kirinyaga</option>
                            <option value="21">021: Murang'a</option>
                            <option value="22">022: Kiambu</option>
                            <option value="23">023: Turkana</option>
                            <option value="24">024: West Pokot</option>
                            <option value="25">025: Samburu</option>
                            <option value="26">026: Trans-Nzoia</option>
                            <option value="27">027: Uasin Gishu</option>
                            <option value="28">028: Elgeyo Marakwet</option>
                            <option value="29">029: Nandi</option>
                            <option value="30">030: Baringo</option>
                            <option value="31">031: Laikipia</option>
                            <option value="32">032: Nakuru</option>
                            <option value="33">033: Narok</option>
                            <option value="34">034: Kajiado</option>
                            <option value="35">035: Kericho</option>
                            <option value="36">036: Bomet</option>
                            <option value="37">037: Kakamrga</option>
                            <option value="38">038: Vihiga</option>
                            <option value="39">039: Bungoma</option>
                            <option value="40">040: Busia</option>
                            <option value="41">041: Siaya</option>
                            <option value="42">042: Kisumu</option>
                            <option value="43">043: Homa Bay</option>
                            <option value="44">044: Migori</option>
                            <option value="45">045: Kisii</option>
                            <option value="46">046: Nyamira</option>
                            <option value="47">047: Nairobi</option>
                        </select>
                        </div>

                        {/* <!-- description on location --> */}
                        <div className="col-lg-12 col-12 mt-2">
                        <label for="locdesc">Describe location</label>
                        <input type="text" name="locdesc" placeholder="eg. Moi University, Kesses Eldoret" className="w-100" required />
                        </div>

                        {/* <!-- description on event --> */}
                        <div className="col-lg-12 col-12 mt-4">
                        <label for="evendescdesc">Describe event</label>
                        <textarea name="evendesc" id="evendesc" cols="84" rows="3" className="d-block w-100"></textarea>
                        </div>

                        <div className="col-lg-12 col-12 mt-3">
                        <label for="check"></label>
                        <input type="checkbox" required className="text-success" />
                        <span className="text-start">
                            By confirming this booking I have read and agreed to the 
                            {/* <!-- terms and conditions --> */}
                            <a href="#" className="text-success text-decoration-none">terms & conditions</a> and 
                            {/* <!-- privacy policy --> */}
                            <a href="#" className="text-success text-decoration-none">privacy policy</a>
                            of Gutsuni.
                        </span>
                        </div>

                        <div className="col-lg-12 col-12 mt-3 text-start">
                        <button type="submit" className="btn btn-success btn-md">Confirm Booking</button>
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
        {/* <!-- main section ends here --> */}
    </>
  )
}

export default BookCreator;