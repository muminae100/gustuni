import { Link } from "react-router-dom";
import ArtistsProductsCard from "./ArtistsProductsCard";

const ArtistsProducts = () => {

  return (
    <>
    {/* <!-- Store Products starts here --> */}
    <div className="container-fluid text-center mb-5 bg-dark marin">
      {/* <!-- artist products --> */}
           {/* <!-- header --> */}
           <div className="heady">
            <span className="h6">Artists' Products</span>
            <Link to="/store">View More <i className="fas fa-arrow-right"></i></Link>
          </div>
      <div style={{"display": "flex", "justifyContent": "space-around"}}>
        <ArtistsProductsCard />
        <ArtistsProductsCard />
        <ArtistsProductsCard />
        <ArtistsProductsCard />
      </div>
    
        {/* <!-- header --> */}
        <div className="heady">
         <span className="h6">Music Utility</span>
         <Link to="/store">View More <i className="fas fa-arrow-right"></i></Link>
        </div>
      {/* <!-- music equipments --> */}
      <div style={{"display": "flex", "justifyContent": "space-around"}} className="marina pb-4">
      <ArtistsProductsCard />
      <ArtistsProductsCard />
      <ArtistsProductsCard />
      <ArtistsProductsCard />
      </div>
        {/* <!-- store link --> */}
        <div className="container-fluid mt-3">
          <Link to="/store" className="btn btn-success my-2">Explore Store</Link>
        </div>
    </div>
    {/* <!-- store products ends here -->  */}
    </>
  )
}

export default ArtistsProducts;