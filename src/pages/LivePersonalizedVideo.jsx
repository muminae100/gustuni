import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LivePersonalizedVideo = () => {
    const [startDate, setStartDate] = useState(new Date());
    const calendarRef = useRef(null);

    // useEffect(() => {
    //   calendarRef.current.focus();
    // }, [])
    

  return (
    <div style={{"marginTop": "60px", "backgroundColor": "#080808", "width": "100%", "height": "100%", "padding": "20px", "display": "flex", "justifyContent": "center", "alignItems": "flex-start"}}>
        <div style={{"backgroundColor": "rgb(16, 16, 16)", "padding": "20px", "margin": "10px", "width": "30%", "borderRadius": "20px"}}>
            <img src="https://d31wcbk3iidrjq.cloudfront.net/xSBuPxOGA_qr5_HzCos.jpeg" alt="" style={{"width": "70px", "height": "70px", "borderRadius": "50%", "objectFit": "cover"}} className="m-3"/>

            <div className="p-3 mt-1">
            <p className="text-white">Cameo Live video call with</p>
            <h3 className="text-white font-weight-bold">Sean Astin</h3>
            </div>

            <div className="mt-3 p-3 text-white">
                <div style={{"display": "flex", "alignItems": "center"}}>
                    <p className="m-1"><i className="fa-regular fa-clock"></i></p> 
                    <p className="m-1">10 minutes</p>
                </div>
                <div style={{"display": "flex", "alignItems": "flex-start"}}>
                    <p className="m-1"><i className="fa fa-video"></i></p> 
                    <p className="m-1">Cameo Live details provided upon confirmation</p>
                </div>
                <div style={{"display": "flex", "alignItems": "center"}}>
                    <p className="m-1"><i className="fa fa-user-group"></i></p> 
                    <p className="m-1">Up to 10 people</p>
                </div>
                <div style={{"display": "flex", "alignItems": "center"}}>
                    <p className="m-1"><i className="fa fa-wallet"></i></p> 
                    <p className="m-1">KES 89,438</p>
                </div>
            </div>

            <hr />

            <div>
                <p className="text-white font-weight-bold p-3">After your request is accepted you’ll receive an email with your:</p>
                <div className="p-3">
                    <div style={{"display": "flex", "alignItems": "center"}}>
                        <p><i className="fa fa-check text-success"></i></p> 
                        <p className="p-3 text-white">Selected date and time</p>
                    </div>
                    <div style={{"display": "flex", "alignItems": "center"}}>
                        <p><i className="fa fa-check text-success"></i></p>
                        <p className="p-3 text-white">Receipt of your purchase</p>
                    </div>
                    <div style={{"display": "flex", "alignItems": "center"}}>
                        <p><i className="fa fa-check text-success"></i></p>
                        <p className="p-3 text-white">Link to the Cameo Live call</p>
                    </div>

                </div>
            </div>

            <div>
                <p className="text-white">Want more info? Check out our <a href="#" className="text-success">FAQ page.</a></p>
            </div>

        </div>

        <div style={{"backgroundColor": "rgb(16, 16, 16)", "padding": "20px", "margin": "10px", "width": "50%", "borderRadius": "20px"}}>
            <p className="text-white font-weight-bold">Select a date and time</p>
            <p className="text-white" style={{"fontSize": 13}}>Choose up to 3 dates and times (more choices are better in order to find a time that works for you and Sean Astin). Availability is shown within a two week window. Check back daily for more availability.</p>

            <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "space-around"}}>
            <div className="text-white m-3">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} ref={calendarRef} />
            </div>

            <div className="m-3">
                <p className="text-white font-weight-bold">Monday, August 8th</p>
                <p>All times in Time</p>

                <div>
                    <button style={{"margin": "10px"}} className="btn btn-outline-light">8:00 pm</button>
                    <button style={{"margin": "10px"}} className="btn btn-outline-light">8:30 pm</button>
                </div>
                <div>
                <button style={{"margin": "10px"}} className="btn btn-outline-light">9:00 pm</button>
                <button style={{"margin": "10px"}} className="btn btn-outline-light">9:30 pm</button>
                </div>
                <div>
                <button style={{"margin": "10px"}} className="btn btn-outline-light">10:00 pm</button>
                <button style={{"margin": "10px"}} className="btn btn-outline-light">10:30 pm</button>
                </div>
                <div>
                <button style={{"margin": "10px"}} className="btn btn-outline-light">11:00 pm</button>
                <button style={{"margin": "10px"}} className="btn btn-outline-light">11:30 pm</button>
                </div>
            </div>

            </div>

            <div>
                <p className="text-white font-weight-bold">How many participants?</p>
                <p>You can have a max of 10 participants</p>
                <select style={{"padding": "10px", "borderRadius": "10px"}}>
                    <option value="Select an option">Select an option</option>
                    <option value="Small group">Small group (1-5)</option>
                    <option value="Large group">Large group (5-10)</option>
                    <option value="Unsure">Unsure</option>
                </select>
            </div>

            <div className="mt-3"> 
                <p className="text-white font-weight-bold">What do you want to talk about?</p>
                <p>Sean Astin will see this</p>
                <textarea cols="80" rows="5"></textarea>
            </div>

            <button style={{"marginTop": "20px", "marginBottom": "20px"}} className="btn btn-success w-50">Continue to payment</button>

        </div>

    </div>
  )
}

export default LivePersonalizedVideo;