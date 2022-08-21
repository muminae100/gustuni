import FeaturedPlaylistCard from "./FeaturedPlaylistCard";


const featuredplaylists = [
    {
     "id": 1,
     "playlistName": "Inspired by Dua Lipa",
     "likesCount": 30,
     "tracksCount": 16,
     "imageUrl": "https://cdn.airbit.com/artwork/993afd439d7f3c9c55a46157321da1b4@300x.jpg"
    },
    {
     "id": 2,
     "playlistName": "Inspired by Russ",
     "likesCount": 50,
     "tracksCount": 60,
     "imageUrl": "https://cdn.airbit.com/artwork/88cc0fb5d1cefdd37a7cb6dcfb988075@300x.jpg"
    },
    {
     "id": 3,
     "playlistName": "Inspired by Risk Ross",
     "likesCount": 11,
     "tracksCount": 16,
     "imageUrl": "https://cdn.airbit.com/artwork/e48483f59c9902adbc53ad6a955b2c1c@300x.jpg"
    },
    {
     "id": 4,
     "playlistName": "Inspired by Mac Miller",
     "likesCount": 30,
     "tracksCount": 16,
     "imageUrl": "https://cdn.airbit.com/artwork/28ed763a8e7c72d88c12fc65a7dc4d95@300x.jpg"
    },
    {
     "id": 5,
     "playlistName": "Inspired by Megan",
     "likesCount": 30,
     "tracksCount": 16,
     "imageUrl": "https://cdn.airbit.com/artwork/c5c789516629284f53bba57db7550886@300x.jpg"
    },
    {
     "id": 6,
     "playlistName": "Inspired by Hip hop",
     "likesCount": 10,
     "tracksCount": 6,
     "imageUrl": "https://cdn.airbit.com/artwork/2102ac326e4d3ff69740658ebdd94acc@300x.jpg"
    }
   ];
   

const FeaturedPlaylist = () => {
  return (
    <section className="mt-2 p-4">
     {/* <!-- header --> */}
     <span className="h5 heado d-block text-dark fw-bold">Feature Playlists</span>
     <span className="h6 heados d-block mb-3 text-dark">Check top featured playlists.</span>
       <div style={{"display": "flex", "alignItems": "center", "flexWrap": "wrap", "justifyContent": "space-between"}}>
        {featuredplaylists.map(playlist => <FeaturedPlaylistCard key={playlist.id} playlistName={playlist.playlistName} imageUrl={playlist.imageUrl} tracksCount={playlist.tracksCount} likesCount={playlist.likesCount}/>)}
       </div>
     </section>
  )
}

export default FeaturedPlaylist;