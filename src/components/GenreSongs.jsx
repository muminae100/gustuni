import SongCard from "./SongCard";
import { useState, useEffect } from "react";

import {
  useGetSongsQuery,
} from "../api/apiSlice";
 
 const GenreSongs = ({genre}) => {
  const {
    data: songs,
    isLoading,
    isSuccess,
    isError,
    error
} = useGetSongsQuery()


  if(isLoading) return "Loading...";
  if(isError) return console.log(error);

  if(isSuccess)
  return (
    <section id="top-charts" className="mt-5">
      <div style={{"backgroundColor": "white", "padding": "20px", "display": "flex", "justifyContent": "center", "marginBottom": "20px", "boxShadow": "0, 0 , 0.5"}}>
      
      <select name="genres" id="genres" style={{"padding": "10px"}}>
      <option value={genre.genreName}>{genre.genreName}</option>
      </select>

        <select name="subGenres" id="subGenres" style={{"padding": "10px"}}>
        <option value="All">All</option>
        {genre.subGenres.map(subgenre => <option key={subgenre.subGenreName} value={subgenre.subGenreName}>{subgenre.subGenreName}</option>)}
        </select>

      
      </div>

    {/* <!-- header --> */}
    <span className="h6 heado d-block">{genre.genreName}</span>
      <div className="row p-4 bg-dark tp-row mx-2">
        {/* <!-- image & play btn --> */}
        <div className="col-lg-3 col-3 d-lg-block d-none ipb-cont mt-4 pt-2">
         <a href="#" className="d-block aimg-link">
          <img src="https://media.istockphoto.com/photos/punk-woman-acoustic-guitar-picture-id1267536630?b=1&k=20&m=1267536630&s=170667a&w=0&h=PKQfQjZzOMsdcK6fsB6NXjYWzri9xkB5VzeteRSCkrw=" alt="Gutsuni" height="180px" width="96%" className="tp-img" />
         </a>
         
          <span className="p-btn text-success d-inline d-sm-none"><i className="fa-solid fa-play"></i></span>

          <span className="icons-cont">
            <span className="s-ico"><i className="fa-solid fa-heart" title="like"></i> <span className="like-no">13k</span></span>
            <span className="s-ico"><i className="fa-solid fa-retweet" title="repost"></i> <span className="retweet-no">3,645</span></span>
            <span className="s-ico"><i className="fa-solid fa-message" title="comment"></i> <span className="mess-no">1,356</span></span>
          </span>
        </div>
        {/* <!-- song container --> */}
        <div className="col-lg-9 col-12 sc-container">
        {songs?.filter(song => Number(song.genre_id) === Number(genre.id)).map(song => <SongCard key={song.id} id={song.id} imageUrl={song.imageUrl} songName={song.songName} artistName={song.artistName} playedCount={song.playedCount} downloadedCount={song.downloadedCount}/>)}
        </div> 
      </div>
      {/* <!-- show playlist container --> */}
    <div class="container-fluid text-end g-playlist">
      <a href="./gtptoptrends.html">See more</a>
    </div>
    </section>

  )
}

export default GenreSongs;