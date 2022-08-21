import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className='mt-5'>
        <OwlCarousel className='owl-theme' items={1} loop margin={10} autoplay ={true}>
        <div className="carousel-item active">
            <img className="bd-placeholder-img" width="100%" height="100%" src="https://www.ticketsasa.com/images/images.php?src=images/Yetu_Festival_Landing_Page_1500x500_a-01.png&h=500&w=1500&zc=1&q=90" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt="_" />
        </div>

        <div className="carousel-item active">
            <img className="bd-placeholder-img" width="100%" height="100%" src="https://www.ticketsasa.com/images/images.php?src=images/19EC837CCDC7648641812ABE629B18808E5F72907946AC99A6pimgpsh_fullsize_distr.jpg&h=500&w=1500&zc=1&q=90" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt="_"/>
        </div>
        <div className="carousel-item active">
            <img className="bd-placeholder-img" width="100%" height="100%" src="https://www.ticketsasa.com/images/images.php?src=images/Yetu_Festival_Landing_Page_1500x500_a-01.png&h=500&w=1500&zc=1&q=90" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt="_"/>

        </div>
        </OwlCarousel>
        <div style={{"textAlign": "center"}}>
            <h2>Upcoming Events</h2>
            <p>Buy tickets in advance to popular events</p>
        </div>
        <div style={{"display": "flex", "justifyContent": "center"}}>

        <div style={{"padding": 30, "width": 1100}}>
        <OwlCarousel className='owl-theme' items={3} loop margin={5} autoplay ={true}>
        <div style={{"width":"300px"}}>
        <img className="card-img-top" src="https://www.ticketsasa.com/images/images.php?src=components/com_enmasse/upload/STTA.png1655190488.jpg&h=320&w=320&zc=1&q=100&s=1&f=3,5|4,-5" alt="Card image" />
        <div style={{"display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center"}}>
            <p className="bg-danger p-1" style={{"height": "100%", "color": "white"}}>WED <br /> 14 JUL</p>
            <p className='p-1' style={{"fontWeight": "800", "fontSize": 19}}>Sustainable Tourism Reporting</p>
        </div>
        </div>
        <div style={{"width":"300px"}}>
        <img className="card-img-top" src="https://www.ticketsasa.com/images/images.php?src=components/com_enmasse/upload/Atemi_Concert_Artwork_July_15th_v2-01_copy.jpg1656318531.jpg&h=320&w=320&zc=1&q=100&s=1&f=3,5|4,-5" alt="Card image" />
        <div style={{"display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between"}}>
            <p className="bg-danger p-1" style={{"height": "100%", "color": "white"}}>SAT <br /> 24 JAN</p>
            <p className='p-1' style={{"fontWeight": "800", "fontSize": 19}}>Atemi Live Featuring Wambura Mitaru</p>
        </div>
        </div>
        <div style={{"width":"300px"}}>
        <img className="card-img-top" src="https://www.ticketsasa.com/images/images.php?src=components/com_enmasse/upload/WhatsApp_Image_2022-07-13_at_10.50.43_AM.jpeg1657700827.jpg&h=320&w=320&zc=1&q=100&s=1&f=3,5|4,-5" alt="Card image" />
        <div style={{"display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between", "padding": 0}}>
            <p className="bg-danger p-1" style={{"height": "100%", "color": "white"}}>WED <br /> 12 JUL</p>
            <p className='p-1' style={{"fontWeight": "800", "fontSize": 19}}>THE WINNING POST PRESENTS FALZ live</p>
        </div>
        </div>
        </OwlCarousel>
        </div>

        </div>
        <div style={{"textAlign": "center"}}>
            <h2>Special Holiday Packages</h2>
            <p>Travel to popular destinations with affordable deals and special offers</p>
        </div>

        <div style={{"display": "flex", "justifyContent": "center"}}>
        <div style={{"padding": 30, "width": 1100}}>
        <OwlCarousel className='owl-theme' items={3} loop margin={5} autoplay ={true}>
        <div className="card" style={{"width":"300px"}}>
        <img className="card-img-top" src="https://www.ticketsasa.com/images/images.php?src=components/com_enmasse/upload/Sarova_salt_lick_guest_room.jpg1439381086.jpg&w=500&h=333&zc=1&q=100&s=1&f=3,10|4,-5" alt="Card image" />
        <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "justifyContent": "space-between", "padding": "10px"}}>
            <p style={{"fontWeight": "800"}}>Bush Getaway at Sarova Salt Lick Game Lodge</p>
            <p><em>Tsavo, Kenya </em></p>
            <p className="text-danger">KES. 7990</p>
            <div style={{"display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center"}}>
                <div>
                <p style={{"fontSize": 12}}>Per person sharing</p>
                </div>
                <div style={{"marginLeft": "60px"}}>
                    <Link to="/events/1" className="btn btn-success btn-sm">Book Now</Link>
                </div>
            </div>
            
        </div>
        </div>
        <div className="card" style={{"width":"300px"}}>
        <img className="card-img-top" src="https://www.ticketsasa.com/images/images.php?src=components/com_enmasse/upload/Room_Balcony.jpg1438678446.jpg&w=500&h=333&zc=1&q=100&s=1&f=3,10|4,-5" alt="Card image" />
        <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "justifyContent": "space-between", "padding": "10px"}}>
            <p style={{"fontWeight": "800"}}>Bush Getaway at Sarova Salt Lick Game Lodge</p>
            <p><em>Tsavo, Kenya </em></p>
            <p className="text-danger">KES. 7990</p>
            <div style={{"display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between"}}>
                <div>
                <p style={{"fontSize": 12}}>Per person sharing</p>
                </div>
                <div style={{"marginLeft": "60px"}}>
                    <Link to="/events/2" className="btn btn-success btn-sm">Book Now</Link>
                </div>
            </div>
            
        </div>
        </div>
        <div className="card" style={{"width":"300px"}}>
        <img className="card-img-top" src="https://www.ticketsasa.com/images/images.php?src=components/com_enmasse/upload/c4.jpg1424246047.jpg&w=500&h=333&zc=1&q=100&s=1&f=3,10|4,-5" alt="Card image" />
        <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "justifyContent": "space-between", "padding": "10px"}}>
            <p style={{"fontWeight": "800"}}>Bush Getaway at Sarova Salt Lick Game Lodge</p>
            <p><em>Tsavo, Kenya </em></p>
            <p className="text-danger">KES. 7990</p>
            <div style={{"display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between"}}>
                <div>
                <p style={{"fontSize": 12}}>Per person sharing</p>
                </div>
                <div style={{"marginLeft": "60px"}}>
                    <Link to="/events/3" className="btn btn-success btn-sm">Book Now</Link>
                </div>
            </div>
            
        </div>
        </div>
        </OwlCarousel>
        </div>
        </div>

    </div>
  )
}

export default Events;