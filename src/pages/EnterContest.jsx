const EnterContest = () => {
  return (
    <>
    {/* <!-- Enter contest home section begins here --> */}
    <div className="container-fluid px-0" style={{"backgroundColor": "rgb(22, 22, 22)", "marginTop": "60px"}}>
        {/* <!-- row container --> */}
        <div className="row py-2">
            {/* <!-- enter contest form container --> */}
            <div className="col-lg-5 col-12 py-1 px-3">
                {/* <!-- info --> */}
                <div className="container-fluid mx-0 p-1 rounded" style={{"backgroundColor": "rgb(238, 176, 157)"}}>
                    <span className="#" style={{"fontSize": "14px", "color": "rgb(94, 56, 56)"}}>
                        {/* Heads up! Only one entry is allowed per person. */}
                        <br />
                        Multiple entries will not be eligible to win.
                    </span>
                </div>

                {/* <!-- header --> */}
                <span className="h5 d-block text-start text-white mt-2">
                    Gustuni Beat Contest
                </span>

                {/* <!-- Instruction --> */}
                <span className="text-end" style={{"color": "rgb(168, 168, 168)", "fontsize": "14px", "fontWeight": "400"}}>
                    Complete the form below to enter contest
                </span>

                {/* <!-- Form begins here --> */}
                <form action="#" method="post">
                    {/* <!-- song title --> */}
                    <div className="col-12 text-white mb-2">
                        <label for="stitle" className="d-block my-1 py-1" style={{"fontSize": "14px", "color": "rgb(196, 196, 196)"}}>Song Title</label>
                        <input type="text" name="stitle" id="stitle" className="text-start" style={{"color": "rgb(196, 196, 196)","border": "none", "outline": "none", "borderRadius": "2px", "backgroundColor":"rgb(22, 22, 22)", "padding": "6px", "height": "36px", "border": "1px solid #ccc", "width": "100%", "fontSize": "13px"}} placeholder="Song Title" required />
                    </div>

                    {/* <!-- Artist Name --> */}
                    <div className="col-12 text-white mb-2">
                        <label for="aname" className="d-block my-1 py-1" style={{"fontSize": "14px", "color": "rgb(196, 196, 196)"}}>Artist Name</label>
                        <input type="text" name="aname" id="aname" className="text-start" style={{"color": "rgb(196, 196, 196)", "border": "none", "outline": "none", "borderRadius": "2px", "backgroundColor": "rgb(22, 22, 22)", "padding": "6px", "height": "36px", "border": "1px solid #ccc", "width": "100%", "fontSize": "13px"}} placeholder="Artist Name" required />
                    </div>

                    {/* <!-- Instagram username --> */}
                    <div className="col-12 text-white mb-2">
                        <label for="iname" className="d-block my-1 py-1" style={{"fontSize": "14px", "color": "rgb(196, 196, 196)"}}>Instagram Username</label>
                        <input type="text" className="mb-2 text-start" name="iname" id="iname" style={{"border": "none", "padding": "6px", "fontSize": "13px", "outline": "none", "borderRadius": "2px", "backgroundColor":"rgb(22, 22, 22)", "padding": "6px", "height": "36px", "fontSize": "13px", "border": "1px solid #ccc", "width": "100%"}} placeholder="Instagram Username" required />

                        {/* <!-- Instruction --> */}
                        <span className="text-end py-2" style={{"color": "rgb(168, 168, 168)", "fontSize": "12px", "fontWeight": "400"}}>
                            Include your username so we can check out your beats and interact wish you on instagram.
                        </span>
                    </div>

                    {/* <!-- Entry Description --> */}
                    <div className="col-12 text-white mb-2">
                        <label for="edec" className="d-block my-1 py-1" style={{"fontSize": "14px", "color": "rgb(196, 196, 196)"}}>Entry Description</label>
                        <textarea name="edec" id="edec" className="text-start text-white" placeholder="Entry Description" style={{"border": "none", "outline": "none", "borderRadius": "2px", "backgroundColor":"rgb(22, 22, 22)", "border": "1px solid #ccc", "width": "100%"}} cols="30" rows="4" maxlength="100" required></textarea>
                        
                    </div>

                    {/* <!-- Entry image --> */}
                    <div className="col-12 text-white mb-2">
                        <label for="eimage" className="d-block my-1 py-1" style={{"fontSize": "14px", "color": "rgb(196, 196, 196)"}}>Entry Image</label>
                        <div className="file-upload-wrapper">
                            <input type="file" className="file-upload" id="input-file-now" />
                        </div>

                        {/* <!-- Instruction --> */}
                        <span className="text-end py-2" style={{"color": "rgb(168, 168, 168)", "fontSize": "12px", "fontWeight": "400"}}>
                            If an image is not uploaded, the default Gustuni logo will be used.
                        </span>
                    </div>

                    {/* <!-- Entry beat --> */}
                    <div className="col-12 text-white mb-2">
                        <label for="eimage" className="d-block my-1 py-1" style={{"fontSize": "14px", "color": "rgb(196, 196, 196)"}}>Entry beat</label>
                        <div className="file-upload-wrapper">
                            <input type="file" className="file-upload" id="input-file-now" />
                        </div>

                        {/* <!-- Instruction --> */}
                        {/* <!-- <span className="text-end py-2" style="color: rgb(168, 168, 168); font-size: 12px; font-weight: 400;">
                            If an image is not uploaded, the default Gustuni logo will be used.
                        </span> --> */}
                    </div>

                    <div className="col-12 text-center my-2 py-2">
                        <button className="btn btn-dark" type="submit" style={{"width": "240px"}}>Submit</button>
                    </div>
                </form>
                {/* <!-- Form ends here --> */}
            </div>

            {/* <!-- column for contest rules --> */}
            <div className="col-lg-7 col-12 py-1 px-3">
                {/* <!-- contest rules --> */}
                <div className="container-fluid bg-dark rounded px-2 py-1" style={{"color": "rgb(196, 196, 196)"}}>
                    {/* <!-- header --> */}
                    <span className="h5 d-block text-center">
                        Contest rules
                    </span>

                    {/* <!-- rules --> */}
                    <ul>
                        <li className="my-1 py-1" style={{"fontSize": "14px"}}>
                            You can use elements from <a href="#">Sample Pack Name</a> to be eligible for this contest. 
                        </li>

                        <li className="my-1 py-1" style={{"fontSize": "14px"}}>
                            No illegal/uncleared samples may be used in your entry.
                        </li>

                        <li className="my-1 py-1" style={{"fontSize": "14px"}}>
                            Submit your original song with the following title format: ARTIST NAME -SONG NAME (*Pack Name beat contest)
                        </li>

                        <li className="my-1 py-1" style={{"fontSize": "14px"}}>
                            One entry per person/group.
                        </li>

                        <li className="my-1 py-1" style={{"fontSize": "14px"}}>
                            If you enter as a group, you are not allowed to enter as a solo artist, and vice versa.
                        </li>

                        <li className="my-1 py-1" style={{"fontSize": "14px"}}>
                            You may not enter the contest if you currently for, or have ever worked for Gustuni LLC.
                        </li>

                        <li className="my-1 py-1" style={{"fontSize": "14px"}}>
                            Gustuni has the right to disqualify an entry.
                        </li>

                        <li className="my-1 py-1" style={{"fontSize": "14px"}}>
                            These rules are subject to change at anyn time at the discretion of Gustuni LLC.
                        </li>

                        <li className="my-1 py-1" style={{"fontSize": "14px"}}>
                            Submissions Deadline: July 15th at 12:00PM EAT, Winner announcement: JULY 22nd at 4:00PM EAT
                        </li>
                    </ul>
                </div>

                {/* <!-- important contest information --> */}
                <div className="container-fluid bg-dark rounded p-2 my-3" style={{"color": "rgb(196, 196, 196)"}}>
                    {/* <!-- header --> */}
                    <span className="h5 d-block text-center">
                        Important Contest Information
                    </span>

                    {/* <!-- content --> */}
                    <p className="py-2" style={{"fontSize": "14px"}}>
                        Make sure you read through the contest rules and remember to post your entries on instagram  while tagging @gustuni for a chance to be featured on the Gustuni instagram page
                    </p>
                </div>

                {/* <!-- Queries --> */}
                <span className="h6 d-block text-white text-start" style={{"fontSize": "14px"}}>
                    If you have any questions or issues with your entry, email support@gustuni.com for help.
                </span>
            </div>
        </div>

    </div>
    {/* <!-- Enter contest home section ends here --> */}
    </>
  )
}

export default EnterContest;