import pimg3 from "../assets/images/pimg3.jpg";
import pimg4 from "../assets/images/pimg4.jpg";
import pimg5 from "../assets/images/pimg5.jpg";

const Banner = () =>{
    return (
        <div className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img className="bd-placeholder-img" width="100%" height="100%" src={pimg4} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt="_" />
                
      
              <div className="container">
                <div className="carousel-caption">
                <div>
                <input style={{"padding": "15px", "margin": 0, "outline": "none", "border": "none", "width": "50%"}} type="text" placeholder="What music are you looking for...?" />
                <div style={{"padding": "15px", "display": "inline-block", "backgroundColor": "white", "color": "rgba(0,0,0,0.6)"}}>
                    <i className="fas fa-search"></i>
                </div>
                </div>
                </div>
              </div>

            </div>

          </div>
        </div>
    )
}

export default Banner;