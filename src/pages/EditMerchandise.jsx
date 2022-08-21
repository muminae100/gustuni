const EditMerchandise = () => {
  return (
    <>
        {/* <!-- main section starts here --> */}
        <main className="form-sign-in pt-5 mt-3 p-relative">
            <div className="container-fluid d-flex justify-content-center align-items-center align-content-center">
                <form action="#" method="post" className="pt-3 mb-3 w-sm-100 w-50">

                    {/* <!-- heading --> */}
                    <span className="h5 d-block text-center mt-1 mb-4">
                        <strong>
                            Edit Track
                        </strong>
                    </span>

                    {/* <!-- Track Image --> */}
                    <div className="col-12 d-flex justify-content-center text-center mb-3">
                        <div className="container-fluid prohot">
                            <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar" height="120px" width="120px" className="us-img shadow" />
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" className="btn btn-primary u-btny" data-bs-toggle="modal" data-bs-target="#exampleModal" title="change cover photo">
                                <span className="change-pi">
                                    <i className="fas fa-camera" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>

                    </div>

                    {/* <!-- Track Name --> */}
                    <div className="form-outline mb-4">
                        <input type="text" id="form!Example" className="form-control" />
                        <label className="form-label" for="form1Example">Track Name</label>
                    </div>
            
                    {/* <!-- Creator(s) --> */}
                    <div className="form-outline mb-4">
                        <input type="text" id="form!Example" className="form-control" />
                        <label className="form-label" for="form1Example">Category</label>
                    </div>

                    {/* <!-- Track type --> */}
                    <div className="form-outline mb-4">
                        <select className="form-select" aria-label="Default select genre">
                            <option selected disabled>Select track type</option>
                            <option value="music">Music</option>
                            <option value="beat">Beat/ Instrumental</option>
                            <option value="podcast">Podcast</option>
                        </select>
                    </div>

                    {/* <!-- Genre --> */}
                    <div className="form-outline mb-4">
                        <select className="form-select" aria-label="Default select genre">
                            <option selected disabled>Select track genre</option>
                            {/* <!-- music heading --> */}
                            <option value="heading" disabled>Music & Beats</option>
                            {/* <!-- options --> */}
                            <option value="amapiano">Amapiano</option>
                            <option value="bongo">Bongo</option>
                            <option value="dance">Dance</option>
                            <option value="drill">Drill</option>
                            <option value="ethnic">Ethnic</option>
                            <option value="gospel">Gospel</option>
                            <option value="genge-tone">Genge tone</option>
                            <option value="hiphop">Hip Hop</option>
                            <option value="pop">Pop</option>
                            <option value="rap">Rap</option>
                            <option value="reggea">Reggea</option>
                            <option value="rock">Rock</option>
                            <option value="rnb">R&B</option>
                            <option value="spokenart">Spoken Art</option>
                            <option value="trap">Trap</option>

                            {/* <!-- podcats Heading --> */}
                            <option value="heading" disabled>Podcast</option>
                            {/* <!-- options --> */}
                            <option value="ent">Entertainment</option>
                            <option value="health">Health & Fitness</option>
                            <option value="music">Music</option>
                            <option value="sports">Sports</option>
                        </select>
                    </div>

                    {/* <!-- Free or premium track? --> */}
                    <div className="form-outline mb-4">
                        <select className="form-select" aria-label="Default select genre">
                            <option selected disabled>Select download type (free or premium)</option>
                            <option value="1">Free</option>
                            <option value="2">Premium</option>
                        </select>
                    </div>

                    {/* <!-- price in case of premium download --> */}
                    <div className="form-outline mb-4">
                        <input type="text" id="form!Example1" className="form-control" />
                        <label className="form-label" for="form1Example1">Download price</label>
                    </div>

                    {/* <!-- Change --> */}
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>

                </form>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                    <span className="h5 modal-title" id="exampleModalLabel">Change cover photo</span>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form action="#" method="post">
                <div className="mb-3">
                    <label for="formFileMultiple" className="form-label d-block">Add Image</label>
                    <input className="form-control" type="file" id="formFileMultiple" required />
                </div>

                <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary">Change</button>
                </div>
                
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
                </div>
                </div>
        </main>
        {/* <!-- main section ends here --> */}
    </>
  )
}

export default EditMerchandise;