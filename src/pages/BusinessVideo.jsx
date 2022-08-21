const BusinessVideo = () => {
  return (
    <div style={{"backgroundColor": "#080808", "padding": "30px", "marginTop": "60px", "width": "100%", "height": "100%", "display" : "flex", "alignItems": "flex-start", "justifyContent": "space-around"}}>
        <div className="p-5">
            <h4 className="text-white font-weight-bold">Choose a Cameo</h4>

            <div style={{"backgroundColor": "rgb(16, 16, 16)", "padding": "20px", "borderRadius": "20px", "marginTop": "20px"}}>
                <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                    <h6 className="text-white font-weight-bold">Marketing</h6>
                    <p className="text-white font-weight-bold">KES 1,192,380.75</p>
                </div>
                <p className="text-white">Social media, paid advertising, and external communications</p>
            </div>

            <div style={{"backgroundColor": "rgb(16, 16, 16)", "padding": "20px", "borderRadius": "20px", "marginTop": "20px"}}>
                <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                    <h6 className="text-white font-weight-bold">Public events</h6>
                    <p className="text-white font-weight-bold">KES 1,192,380.75</p>
                </div>
                <p className="text-white">Conferences, webinars, and other customer-facing events</p>
            </div>

            <div style={{"backgroundColor": "rgb(16, 16, 16)", "padding": "20px", "borderRadius": "20px", "marginTop": "20px"}}>
                <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                    <h6 className="text-white font-weight-bold">Internal communication</h6>
                    <p className="text-white font-weight-bold">KES 953,880.75</p>
                </div>
                <p className="text-white">Meetings, retreats, and employee recognition</p>
            </div>

            <div className="mt-3">
                <p className="text-white" style={{"textAlign": "center"}}>Looking for something else? <a href="#" style={{"textDecoration": "underline", "color": "white"}}>Let's chat</a></p>
            </div>

            <button style={{"width": "100%", "padding": "10px", "borderRadius": "20px", "marginTop": "10px"}} className="btn btn-success">
                Next
            </button>

        </div>

        <div className="p-5 text-white" style={{"width": "30%"}}>
            <div style={{"display": "flex", "alignItems": "center"}}>
            <img src="https://d31wcbk3iidrjq.cloudfront.net/xSBuPxOGA_qr5_HzCos.jpeg?h=80&w=80" alt="" width={70} height={70} style={{"borderRadius": "50%", "margin": "10px"}}/>
            <div style={{"margin": "10px", "lineHeight": 0.5}}>
                <p>Sean Astin</p>
                <p><i className="fa fa-star"></i> 5.0</p>
            </div>
            </div>
            <hr style={{"width": "100%"}}/>
            <div>
                <h6 className="font-weight-bold text-white mb-5 mt-3">Order details</h6>
                <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                    <p>Marketing</p>
                    <p>KES 1,192,380.75</p>
                </div>
                <hr style={{"width": "100%"}}/>
                <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                    <p className="font-weight-bold">Total</p>
                    <p className="font-weight-bold">KES 1,192,380.75</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default BusinessVideo;