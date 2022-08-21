import { Link } from "react-router-dom";
import pimg4 from "../assets/images/pimg4.jpg";
import image6 from "../assets/images/image-6.jpeg";

const SoundPacks = () => {
  return (
   <>
   {/* <!-- Sound pack home section begins here --> */}
    <div class="container-fluid px-0" style={{"marginTop": "60px"}}>

        {/* <!-- Banner section begins here --> */}
        <div class="container-fluid m-0 p-0 position-relative bg-dark" style={{"height": "330px"}}>
            {/* <!-- image --> */}
            <img src={pimg4} width="390px" height="240px" class="m-0 p-0 rounded" alt="Gustuni soundpack image" style={{"position": "absolute", "left": "3%", "top": "14%"}} />

            {/* <!-- Title, price and download container --> */}
            <div class="position-absolute" style={{"bottom": "27%", "left": "45%"}}>
                {/* <!-- Title --> */}
                <span class="d-block h6 text-start text-white fw-bold">
                    Sound Pack Name
                </span>

                {/* <!-- Price --> */}
                <span class="d-block h6 text-start text-white">
                    KSH 3500
                </span>

                {/* <!-- Add to cart button --> */}
                <button class="btn btn-md btn-success">
                    <i class="fas fa-download"></i>
                    Download
                </button>
            </div>
            
        </div>
        {/* <!-- Banner section ends here --> */}

        {/* <!-- New arrivals section begins here --> */}
        <section id="NewArrivals" class="position-relative">
            {/* <!-- filter section begins here --> */}
            <div class="container mt-2 pt-3 mx-0 px-0">
                <div class="filter-menu n-arrival m-0 p-0">
                    <ul class="m-0 p-0">
                        <li class="active mx-1 text-start py-1 px-3 mb-3" data-filter="*">All Products</li>
                        <li class="mx-1 mb-3 text-start py-1 px-3" data-filter=".bundles">Bundles</li>
                        <li class="mx-1 mb-3 text-start py-1 px-3" data-filter=".drumkits">Drum kits</li>
                        <li class="mx-1 mb-3 text-start py-1 px-3" data-filter=".melodies">Melodies</li>
                        <li class="mx-1 mb-3 text-start py-1 px-3" data-filter=".midi">MIDI</li>
                        <li class="mx-1 mb-3 text-start py-1 px-3" data-filter=".oneshots">One-shots</li>
                        <li class="mx-1 mb-3 text-start py-1 px-3" data-filter=".serum">Serum</li>
                        <li class="mx-1 mb-3 text-start py-1 px-3" data-filter=".under">Under KSH 2000</li>
                        <li class="mx-1 mb-3 text-start py-1 px-3" data-filter=".free">Free</li>
                    </ul>
                </div>

                <div class="container-fluid m-0 p-0">
                    <div class="filter-items row narrive-cont">

                        {/* <!-- items --> */}
                        <div class="item bundles col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="./bundles.html" class="shadow">
                                {/* <!-- card --> */}
                                <div class="card bg-dark">
                                    <div class="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" class="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div class="card-body bg-dark">
                                        {/* <!-- pack name --> */}
                                        <span class="h6 card-title text-white">Pack Name</span>
                                        {/* <!-- price --> */}
                                        <p class="card-text text-white">
                                            <strong>KSH 3500</strong>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- items --> */}
                        <div class="item drumkits col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="./othres.html" class="shadow">
                                {/* <!-- card --> */}
                                <div class="card bg-dark">
                                    <div class="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" class="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div class="card-body bg-dark">
                                        {/* <!-- pack name --> */}
                                        <span class="h6 card-title text-white">Pack Name</span>
                                        {/* <!-- price --> */}
                                        <p class="card-text text-white">
                                            <strong>KSH 3500</strong>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- items --> */}
                        <div class="item melodies col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="#">
                                {/* <!-- card --> */}
                                <div class="card bg-dark">
                                    <div class="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" class="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div class="card-body bg-dark">
                                        {/* <!-- pack name --> */}
                                        <span class="h6 card-title text-white">Pack Name</span>
                                        {/* <!-- price --> */}
                                        <p class="card-text text-white">
                                            <strong>KSH 3500</strong>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- items --> */}
                        <div class="item midi col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="#">
                                {/* <!-- card --> */}
                                <div class="card bg-dark">
                                    <div class="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" class="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div class="card-body bg-dark">
                                        {/* <!-- pack name --> */}
                                        <span class="h6 card-title text-white">Pack Name</span>
                                        {/* <!-- price --> */}
                                        <p class="card-text text-white">
                                            <strong>KSH 3500</strong>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- items --> */}
                        <div class="item oneshots col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="#">
                                {/* <!-- card --> */}
                                <div class="card bg-dark">
                                    <div class="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" class="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div class="card-body bg-dark">
                                        {/* <!-- pack name --> */}
                                        <span class="h6 card-title text-white">Pack Name</span>
                                        {/* <!-- price --> */}
                                        <p class="card-text text-white">
                                            <strong>KSH 3500</strong>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- items --> */}
                        <div class="item serum col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="#">
                                {/* <!-- card --> */}
                                <div class="card bg-dark">
                                    <div class="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" class="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div class="card-body bg-dark">
                                        {/* <!-- pack name --> */}
                                        <span class="h6 card-title text-white">Pack Name</span>
                                        {/* <!-- price --> */}
                                        <p class="card-text text-white">
                                            <strong>KSH 3500</strong>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- items --> */}
                        <div class="item under col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="#">
                                {/* <!-- card --> */}
                                <div class="card bg-dark">
                                    <div class="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" class="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div class="card-body bg-dark">
                                        {/* <!-- pack name --> */}
                                        <span class="h6 card-title text-white">Pack Name</span>
                                        {/* <!-- price --> */}
                                        <p class="card-text text-white">
                                            <strong>KSH 3500</strong>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- items --> */}
                        <div class="item free col-lg-3 col-md-4 col-6 mx-0 mt-0 mb-3">
                            {/* <!-- link here --> */}
                            <a href="#">
                                {/* <!-- card --> */}
                                <div class="card bg-dark">
                                    <div class="bg-image">
                                        {/* <!-- image --> */}
                                        <img src={image6} alt="#" width="100%" height="180px" class="#" />
                                    </div>

                                    {/* <!-- card body --> */}
                                    <div class="card-body bg-dark">
                                        {/* <!-- pack name --> */}
                                        <span class="h6 card-title text-white">Pack Name</span>
                                        {/* <!-- price --> */}
                                        <p class="card-text text-white">
                                            <strong>KSH 3500</strong>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
         
                    </div>
                </div>

                {/* <!-- View more container --> */}
                <div class="container-fluid text-center mx-0 mt-0 px-0 py-4">
                    <button type="button" class="btn btn-outline-dark btn-sm my-1" style={{"width": "210px"}}>
                        View More
                    </button>
                </div>
            </div>
            {/* <!-- filter section ends here --> */}
        </section>

        {/* <!-- New arrivals section ends here --> */}
    </div>
    {/* <!-- Sound pack home section ends here --> */}

   </>
  )
}

export default SoundPacks;