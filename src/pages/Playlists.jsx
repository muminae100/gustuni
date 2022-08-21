import OwlCarousel from 'react-owl-carousel';
import { HorizontalCard } from '../components';

const Playlists = () =>{
    return (
        <>
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

        <div style={{"width": "100%", "padding": "20px", "textAlign": "center", "backgroundColor": "black"}}>
            <h1 className='text-white p-3'>Playlists</h1>
            <p className='text-white p-3'>2473 Playlists</p>

            <select className='p-2' style={{"marginRight": "10px"}}>
                <option value="Beats and Instrumentals">Beats and Instrumentals</option>
                <option value="Blues">Blues</option>
                <option value="Classical">Classical</option>
                <option value="Country">Country</option>
                <option value="Electronic">Electronic</option>
            </select>

            <select className='p-2'>
                <option value="main genre">Main genre (All)</option>
                <option value="Beats and Instrumentals">Beats General</option>
                <option value="Classical">Classical</option>
                <option value="Film music">Film music</option>
                <option value="Free beats">Free beats</option>
                <option value="Funk">Funk</option>
            </select>
        </div>

        <div style={{"width": "100%", "padding": "20px"}}>
        <h4>Songs</h4>
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        </div>
        </>
      
    )
}

export default Playlists;