import { useState } from "react";

const BookPersonalizedVideo = () => {
    const [birthday, setBirthday] = useState(true);
    const [pepTalk, setPepTalk] = useState(false);
    const [roast, setRoast] = useState(false);
    const [other, setOther] = useState(false);

    const handleShowBirthday = () =>{
        setBirthday(true);
        setPepTalk(false);
        setRoast(false);
        setOther(false);
    }

    const handleShowPepTalk = () =>{
        setBirthday(false);
        setPepTalk(true);
        setRoast(false);
        setOther(false);
    }

    const handleShowRoast = () =>{
        setBirthday(false);
        setPepTalk(false);
        setRoast(true);
        setOther(false);
    }

    const handleShowOther = () =>{
        setBirthday(false);
        setPepTalk(false);
        setRoast(false);
        setOther(true);
    }

  return (
    <div style={{"marginTop": "60px", "backgroundColor": "#080808", "width": "100%", "height": "100%", "display": "flex", "justifyContent": "center", "alignItems": "center"}}>
     <div style={{"width": "50%"}}>
        <div style={{"padding": "10px", "display": "flex", "alignItems": "center"}}>
            <img src="https://d31wcbk3iidrjq.cloudfront.net/xSBuPxOGA_qr5_HzCos.jpeg?w=100&h=100" alt="" width={50} height={50} style={{"borderRadius": "50%"}} className="m-3"/>
            <h4 className="text-white m-3">New request for Sean Astin</h4>
        </div>

        <div style={{"padding": "20px", "backgroundColor": "rgb(16, 16, 16)"}}>
            <h5 className="text-white" style={{"textAlign": "center"}}>1. Who is this Cameo for?</h5>
            <label htmlFor="name" className="text-white mb-1">To (first name)</label><br />
            <input type="text" placeholder="Leah" required className="form-control"/><br />
            <button className="btn btn-outline-light btn-lg m-1">He/Him</button>
            <button className="btn btn-outline-light btn-lg m-1">She/Her</button>
            <button className="btn btn-outline-light btn-lg m-1">They/Them</button>
        </div>

        <div style={{"padding": "20px", "backgroundColor": "rgb(16, 16, 16)", "marginTop": "20px"}}>
        <h5 className="text-white" style={{"textAlign": "center"}}>2. Who is this Cameo from?</h5>
            <label htmlFor="name" className="text-white mb-1">From (first name)</label><br />
            <input type="text" placeholder="Leah" required className="form-control"/><br />
            <button className="btn btn-outline-light btn-lg m-1">He/Him</button>
            <button className="btn btn-outline-light btn-lg m-1">She/Her</button>
            <button className="btn btn-outline-light btn-lg m-1">They/Them</button>
        </div>

        <div style={{"padding": "20px", "backgroundColor": "rgb(16, 16, 16)", "marginTop": "20px"}}>
            <h5 className="text-white" style={{"textAlign": "center"}}>3. What's the occasion?</h5>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <div className="p-3 m-3">
                <i className="fa fa-gift p-3 text-white" style={{"border": `2px solid ${birthday? '#4CAF50': '#f1f1f1'}`, "borderRadius": "50%"}} onClick={handleShowBirthday}></i>
                <p className="mt-1 text-white">Birthday</p>
                </div>
                <div className="p-3 m-3">
                <i className="fa fa-arrow-trend-up p-3 text-white" style={{"border": `2px solid ${pepTalk? '#4CAF50': '#f1f1f1'}`, "borderRadius": "50%"}} onClick={handleShowPepTalk}></i>
                <p className="mt-1 text-white">Pep Talk</p>
                </div>
                <div className="p-3 m-3">
                <i className="fa fa-fire p-3 text-white" style={{"border": `2px solid ${roast? '#4CAF50': '#f1f1f1'}`, "borderRadius": "50%"}} onClick={handleShowRoast}></i>
                <p className="mt-1 text-white">Roast</p>
                </div>
                <div className="p-3 m-3">
                <i className="fa fa-star p-3 text-white" style={{"border": `2px solid ${other? '#4CAF50': '#f1f1f1'}`, "borderRadius": "50%"}} onClick={handleShowOther}></i>
                <p className="mt-1 text-white">Other</p>
                </div>
            </div>
        </div>

        <div style={{"padding": "20px", "backgroundColor": "rgb(16, 16, 16)", "marginTop": "20px", "marginBottom": "20px"}}>
            <h5 className="text-white" style={{"textAlign": "center", "marginBottom": 20}}>4. Make your request memorable</h5>
            {birthday && (
                <>
                    <div className="mb-3">
                        <label htmlFor="date" className="text-white mb-1">When is their birthday?</label>
                        <input type="text" placeholder="MM / DD" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="text-white mb-1">How old are they turning? (optional)</label>
                        <input type="text" className="form-control" placeholder="Age"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="text-white mb-1">Instructions for Sean Astin</label><br />
                        <textarea rows="3" cols={82} ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="text-white mb-1">What's something about the recipient you want Sean Astin to know?</label><br />
                        <textarea rows="3" cols={82}></textarea>
                    </div>
                   
                </>
            )}

            {pepTalk && (
                <>
                <div className="mb-3">
                    <label htmlFor="" className="text-white mb-1">What's going on with the recipient?</label>
                    <textarea rows="3" cols={82}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="text-white mb-1">How can Sean Astin help?</label>
                    <textarea rows="3" cols={82}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="text-white mb-1">What's something about the recipient you want Sean Astin to know?</label>
                    <textarea rows="3" cols={82}></textarea>
                </div>
                </>
            )}

            {roast && (
                <>
                <div className="mb-3">
                    <label htmlFor="" className="text-white mb-1">What would you like Sean Astin to roast the recipient about?</label>
                    <textarea rows="3" cols={82}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="text-white mb-1">What's something about the recipient you want Sean Astin to know?</label>
                    <textarea rows="3" cols={82}></textarea>
                </div>
                </>
            )}

            {other && (
                <>
                <div className="mb-3">
                    <label htmlFor="" className="text-white mb-1">What's the occasion?</label>
                    <textarea rows="3" cols={82}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="text-white mb-1">Instructions for Sean Astin</label>
                    <textarea rows="3" cols={82}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="text-white mb-1">What's something about the recipient you want Sean Astin to know?</label>
                    <textarea rows="3" cols={82}></textarea>
                </div>
                </>
            )}

                    <div className="mb-3">
                        <input type="checkbox" /> <label htmlFor="" className="text-white ">More instructions</label>
                        <p>Add 400 characters of more personalized direction</p>
                    </div>
                    <div className="mb-3">
                        <input type="checkbox" /> <label htmlFor="" className="text-white">Hide this video from Sean Astin's profile</label>
                    </div>
                    <button className="btn btn-success btn-lg w-100">Continue</button>
        </div>

     </div>
    </div>
  )
}

export default BookPersonalizedVideo;