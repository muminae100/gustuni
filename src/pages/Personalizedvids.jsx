import "../assets/css/timeline.css";

const Personalizedvids = () => {
  return (
    <div style={{"backgroundColor": "black", "marginTop": "60px", "color": "white", "width": "100%", "height": "100%"}}>
        <div style={{"display": "flex", "justifyContent": "space-around", "alignItems": "flex-start", "padding": "20px", "position": "relative"}}>
            <div style={{"height": "100%", "width": "30%", "border": "1px solid #f1f1f1", "borderRadius": "20px", "padding": "20px", "position": "sticky", "top": 65}}>
                <img src="https://d31wcbk3iidrjq.cloudfront.net/xSBuPxOGA_qr5_HzCos.jpeg?h=900&w=750%27" alt="" width="100%" height="70%" style={{"borderRadius": "20px"}}/>
                <h2 className="text-white pt-3">Sean Astin</h2>
                <p>14k followers</p>
                <p>Actor - Lord of the Rings, Stranger Things </p>
                <button style={{"borderRadius": "15px", "backgroundColor": "transparent", "border": "1px solid white", "padding": "10px", "color": "white", "width": "100%"}}>Follow</button>
            </div>
            <div style={{"padding": "20px", "width": "55%"}}>
                <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                    <div>
                    <h4 className="text-white">Personalized video</h4>
                    <p>Get a personalized video you'll never forget. <a href="#" style={{"textDecoration": "underline", "color":"white"}}>Learn more</a></p>
                    </div>
                    <button className="btn btn-lg btn-success">Book from 300 KES</button>
                </div>

                <div style={{"width": "100%", "display": "flex", "alignItems": "center","overflowX": "scroll"}} className="pv">
                <div style={{"min-width": "210px", "height": "300px", "margin": "10px","position": "relative"}}>
                    <img src="https://d31wcbk3iidrjq.cloudfront.net/xSBuPxOGA_qr5_HzCos.jpeg?h=900&w=750%27" alt="" width="100%" height="100%" style={{"objectFit": "cover", "borderRadius": "20px"}} />
                    <i className="fa fa-play" style={{"position": "absolute", "top": "45%", "left": "50%"}}></i>
                </div>
                <div style={{"min-width": "210px", "height": "300px", "margin": "10px","position": "relative"}}>
                    <img src="https://d31wcbk3iidrjq.cloudfront.net/xSBuPxOGA_qr5_HzCos.jpeg?h=900&w=750%27" alt="" width="100%" height="100%" style={{"objectFit": "cover", "borderRadius": "20px"}} />
                    <i className="fa fa-play" style={{"position": "absolute", "top": "45%", "left": "50%"}}></i>
                </div>
                <div style={{"min-width": "210px", "height": "300px", "margin": "10px","position": "relative"}}>
                    <img src="https://d31wcbk3iidrjq.cloudfront.net/xSBuPxOGA_qr5_HzCos.jpeg?h=900&w=750%27" alt="" width="100%" height="100%" style={{"objectFit": "cover", "borderRadius": "20px"}} />
                    <i className="fa fa-play" style={{"position": "absolute", "top": "45%", "left": "50%"}}></i>
                </div>
                <div style={{"min-width": "210px", "height": "300px", "margin": "10px","position": "relative"}}>
                    <img src="https://d31wcbk3iidrjq.cloudfront.net/xSBuPxOGA_qr5_HzCos.jpeg?h=900&w=750%27" alt="" width="100%" height="100%" style={{"objectFit": "cover", "borderRadius": "20px"}} />
                    <i className="fa fa-play" style={{"position": "absolute", "top": "45%", "left": "50%"}}></i>
                </div>
                <div style={{"min-width": "210px", "height": "300px", "margin": "10px","position": "relative"}}>
                    <img src="https://d31wcbk3iidrjq.cloudfront.net/xSBuPxOGA_qr5_HzCos.jpeg?h=900&w=750%27" alt="" width="100%" height="100%" style={{"objectFit": "cover", "borderRadius": "20px"}} />
                    <i className="fa fa-play" style={{"position": "absolute", "top": "45%", "left": "50%"}}></i>
                </div>
                </div>

                <div className="text-white mt-3">
                    <p><i className="fa-regular fa-clock"></i> 3:29</p>
                    <p>Average video length</p>
                </div>

                <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "marginTop": "25px"}}>
                <h4 className="text-white font-bold">Reviews</h4>
                <p><a href="#" className="text-white" style={{"textDecoration": "underline"}}> View All (1248)</a></p>
                </div>


                <div  style={{"width": "100%", "display": "flex", "alignItems": "center","overflowX": "scroll"}} className="pv">
                    
                <div style={{"min-width": "300px", "marginRight": "10px", "backgroundColor": "rgb(16, 16, 16)", "padding": "20px", "borderRadius": "20px"}}>

                    <div style={{"display": "flex", "alignItems": "center"}}>
                    <div>
                    <p style={{"margin": "3px"}}>Bill</p>
                    </div>
                    <div>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    </div>
                    </div>

                    <p>2 months ago</p>
                    <p style={{"fontSize": "13px"}}>Sean you did an awesome job with your Father’s Day message for my husband Bill! He loved it! We shared it with family and friends and they enjoyed hearing from you as well. We hope you had a splendid Father’s Day with your wife and daughters! Can’t wait to see you soon on the big screen! Thanks again!!</p>
                </div>

                <div style={{"min-width": "300px", "margin": "10px", "backgroundColor": "rgb(16, 16, 16)", "padding": "20px", "borderRadius": "20px"}}>
                    <div style={{"display": "flex", "alignItems": "center"}}>
                    <div>
                    <p style={{"margin": "3px"}}>Bill</p>
                    </div>
                    <div>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    </div>
                    </div>
                    <p>2 months ago</p>
                    <p style={{"fontSize": "13px"}}>Sean you did an awesome job with your Father’s Day message for my husband Bill! He loved it! We shared it with family and friends and they enjoyed hearing from you as well. We hope you had a splendid Father’s Day with your wife and daughters! Can’t wait to see you soon on the big screen! Thanks again!!</p>
                </div>

                <div style={{"min-width": "300px", "margin": "10px", "backgroundColor": "rgb(16, 16, 16)", "padding": "20px", "borderRadius": "20px"}}>
                    <div style={{"display": "flex", "alignItems": "center"}}>
                    <div>
                    <p style={{"margin": "3px"}}>Bill</p>
                    </div>
                    <div>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    <i className="fa fa-star" style={{"fontSize": "7px", "margin": "3px"}}></i>
                    </div>
                    </div>
                    <p>2 months ago</p>
                    <p style={{"fontSize": "13px"}}>Sean you did an awesome job with your Father’s Day message for my husband Bill! He loved it! We shared it with family and friends and they enjoyed hearing from you as well. We hope you had a splendid Father’s Day with your wife and daughters! Can’t wait to see you soon on the big screen! Thanks again!!</p>
                </div>


                </div>

                <hr />

                <div>
                    <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                        <div>
                        <h4 className="text-white">Business video</h4>
                        <p style={{"fontSize": 13}}>Let them deliver engaging content to lift up your marketing campaigns, public events, and employee experiences. <a href="#" style={{"textDecoration": "underline", "color": "white"}}>Learn more</a></p>
                        </div>
                        <div className="w-50">
                        <button className="btn btn-lg btn-success">Book fron 799 KES</button>
                        </div>
                    </div>

                    <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "space-between", "width": "100%"}}>
                    <div style={{"width": "40%"}}>
                    <img src="https://d31wcbk3iidrjq.cloudfront.net/xSBuPxOGA_qr5_HzCos.jpeg?h=900&w=750%27" alt="" width="100%" style={{"borderRadius": "20PX"}}/>
                    </div>

                    <div style={{"width": "60%"}}>
                            <div class="row">
                                <div class="col-md-8 offset-md-3">
                                    <ul class="timeline">
                                        <li>
                                            <span className="font-bold">Ideation</span>
                                            <p>We'll collaborate with you to create a plan that outlines objectives.</p>
                                        </li>
                                        <li>
                                            <span className="font-bold">Talent selection</span>
                                            <p>We'll give you data-driven recommendations for stars that will help you stand out.</p>
                                        </li>
                                        <li>
                                        <span className="font-bold">Execution</span>
                                            <p>Your dedicated Cameo for Business team will help you bring it all to life.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <hr />

                <div>
                    <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                        <div>
                            <h4 className="text-white">Live video</h4>
                            <p style={{"fontSize": "13px"}}>Book a personal live video call for you or a group. <a href="#" className="text-white" style={{"textDecoration" : "underline"}}>Learn more</a></p>
                        </div>
                        <button className="btn btn-lg btn-success">Book from 750 KES</button>
                    </div>

                    <div className="mt-3 mb-3">
                        <img src="https://cdn.cameo.com/static/assets/PCLE_desktop.png" alt="" width="100%" height="100%" />
                    </div>

                    <div style={{"display": "flex", "alignItems": "center"}}>
                        <div className="text-white m-3">
                        <p><i className="fa fa-clock"></i> 10 mins</p>
                        <p style={{"fontSize": "12px"}}>Call length</p>
                        </div>
                        <div className="text-white m-3">
                            <p><i className="fa fa-users"></i> Up to 10 people</p>
                            <p style={{"fontSize": "12px"}}>Group size</p>
                        </div>
                    </div>

                </div>

                <hr />

                <div>
                    <h4 className="font-bold text-white">About Sean Astin</h4>
                    <p>Ah Ha! 👉 Stranger Things/Goonies/Rudy/Lord of the Rings/50 1st Dates/Memphis Belle/Meerkat Manor/Captain Underpants/Teenage Mutant Ninja Turtles/Agent Oso/Encino Man/Toy Soldiers/24/The Strain 🤪</p>
                </div>

                <hr />
                <div style={{"width": "100%", "display": "flex", "alignItems": "center","overflowX": "scroll"}} className="pv">
                <div style={{"min-width": "210px", "margin": "10px"}}>
                    <img src="https://d31wcbk3iidrjq.cloudfront.net/eTkXqK4FV_avatar-T7mj0xdGU.jpg?h=360&w=300&q=100" alt="" width="100%" height="70%" style={{"objectFit": "cover", "borderRadius": "20px"}} />
                    <div>
                        <h5 className="text-white font-bold mt-1">Billy Boyd</h5>
                        <p style={{"fontSize": "14px"}}>Actor - Lord of the Rings, Outlander</p>
                        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                            <p>$180 (USD)+</p>
                            <p>🚀24hr</p>
                        </div>
                    </div>
                </div>

                <div style={{"min-width": "210px", "margin": "10px"}}>
                    <img src="https://d31wcbk3iidrjq.cloudfront.net/4nEUBFeVG_avatar--HPX4iUtK.jpg?h=360&w=300&q=100" alt="" width="100%" height="70%" style={{"objectFit": "cover", "borderRadius": "20px"}} />
                    <div>
                        <h5 className="text-white font-bold mt-1">Billy Boyd</h5>
                        <p style={{"fontSize": "14px"}}>Actor - Lord of the Rings, Outlander</p>
                        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                            <p>$180 (USD)+</p>
                            <p>🚀24hr</p>
                        </div>
                    </div>
                </div>

                <div style={{"min-width": "210px", "margin": "10px"}}>
                    <img src="https://d31wcbk3iidrjq.cloudfront.net/static/user/pDOdIK65J-D7B8088D-5CEA-4CDB-8BF5-2FA99D352E8C.jpg?h=360&w=300&q=100" alt="" width="100%" height="70%" style={{"objectFit": "cover", "borderRadius": "20px"}} />
                    <div>
                        <h5 className="text-white font-bold mt-1">Billy Boyd</h5>
                        <p style={{"fontSize": "14px"}}>Actor - Lord of the Rings, Outlander</p>
                        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                            <p>$180 (USD)+</p>
                            <p>🚀24hr</p>
                        </div>
                    </div>
                </div>

                <div style={{"min-width": "210px", "margin": "10px"}}>
                    <img src="https://d31wcbk3iidrjq.cloudfront.net/UBhJuUnXc_P7x2KzmoD.jpg?h=360&w=300&q=100" alt="" width="100%" height="70%" style={{"objectFit": "cover", "borderRadius": "20px"}} />
                    <div>
                        <h5 className="text-white font-bold mt-1">Billy Boyd</h5>
                        <p style={{"fontSize": "14px"}}>Actor - Lord of the Rings, Outlander</p>
                        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                            <p>$180 (USD)+</p>
                            <p>🚀24hr</p>
                        </div>
                    </div>
                </div>
                </div>
                <hr />

            </div>
        </div>
    </div>
  )
}

export default Personalizedvids;