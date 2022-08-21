import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Chip from '@mui/material/Chip';
import FlagIcon from '@mui/icons-material/Flag';
import VerifiedIcon from '@mui/icons-material/Verified';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Instrumentals = () =>{
    const [showPlayBtn, setShowPlayBtn] = useState(false);
    const [showAccordion, setShowAccordion] = useState(false);

    return (
        <>
        <div style={{"display": "flex", "alignItems": "flex-start", "marginTop": "60px", "justifyContent": "space-around", "backgroundColor": "#080808"}} className="p-5">
            <div style={{"width": "25%"}} className="p-3">
                <div className="bg-dark p-3 rounded" style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>

                    <div style={{"position": "relative"}} onMouseEnter={() =>setShowPlayBtn(true)} onMouseLeave={() =>setShowPlayBtn(false)}>
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL2l2TTlCQzR6OGp1SS9lYXJseW1vcm5pbmdzLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9fX0=" alt="artist image" />
                    {showPlayBtn && (
                    <div style={{"position": "absolute", "top": "45%", "left": "45%", "width": "100%"}}>
                    <PlayCircleIcon sx={{fontSize: 40}} className="text-info"/>
                    </div>
                    )}
                    </div>

                    <h4 style={{"textAlign": "center"}} className="text-white p-3">Early Mornings | Drake x Jay Z Type Beat</h4>
                    <p style={{"textAlign": "center"}}><span className="text-white"> Buckroll </span>
                    {/* <i className="fa fa-check-circle text-primary"></i> */}
                    <VerifiedIcon className="text-primary"/>
                    </p>
                    <div className="text-white" style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "space-around"}}>
                        <div className="p-3">
                        <FavoriteBorderIcon sx={{fontSize: "25px"}}/>
                        <p>11.4 k</p>   
                        </div>
                        <div className="p-3">
                        <i className="fa fa-retweet" style={{"fontSize": "25px"}}></i>
                        <p>189</p>
                        </div>
                        <div className="p-3">
                        <i className="fa fa-plus" style={{"fontSize": "25px"}}></i>
                        </div>
                        <div className="p-3">
                        <i className="fa fa-upload" style={{"fontSize": "25px"}}></i>
                        </div>
                    </div>

                    <button className="w-100 btn btn-secondary"><i className="fa fa-download"></i> Download for free</button>

                    <hr style={{"border": "1px solid gray", "width": "100%"}}/>
                    <div className="text-white p-3 w-100">
                    <p>INFORMATION</p>
                        <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                            <p>Published</p>
                            <p>Mar 23, 2022</p>
                        </div>
                        <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                            <p>BPM</p>
                            <p>92</p>
                        </div>
                        <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                            <p>Plays</p>
                            <p>554.1k</p>
                        </div>
                    </div>

                    <hr style={{"border": "1px solid gray", "width": "100%"}}/>

                    <div className="text-white p-2 w-100">
                        <p>TAGS</p>
                        <div>
                        <Chip label="#freestyle" sx={{color: "white", m: 1, bgcolor: "#808080"}}/>
                        <Chip label="#drake" sx={{color: "white", m: 1, bgcolor: "#808080"}}/>
                        <Chip label="#jay z" sx={{color: "white", m: 1, bgcolor: "#808080"}}/>
                        </div>
                    </div>
                    
                    <hr style={{"border": "1px solid gray", "width": "100%"}}/>
                    <div className="text-white p-3 w-100">
                        <p>ABOUT</p>
                        <p>Buy 1 Get 1 Free!</p>
                    </div>
                    <hr style={{"border": "1px solid gray", "width": "100%"}}/>
                    <div className="text-primary p-3 w-100">
                        <p><FlagIcon /> Report Track</p>
                    </div>
                </div>
            </div>
            <div style={{"flexGrow": 1}} className="p-3">
                <div className="bg-dark w-100 text-white p-3 rounded mb-3">
                    <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}} className="p-3">
                        <h4 className="text-white">Licensing</h4>
                        <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                            <div className="p-3" style={{"lineHeight": 0.5}}>
                            <p>TOTAL :</p>
                            <p>$29.99</p>
                            </div>
                            <div className="p-3">
                                <button className="btn btn-primary"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                            </div>
                        </div>
                    </div>

                <hr style={{"border": "1px solid gray", "width": "100%"}}/>

                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "width": "100%"}}>
                    <div className="p-3 rounded" style={{"border": "1px solid gray", "width": "30%"}}>
                        <h5 className="text-white">Mp3 Lease</h5>
                        <p>$29.99</p>
                        <p style={{"fontSize": "12px"}}>MP3</p>
                    </div>
                    <div className="p-3 rounded" style={{"border": "1px solid gray", "width": "30%"}}>
                        <h5 className="text-white">WAV Lease</h5>
                        <p>$49.99</p>
                        <p style={{"fontSize": "12px"}}>MP3 AND WAV</p>
                    </div>
                    <div className="p-3 rounded" style={{"border": "1px solid gray", "width": "30%"}}>
                        <h5 className="text-white">Unlimited Lease</h5>
                        <p>$909.99</p>
                        <p style={{"fontSize": "12px"}}>MP3, WAV AND TRACK SYSTEMS</p>
                    </div>
                </div>

                <hr style={{"border": "1px solid gray", "width": "100%"}}/>
  
                <div className="p-3">
                <h4 style={{"transition": "0.4s", "color": "white"}} onClick={() =>setShowAccordion(!showAccordion)}>Usage terms {showAccordion? <i className="fa fa-caret-up"></i> : <i className="fa fa-caret-down"></i>}</h4>

                {showAccordion && (
                <div className="mt-3">
                <p>Mp3 Lease ($29.99)</p>

                <div style={{"display": "flex", "justifyContent": "space-between","alignItems": "center"}}>
                <div style={{"display": "flex"}}>
                    <i class="fa-solid fa-microphone-lines" style={{"color": "gray"}}></i>
                    <p style={{"marginLeft": "10px", "color": "gray"}}>USED FOR MUSIC RECORDING</p>
                </div>
                <div style={{"display": "flex"}}>
                    <i class="fa-solid fa-box" style={{"color": "gray"}}></i>
                    <p style={{"marginLeft": "10px", "color": "gray"}}>DISTRIBUTE UP TO 2000 COPIES</p>
                </div>
                <div style={{"display": "flex"}}>
                    <i class="fa-solid fa-circle-play" style={{"color": "gray"}}></i>
                    <p style={{"marginLeft": "10px", "color": "gray"}}>25000 ONLINE AUDIO STREAMS</p>
                </div>
                </div>

                <div style={{"display": "flex", "justifyContent": "space-between","alignItems": "center"}}>
                <div style={{"display": "flex"}} >
                    <i class="fa-solid fa-video" style={{"color": "gray"}}></i>
                    <p style={{"marginLeft": "10px", "color": "gray"}}>1 MUSIC VIDEO</p>
                </div>
                <div style={{"display": "flex"}}>
                    <i className="fa fa-microphone" style={{"color": "gray"}}></i>
                    <p style={{"marginLeft": "10px", "color": "gray"}}>FOR PROFIT LIVE PERFORMANCES</p>
                </div>
                <div style={{"display": "flex"}}>
                    <i class="fa-solid fa-radio" style={{"color": "gray"}}></i>
                    <p style={{"marginLeft": "10px", "color": "gray"}}>NO RADIO BROADCASTING RIGHTS</p>
                </div>
                </div>
                
                </div>
                )}

                </div>

                </div>

                <div className="bg-dark w-100 text-white p-5 mt-3 rounded mb-3">
                    <h4 className="text-white">Comments</h4>
                    <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                    <Avatar alt="Remy Sharp" src="https://main.v2.beatstars.com/fit-in/100x100/filters:format(.jpeg):quality(80):fill(000000)//users/prod/197693/image/1631669327/june-b-picjpg.jpg" />
                    <input type="text" style={{"flexGrow": 1, "backgroundColor": "transparent", "border": "none", "borderBottom": "1px solid gray"}} className="m-3" placeholder='Share your thoughts...'/>
                    <SendIcon sx={{fontSize: "30px"}}/>
                    </div>

                    <div style={{"display": "flex", "alignItems": "flex-start"}} className="mt-5">
                    <Avatar alt="Remy Sharp" src="https://main.v2.beatstars.com/fit-in/100x100/filters:format(.jpeg):quality(80):fill(000000)//users/prod/197693/image/1631669327/june-b-picjpg.jpg" />
                    <div style={{"marginLeft": "15px"}}>
                        <div style={{"display": "flex", "alignItems": "center"}}>
                            <p className='font-bold' style={{"marginRight": "10px"}}>Junebhookmonsta</p>
                            <p style={{"fontSize": "10px"}}>5 hours ago</p>
                        </div>
                        <p>gonna lace a hook to this bro</p>
                        <div>
                            <span style={{"marginRight": "15px"}}><i className='fa fa-thumbs-up'></i> 1</span>
                            <span style={{"fontSize": "12px"}}>Reply</span>
                        </div>
                    </div>
                    </div>

                    <div style={{"display": "flex", "alignItems": "flex-start"}} className="mt-5">
                    <Avatar alt="Remy Sharp" src="https://www.beatstars.com/assets/img/placeholders/default-avatar-circle.svg" />
                    <div style={{"marginLeft": "15px"}}>
                        <div style={{"display": "flex", "alignItems": "center"}}>
                            <p className='font-bold' style={{"marginRight": "10px"}}>Silvatheproducer</p>
                            <p style={{"fontSize": "10px"}}>5 hours ago</p>
                        </div>
                        <p>yuh 🔥🔥</p>
                        <div>
                            <span style={{"marginRight": "15px"}}><i className='fa fa-thumbs-up'></i> 3</span>
                            <span style={{"fontSize": "12px"}}>Reply</span>
                        </div>
                    </div>
                    </div>

                    <div style={{"display": "flex", "alignItems": "flex-start"}} className="mt-5">
                    <Avatar alt="Remy Sharp" src="https://main.v2.beatstars.com/fit-in/100x100/filters:format(.jpeg):quality(80):fill(000000)//users/prod/3481243/image/1653236559/20220519-202011.jpg" />
                    <div style={{"marginLeft": "15px"}}>
                        <div style={{"display": "flex", "alignItems": "center"}}>
                            <p className='font-bold' style={{"marginRight": "10px"}}>Prod SuperVini</p>
                            <p style={{"fontSize": "10px"}}>5 hours ago</p>
                        </div>
                        <p>This beat is hard, I really like to make Drake type beat too! 🔥 🔥</p>
                        <div>
                            <span style={{"marginRight": "15px"}}><i className='fa fa-thumbs-up'></i> 1</span>
                            <span style={{"fontSize": "12px"}}>Reply</span>
                        </div>
                    </div>
                    </div>

                    <button className='btn btn-secondary mt-5'>View All (10)</button>
                </div>

                <div className='mt-5'>
                    <h4 className="text-white mb-2">Related Tracks</h4>

                    <div style={{"width": "100%", "display": "flex", "justifyContent": "space-between", "alignItems": "flex-start"}}>
                        <div>
                            <img src="https://main.v2.beatstars.com/fit-in/tracks/240x240/filters:format(.jpeg):quality(80):fill(000000)/prod/track/artwork/TK12228867/artwork.png" alt="" className='rounded'/>
                            <p className='text-primary'>$29.46</p>
                            <h6 className='text-white'>BLESSED || KANYE WEST</h6>
                            <p>TonalStories</p>
                        </div>

                        <div>
                            <img src="https://main.v2.beatstars.com/fit-in/tracks/240x240/filters:format(.jpeg):quality(80):fill(000000)/users/prod/161166/image/1655130582/flat-750x-075-f-pad-750x1000-f8f8f8u5.jpg" alt="" className='rounded'/>
                            <p className='text-primary'>$29.46</p>
                            <h6 className='text-white'>BLESSED || KANYE WEST</h6>
                            <p>TonalStories</p>
                        </div>

                        <div>
                            <img src="https://main.v2.beatstars.com/fit-in/tracks/240x240/filters:format(.jpeg):quality(80):fill(000000)/users/prod/375341/image/1655404201/speak-to-me-.jpg" alt="" className='rounded'/>
                            <p className='text-primary'>$29.46</p>
                            <h6 className='text-white'>BLESSED || KANYE WEST</h6>
                            <p>TonalStories</p>
                        </div>

                        <div>
                            <img src="https://main.v2.beatstars.com/fit-in/tracks/240x240/filters:format(.jpeg):quality(80):fill(000000)/users/prod/375341/image/1657888331/light-my-way.jpg" alt="" className='rounded'/>
                            <p className='text-primary'>$29.46</p>
                            <h6 className='text-white'>BLESSED || KANYE WEST</h6>
                            <p>TonalStories</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Instrumentals;