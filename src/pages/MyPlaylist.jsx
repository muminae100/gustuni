const MyPlaylist = () => {
  return (
    <div style={{"marginTop": "65px", "backgroundColor": "#080808", "width": "100%", "height": "100%"}}>
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "20px"}}>
            <h3 className="text-white">My Playlist</h3>
            <button className="btn btn-success">New Playlist</button>
        </div>

        <p className="text-white p-4">Created By Me</p>

        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "20px"}}>
            <div style={{"backgroundColor": "transparent", "border": "1px solid gray", "width": "300px", "height": "300px", "borderRadius": "15px", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column"}}>
                <i class="fa-solid fa-music text-white" style={{"fontSize": "35px"}}></i>
                <p className="mt-3 text-white">No Playlists yet!</p>
                <p className="text-success">Start a Playlist</p>
            </div>
            <div style={{"backgroundColor": "transparent", "border": "1px solid gray", "width": "300px", "height": "300px", "borderRadius": "15px", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column"}}>
            <i class="fa-solid fa-music text-white" style={{"fontSize": "35px"}}></i>
            </div>
            <div style={{"backgroundColor": "transparent", "border": "1px solid gray", "width": "300px", "height": "300px", "borderRadius": "15px", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column"}}>
            <i class="fa-solid fa-music text-white" style={{"fontSize": "35px"}}></i>
            </div>
            <div style={{"backgroundColor": "transparent", "border": "1px solid gray", "width": "300px", "height": "300px", "borderRadius": "15px", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column"}}>
            <i class="fa-solid fa-music text-white" style={{"fontSize": "35px"}}></i>
            </div>
           
        </div>

        <p className="text-white p-4">Following Playlists</p>

        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "20px"}}>
            <div style={{"backgroundColor": "transparent", "border": "1px solid gray", "width": "300px", "height": "300px", "borderRadius": "15px", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column"}}>
            <i class="fa-solid fa-music text-white" style={{"fontSize": "35px"}}></i>
                <p className="mt-3 text-white">You’re not following playlists yet!</p>
                <p className="text-success">Start following</p>
            </div>
            <div style={{"backgroundColor": "transparent", "border": "1px solid gray", "width": "300px", "height": "300px", "borderRadius": "15px", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column"}}>
            <i class="fa-solid fa-music text-white" style={{"fontSize": "35px"}}></i>
            </div>
            <div style={{"backgroundColor": "transparent", "border": "1px solid gray", "width": "300px", "height": "300px", "borderRadius": "15px", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column"}}>
            <i class="fa-solid fa-music text-white" style={{"fontSize": "35px"}}></i>
            </div>
            <div style={{"backgroundColor": "transparent", "border": "1px solid gray", "width": "300px", "height": "300px", "borderRadius": "15px", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column"}}>
            <i class="fa-solid fa-music text-white" style={{"fontSize": "35px"}}></i>
            </div>
           
        </div>

        <p className="text-white p-4">Collaborative Playlists</p>

        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "20px"}}>
            <div style={{"backgroundColor": "transparent", "border": "1px solid gray", "width": "300px", "height": "300px", "borderRadius": "15px", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column"}}>
            <i class="fa-solid fa-music text-white" style={{"fontSize": "35px"}}></i>
                <p className="mt-3 text-white">You’ve no collaborative playlists yet!</p>
            </div>
            <div style={{"backgroundColor": "transparent", "border": "1px solid gray", "width": "300px", "height": "300px", "borderRadius": "15px", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column"}}>
            <i class="fa-solid fa-music text-white" style={{"fontSize": "35px"}}></i>
            </div>
            <div style={{"backgroundColor": "transparent", "border": "1px solid gray", "width": "300px", "height": "300px", "borderRadius": "15px", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column"}}>
            <i class="fa-solid fa-music text-white" style={{"fontSize": "35px"}}></i>
            </div>
            <div style={{"backgroundColor": "transparent", "border": "1px solid gray", "width": "300px", "height": "300px", "borderRadius": "15px", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column"}}>
            <i class="fa-solid fa-music text-white" style={{"fontSize": "35px"}}></i>
            </div>
           
        </div>

    </div>
  )
}

export default MyPlaylist;