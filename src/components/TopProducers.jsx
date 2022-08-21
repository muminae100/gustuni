import TopProducerCard from "./TopProducerCard";

const topproducers = [
  {
    "id": 1,
    "producerName": "Yung Naby",
    "imageUrl": "https://cdn.airbit.com/artwork/8d0344dbe02d0def83fbce4274dc7795@300x.jpg",
    "followerCount": 99,
    "tracksCount": 50
  },
  {
    "id": 2,
    "producerName": "JS Sounds",
    "imageUrl": "https://cdn.airbit.com/avatars/646416289fff7ac527eefff055c0f725@300x.jpg",
    "followerCount": 80,
    "tracksCount": 44
  },
  {
    "id": 3,
    "producerName": "Tone Jones",
    "imageUrl": "https://cdn.airbit.com/avatars/68c46366e29200b781223afd1fd1b7ed@300x.jpg",
    "followerCount": 30,
    "tracksCount": 49
  }
];

const TopProducers = ({genre}) => {
  return (
    <section className="mt-2 p-4">
    {/* <!-- header --> */}
    <span className="h5 heado d-block">Top Producers</span>
    <span className="h6 heados d-block mb-3">Check out the top producers today.</span>
      <div className="row">
        {topproducers.map(producer => <TopProducerCard key={producer.id} id={producer.id} produceName={producer.producerName} imageUrl={producer.imageUrl} followerCount={producer.followerCount} tracksCount={producer.tracksCount}/>)}
      </div>
    </section>
   
  )
}

export default TopProducers;