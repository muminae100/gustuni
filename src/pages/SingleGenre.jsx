import { useParams } from "react-router-dom";
import { useGetGenreQuery } from "../api/apiSlice";
import OwlCarousel from 'react-owl-carousel';
import { GenreSongs, TopArtists, TopProducers, Footer, FeaturedPlaylist } from "../components";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const SingleGenre = () => {
  const { genreId } = useParams();

  const { data, isFetching, isSuccess } = useGetGenreQuery(genreId);


  if(isFetching) return 
  <Box sx={{ display: 'flex' }}>
  <CircularProgress />
  </Box>;
    
  if(isSuccess)
  return (
    <>
    <main style={{"marginBottom": "50px"}}>
      {/* Banner begins here */}
          <OwlCarousel className='owl-theme' items={1} loop margin={10} autoplay ={true} dots={false}>
            <div style={{"width": "100%", "height": "330px"}}>
              <img className="bd-placeholder-img" width="100%" height="100%" src="https://media.istockphoto.com/photos/beautiful-young-hipster-woman-with-curly-hair-with-red-guitar-in-neon-picture-id1155368162?k=20&m=1155368162&s=612x612&w=0&h=yH-iV2qJOok1dCQncqH1i6FduDyvcV6Fiex38fFll5U=" style={{"objectFit": "cover"}} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
      
            </div>

            <div style={{"width": "100%", "height": "330px"}} >
                <img className="bd-placeholder-img" width="100%" height="100%" src="https://images.unsplash.com/photo-1598387846419-a2c870ad3ecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWNpYW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80" style={{"objectFit": "cover"}} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
      
            </div>

            <div style={{"width": "100%", "height": "330px"}}>
                <img className="bd-placeholder-img" width="100%" height="100%" src="https://images.unsplash.com/photo-1603393518079-86dc47e9a910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljaWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" style={{"objectFit": "cover"}} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
    
            </div>

            </OwlCarousel>
         
        {/* Banner slider ends here  */}

        <GenreSongs genre={data} />
        <FeaturedPlaylist />
        <TopArtists />
        <TopProducers genre={data} />
    </main>
    <Footer />
    </>
  )
}

export default SingleGenre;