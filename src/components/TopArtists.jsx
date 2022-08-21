import TopArtistCard from "./TopArtistCard";

const topartists = [
 {
  "id": 1,
  "artistName": "Burna Boy",
  "followerCount": 30,
  "tracksCount": 16,
  "imageUrl": "https://cdn.airbit.com/artwork/44d7adddb3eef48c5a4638405a9bc2f2@300x.jpg"
 },
 {
  "id": 2,
  "artistName": "Russ millions",
  "followerCount": 50,
  "tracksCount": 60,
  "imageUrl": "https://cdn.airbit.com/artwork/f421474e21dd4c701ded4a572a5ef31f@300x.jpg"
 },
 {
  "id": 3,
  "artistName": "Eryka Badu",
  "followerCount": 11,
  "tracksCount": 16,
  "imageUrl": "https://cdn.airbit.com/artwork/900babd50e5c005b45ad8c1ef9ecb522@300x.jpg"
 },
 {
  "id": 4,
  "artistName": "Hit boy",
  "followerCount": 30,
  "tracksCount": 16,
  "imageUrl": "https://cdn.airbit.com/artwork/91a4d0e2696f1adade1ff3443dd0eee0@300x.jpg"
 },
 {
  "id": 5,
  "artistName": "Coi Relay",
  "followerCount": 30,
  "tracksCount": 16,
  "imageUrl": "https://cdn.airbit.com/artwork/6865298d6ae4068fe256b781d720e7c5@300x.jpg"
 },
 {
  "id": 6,
  "artistName": "Ariana Grande",
  "followerCount": 10,
  "tracksCount": 6,
  "imageUrl": "https://cdn.airbit.com/artwork/64abc920134e38ba731be1e9daca5c2e@300x.jpg"
 }
];

const TopArtists = () => {
  return (
     
     <section className="mt-2 p-4">
     {/* <!-- header --> */}
     <span className="h5 heado d-block">Top Artists</span>
     <span className="h6 heados d-block mb-3">Check the top artists right now.</span>
       <div style={{"display": "flex", "alignItems": "center", "flexWrap": "wrap", "justifyContent": "space-between"}}>
        {topartists.map(artist => <TopArtistCard key={artist.artistName} artistName={artist.artistName} imageUrl={artist.imageUrl} tracksCount={artist.tracksCount} followerCount={artist.followerCount}/>)}
       </div>
     </section>
     
  )
}

export default TopArtists