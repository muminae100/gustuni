import { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ArtistsProductsCard = () =>{
    const [liked, setLiked] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    setLiked(!liked);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return (
        <>
          {/* <!-- products --> */}
          <div>
         <section className="at-products">
          {/* <!-- slider --> */}
          <div className="a-products">
            {/* <!-- a-products items --> */}
            <div className="a-item">
              {/* <!-- image container --> */}
              <Link to="/product/1" className="img-cont">
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" height="150px" width="100%" className="a-img" />
              </Link>
              {/* <!-- icons --> */}
              <div className="icons text-end p-3 w-100">           
                {liked ? (
                   <span className="i-like d-block my-0"><i className="fas fa-heart" title="add to wishlist" onClick={handleClick}></i></span>
                ) : (
                  <span className="i-like d-block my-0"><i className="fas fa-heart text-danger" title="added to wishlist" onClick={() =>setLiked(!liked)}></i></span>
                )}
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Product successfully added to favourites!
                    </Alert>
                  </Snackbar>
              </div>
              {/* <!-- product name and artist name --> */}
              <h6 className="ap-name text-black">Product Name</h6>
              <h6 className="aa-name">
                <a href="#">Calitoh Maina</a>
              </h6>
              {/* <!-- price and status --> */}
              <div className="pnstatus">
                <span className="h6">
                  <span className="text-black">KES</span>
                  <span className="price text-black"> 1,200</span>
                </span>
                <span className="h6 n-status">NEW</span>
              </div>
            </div>
          </div>
         </section>
          </div>
        </>
    )
}

export default ArtistsProductsCard;