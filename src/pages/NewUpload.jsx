import { Link } from "react-router-dom";

const NewUpload = () => {
  return (
    <div style={{"backgroundColor": "#080808", "width": "100%", "marginTop": "65px", "padding": "30px", "height": "100%"}}>
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between","padding": "20px", "marginBottom": "20px"}}>
            <h3 className="text-white">Create</h3>
            <button className="btn btn-lg btn-success">Need Help?</button>
        </div>
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "20px"}}>
        <div style={{"backgroundColor": "#1b1b1b", "width": "300px", "padding": "20px", "textAlign": "center"}}>
            <i class="fa-solid fa-compact-disc" style={{"fontSize": "60px", "color": "#ffffff"}}></i>
            <h4 className="text-white font-weight-bold p-3">Production Tracks</h4>
            <p style={{"color": "#ffffff", "fontSize": 13}} className="p-3">Production tracks are music files that are intended to be licensed by recording artists and songwriters. These files can be beats, beats with choruses, fully referenced song files and vocal tracks.
            Production tracks are commonly created by music producers, beat-makers, musicians and vocalists.</p>
            <Link className="btn btn-lg btn-success" to="/tracks/edit/1">
                <i className="fa fa-plus"></i> Create
            </Link>
        </div>
        <div style={{"backgroundColor": "#1b1b1b", "width": "300px", "padding": "20px", "textAlign": "center"}}>
            <i class="fa-solid fa-microphone-lines" style={{"fontSize": "60px", "color": "#ffffff"}}></i>
            <h4 className="text-white font-weight-bold p-3">Sound Kits</h4>
            <p style={{"color": "#ffffff", "fontSize": 13}} className="p-3">Sound Kits are compiled sound packs offered by producers for other producers/artists to use in their music. For example, they may contain sound banks, loops, drum kits, sound splices, effects, software specific files, etc.
            You must have an UNLIMITED or MARKETPLACE subscription account to be able to create Sound Kits.</p>
            <button className="btn btn-lg btn-success">Upgrade Account</button>
        </div>
        <div style={{"backgroundColor": "#1b1b1b", "width": "300px", "padding": "20px", "textAlign": "center"}}>
            <i class="fa-solid fa-music" style={{"fontSize": "60px", "color": "#ffffff"}}></i>
            <h4 className="text-white font-weight-bold p-3">Songs</h4>
            <p style={{"color": "#ffffff", "fontSize": 13}} className="p-3">Songs are the finished musical product intended for commercial release. Songs are commonly released by recording artists and songwriters. Songs are included in singles and albums. Songs are normally streamed or sold for .99 cents.</p>
            <Link className="btn btn-lg btn-success" to="/songs/edit/1">
                <i className="fa fa-plus"></i> Create
            </Link>
        </div>
        </div>
    </div>
  )
}

export default NewUpload;