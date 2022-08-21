import { Link } from "react-router-dom";

const GenreCard = ({genreId, imageUrl, genreName, genreNameSub}) =>{
    return (
    <div className="music-card col-lg-3 col-6">
       <Link to={`/genres/${genreId}`}>
        <div className="img-container">
            <img src={imageUrl} alt="Music" /> 
       </div>
       </Link>
        {/* meta data  */}
       <div className="metadata">
           <h4 className="m-title text-black">{genreName}</h4>
           <span className="h6 s-artist text-black">{genreNameSub}</span>
       </div>
    </div>
    )
}

export default GenreCard;