import OwlCarousel from 'react-owl-carousel';
import SlideItem from './SlideItem';

const LicenseBeats = () => {
  return (
   <div style={{"marginBottom": 150}} className="container-fluid p-5">
   {/* ID Section  */}
   <section id="suggested-atofollow" className="suggested-atofollow mx-2">
     {/* header  */}
     <div className="container-fluid m-0 p-0">
       <span className="h6 d-block mb-1 fw-bold text-black">License beats</span>
       <span className="h6 d-block mb-3 text-black">Buy and sell track licenses. Instant download of tracked out stems.</span>
     </div>
 
    {/* Owl Carousel slider */}
     {/* <OwlCarousel className='owl-theme' items={5} loop margin={10} autoplay={true} dots={false} > */}
     <div className='d-flex justify-content-around align-items-center'>
      <SlideItem />
      <SlideItem />
      <SlideItem />
      <SlideItem />
      <SlideItem />
      </div>
     {/* </OwlCarousel> */}
 
   </section>
    </div>
  )
}

export default LicenseBeats;