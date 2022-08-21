import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TracksEdit = () =>{
    const [startDate, setStartDate] = useState(new Date());
    const calendarRef = useRef(null);
    const [voiceTag, setVoiceTag] = useState(false);

    return (
        <div style={{"marginTop": "65px", "backgroundColor": "#080808", "width": "100%", "height": "100%", "padding": "30px"}}>
            <h3 className="text-white font-weight-bolder">Track Metadata Editor</h3>
            <h6 className="text-white mt-5">General Information</h6>
            <div style={{"backgroundColor": "#1b1b1b", "padding": "20px", "borderRadius": "10px"}}>
                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start"}}>
                    <div>
                    <p className="text-white font-weight-bolder">Title</p>
                    <input type="text" className="form-control bg-dark text-white" style={{"border": "none"}} defaultValue="New Track"/>
                    <p style={{"fontSize": 12}}>9 out of 60 Maximum characters allowed</p>
                    <p className="text-white font-weight-bolder">TAGS* (3)</p>
                    <input type="text" className="form-control bg-dark text-white" style={{"border": "none"}} defaultValue="Tags" />
                    <p className="text-white font-weight-bolder">TRACK TYPE*</p>
                    <select className="form-control bg-dark text-white" style={{"border": "none"}}>
                        <option value="Beat">Beat</option>
                        <option value="Beatwithhook">Beat with hook</option>
                        <option value="topline">Top line</option>
                        <option value="vocals">Vocals</option>
                        <option value="song">Song</option>
                    </select>
                    <p className="text-white font-weight-bolder">RELEASE DATE*</p>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} ref={calendarRef} className="form-control bg-dark text-white border-0"/>
                    </div>
                    <div>
                    <p className="text-white font-weight-bolder text-center">AUDIO FILES FOR DOWNLOAD</p>
                    <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around"}} className="bg-dark p-2 m-2">
                    <i className="fa fa-music text-white"></i>
                    <div>
                        <p className="text-white">Un-Tagged WAV or MP3</p>
                        <p className="text-white">.WAV (.MP3)</p>
                    </div>
                    </div>
                    <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around"}} className="bg-dark p-2 m-2">
                    <i className="fa fa-music text-white"></i>
                    <div>
                        <p className="text-white">Un-Tagged WAV or MP3</p>
                        <p className="text-white">.WAV (.MP3)</p>
                    </div>
                    </div>

                    <p className="text-white font-weight-bold">AUDIO FILE FOR STREAMING (Optional)</p>

                    <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around"}} className="bg-dark p-2 m-2">
                    <i className="fa fa-music text-white"></i>
                    <div>
                        <p className="text-white">Un-Tagged WAV or MP3</p>
                        <p className="text-white">.WAV (.MP3)</p>
                    </div>
                    </div>

                    </div>
                    <div style={{"textAlign": "center"}}>
                        <img src="https://www.beatstars.com/assets/img/placeholders/photo-placeholder.svg" width={200} height={200} />
                        <p>Artwork Dimension</p>
                        <p>Preferred: 1500x1500px, Minimum: 500x500px</p>
                        <p>Make your own using our free template, <span style={{"textDecoration": "underline"}}>click here to use it</span></p>
                        <button className="btn btn-success btn-lg">Upload New Image</button>
                    </div>
                </div>

                <p className="text-white font-weight-bolder">URL OF YOUR TRACK</p>
                <div className="bg-dark" style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "borderRadius": 10, "width": "50%"}}>
                    <p className="font-weight-bold text-white p-2">https://www.beatstars.com/beat/12481984</p>
                    <p className="text-success p-2">Copy</p>
                </div>
            </div>
            <h6 className="text-white mt-5">Selling Preferences</h6>
            <div style={{"backgroundColor": "#1b1b1b", "padding": "20px", "borderRadius": "10px"}}>
                <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "space-around"}}>
                    <div style={{"width": "50%"}}>
                        <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "space-between"}} className="p-2">
                        <div>
                            <input type="checkbox" className="bg-dark"/>&nbsp;
                            <label htmlFor="" style={{"color": "gray"}}>Not for sale</label>
                        </div>
                        <div>
                            <input type="checkbox" />&nbsp;
                            <label htmlFor="" style={{"color": "gray"}}>Private</label>
                        </div>
                        <div>
                            <input type="checkbox" />&nbsp;
                            <label htmlFor="" style={{"color": "gray"}}>Exclude from bulk discounts</label>
                        </div>
                        </div>
                        <p className="text-success p-2">Please visit <span style={{"textDecoration": "underline"}}>Payments Accounts</span> section and connect your PayPal or Stripe account in order for you to be able to setup a price for this track.</p>
                        <p className="text-white p-2">BASIC LICENSE (MP3) PRICE</p>
                        <input type="text" className="form-control bg-dark text-white" style={{"border": "none"}} defaultValue="29.95" />
                        <p className="text-white p-2">PREMIUM LICENSE (MP3 AND WAV) PRICE</p>
                        <input type="text" className="form-control bg-dark text-white" style={{"border": "none"}} defaultValue="49.95" />
                        <p className="p-2">Note: You may customize your Licenses through here: <span className="text-success">Licenses & Contracts</span></p>
                        <p className="p-2">To disable a License for this specific Track please enter 0 (or 0.00). This will disable purchases for that specific license.</p>
                    </div>
                    <div>
                        <h6 className="text-white p-2">FREE DOWNLOAD OPTIONS</h6>
                        <input type="radio" defaultChecked/> <label htmlFor="" className="text-white">No</label><br />
                        <input type="radio" onChange={() =>setVoiceTag(!voiceTag)}/> <label htmlFor="" className="text-white">Yes with voice tag (MP3 Version)</label><br />
                        <input type="radio" /> <label htmlFor="" className="text-white">Yes, untagged (MP3 Version - 320kbps)</label><br />
                        <input type="radio" /> <label htmlFor="" className="text-white">Allow anonymous guest downloads</label><br />

                        <p className="text-white mt-3">REQUIRE DOWNLOADERS TO</p>
                        {voiceTag && (
                            <>
                            <input type="radio" /> <label htmlFor="" className="text-white">Capture email only</label><br />
                            <input type="radio" /> <label htmlFor="" className="text-white">Social Follow</label><br />

                            <button className="btn btn-primary m-2">Connect to twitter</button><br />
                            <button className="btn btn-danger m-2">Connect with Youtube</button>
                            </>
                        )}
                        
                    </div>
                </div>
            </div>

            <h6 className="text-white mt-5">Track Details</h6>
            <div style={{"backgroundColor": "#1b1b1b", "padding": "20px", "borderRadius": "10px"}}>
            <input type="checkbox" /> <label htmlFor="" className="text-white">I used 3rd party loops or/and samples</label>
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start"}}>
                <div style={{"width": "50%"}} className="p-2">
                    <p className="text-white mt-2">PRIMARY GENRE*</p>
                    <input type="text" className="form-control bg-dark text-white" style={{"border": "none"}} defaultValue="New Track"/>
                    <p className="text-white mt-2">PRIMARY MOOD</p>
                    <select className="form-control bg-dark text-white" style={{"border": "none"}}>
                        <option value="none">None</option>
                        <option value="Beatwithhook">Accomplished</option>
                        <option value="topline">Adored</option>
                        <option value="vocals">Angry</option>
                        <option value="song">Annoyed</option>
                    </select>
                    <p className="text-white mt-2">DESCRIPTION</p>
                    <textarea cols="30" rows="4" className="form-control bg-dark text-white" style={{"border": "none"}} >
                        Enter Description
                    </textarea>
                    <p>0 out of 120 Maximum characters allowed</p>
                </div>
                <div style={{"width": "50%"}} className="p-2">
                    <p className="text-white mt-2">SUBGENRE</p>
                    <select className="form-control bg-dark text-white" style={{"border": "none"}}>
                        <option value="none">None</option>
                    </select>
                    <p className="text-white mt-2">SECONDARY MOOD</p>
                    <select className="form-control bg-dark text-white" style={{"border": "none"}}>
                        <option value="none">None</option>
                        <option value="Beatwithhook">Accomplished</option>
                        <option value="topline">Adored</option>
                        <option value="vocals">Angry</option>
                        <option value="song">Annoyed</option>
                    </select>
                    <p className="text-white mt-2">BPM(Beats per minute)</p>
                    <input type="text" className="form-control bg-dark text-white" style={{"border": "none"}} defaultValue="0"/>
                    <p className="text-white mt-2">KEY</p>
                    <select className="form-control bg-dark text-white" style={{"border": "none"}}>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            </div>

            <h6 className="text-white mt-5">Collaborators</h6>
            <div style={{"backgroundColor": "#1b1b1b", "padding": "20px", "borderRadius": "10px"}}>
                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start"}}>
                    <div style={{"width": "50%", "display": "flex", "justifyContent": "center", "alignItems": "center", "height": "100%", "flexDirection": "column"}} className="p-3">
                        <h4 className="text-white">ROLE</h4>
                        <p className="text-white">MAIN COLLABORATOR</p>
                        <button className="btn btn-success">Add Collaborator</button>
                    </div>
                    <div style={{"color": "#f1f1f1"}} className="p-3">
                        <p>Before you add Collaborators, please make sure that you & your Collaborators meet the requirements below:</p>
                        <ul>
                            <li>You must be the "Primary Contributor" to add Collaborators</li>
                            <li> Make sure you Follow each other.</li>
                            <li>Your Collaborator has to be a BeatStars Registered Member and at least subscribed to a "FREE" Subscription Account</li>
                            <li> Needs to have their PayPal Email Address properly Setup</li>
                            <li>You can only add up to Five (5) Collaborators per Track</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h6 className="text-white mt-5">Related Videos</h6>
            <div style={{"backgroundColor": "#1b1b1b", "padding": "20px", "borderRadius": "10px"}}>
                <p className="p-2">Only link videos that are related to this Track. Following examples are: Video Promotions or Official Music Video.</p>
                <div style={{"width": "100%", "display": "flex", "justifyContent": "center"}}>
                <button className="btn btn-success mt-2">Add a Youtube Video URL</button>
                </div>
            </div>

        </div>
    )
}

export default TracksEdit;