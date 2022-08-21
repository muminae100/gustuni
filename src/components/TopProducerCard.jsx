import { Link } from "react-router-dom";

const TopProducerCard = ({id, produceName,imageUrl, tracksCount, followerCount }) => {
  return (
    <div style={{"display": "flex", "alignItems": "center", "width": "100%", "padding": "10px", "justifyContent": "space-between", "boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)"}} className="bg-light mt-2">
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around"}}>
        <p style={{"margin": "10px", "fontSize": "20px"}}>{id}</p>
        <Link to="/artist">
        <img width={50} height={50} style={{"borderRadius": "50%", "margin": "10px"}} src={imageUrl} alt={produceName} />
        </Link>
        <p style={{"margin": "10px"}}>{produceName}</p>
        </div>
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around"}}>
            <div style={{"margin": "10px"}}>
            <i className="fa fa-headphones m-2"></i>
            <span>{tracksCount}</span>
            </div>
            <div style={{"margin": "10px"}}>
                <i className="fa fa-users m-2"></i>
                <span>{followerCount}</span>
            </div>
            <div style={{"margin": "10px"}}>
                <i className="fa fa-heart m-2"></i>
            </div>
        </div>
    </div>
  )
}

export default TopProducerCard;