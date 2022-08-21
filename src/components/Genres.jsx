import { useState } from "react";
import GenreCard from "./GenreCard";
import {
  useGetGenresQuery
} from "../api/apiSlice";

const Trends = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () =>{
    if(showMore){
    setShowMore(false);
    }else{
      setShowMore(true);
    }
  }

  const {
    data: genres,
    isLoading,
    isSuccess,
    isError,
    error
} = useGetGenresQuery()

  
if(isLoading) return "Loading...";
if(isError) return console.log(error);

if(isSuccess)
  return (
    <div className="container trending d-flex align-items-center">
    <div className="container-fluid m-0 p-0">
        <div className="row mt-4">
        {showMore? genres.map((genre, i) => (<GenreCard key={i} genreId={genre.id} imageUrl={genre.imageUrl} genreName={genre.genreName} genreNameSub={genre.genreNameSub}/>)) :
        genres.slice(0, 8).map((genre, i) => (<GenreCard key={i} genreId={genre.id} imageUrl={genre.imageUrl} genreName={genre.genreName} genreNameSub={genre.genreNameSub}/>))}   
        </div>
        {/* More btn  */}
        <div className="container-fluid text-center">
          <a className="btn btn-outline-success btn-md mt-3" onClick={toggleShowMore}>{showMore? 'SHOW LESS' : 'SHOW MORE'}</a>
        </div>
    </div>
  </div>
  )
}

export default Trends;