import { useState } from "react";
import { useParams } from "react-router-dom";
import { TopArtists } from "../components";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import SendIcon from '@mui/icons-material/Send';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  height: "90vh",
  overflowY: "scroll"
};


const FeaturedPlaylist = () => {
  const { playlistName } = useParams();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [postComment, setPostComment] = useState(false);
  const [showMoreReplies, setShowMoreReplies] = useState(false);
  
  return (
    <>
    {/* <!-- main section starts here --> */}
 <main>
    {/* <!-- container to hold playlist elements begins here --> */}
    <div className="container">
      {/* <!-- images both background (artist) and cover images of song or album --> */}
      <div className="container-fluid m-0 p-0 gtp-bncimg-container mb-5 mt-3">
          {/* <!-- Background Image --> */}
          <div className="gtp-bimg-container col-12">
              <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni" height="330px" width="100%" className="gtp-bimg mb-2" />
              <span className="gtp-streams bimg-icons" title="streams">
                <i className="fa-solid fa-headphones"></i>
                <span className="gtp-streams-count gtp-count-span"> 21k</span>
              </span>
              <span className="gtp-likes bimg-icons" title="like">
                <i className="fa-solid fa-heart"></i>
                <span className="gtp-likes-count gtp-count-span"> 1,782</span>
              </span>
              <span className="gtp-retweet bimg-icons" title="repost">
                <i className="fa-solid fa-retweet"></i>
                <span className="gtp-retweet-count gtp-count-span"> 1,782</span>
              </span>
              <span className="gtp-download bimg-icons" title="download track">
                <i className="fa-solid fa-download"></i>
                <span className="gtp-download-count gtp-count-span"> 639</span>
              </span>
              <span className="gtp-message bimg-icons" title="comments" onClick={handleOpen}>
                <i className="fa-solid fa-message"></i>
                <span className="gtp-message-count gtp-count-span"> 10</span>
              </span>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                  <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: "black" }}>
                    Comments
                  </Typography>
                  <Button variant="contained" onClick={() => setPostComment(true)}>Post comment </Button>
                  </Stack>
                  {postComment && (
                  <Box sx={{mt: 3}}>
                    <textarea name="postcomment" cols="52" rows="3" style={{"border": "2px solid #f2f2f2", "padding": "10px"}}>
                      Post your comment here...
                    </textarea>
                    <p style={{"textAlign": "end", p:4}}>
                    <Button variant="outlined">Post</Button>
                    </p>
                  </Box>
                  )}
                  <Box id="modal-modal-description" sx={{ mt: 2, bgcolor: "#f1f1f1", p: 2 }}>
                    <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap"}}>
                      <div style={{"display": "flex", "alignItems": "center"}}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{mr: 2}}/>
                    <Typography sx={{fontWeight: "bold"}}>John Doe</Typography>
                      </div>
                    <Typography sx={{fontSize: 14}}>21 Jan 2022</Typography>
                    </div>
                    <div>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                    </div>

                    <div>
                      <span><i className="fa fa-thumbs-up"></i> 2</span>
                      <span style={{"marginLeft": "15px"}}><ReplyIcon /> Reply</span>
                    </div>

                    <div style={{"marginLeft": 35, "padding": "10px"}}>
                    <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap"}}>
                      <div style={{"display": "flex", "alignItems": "center"}}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{mr: 2}}/>
                    <Typography sx={{fontWeight: "bold"}}>John Doe</Typography>
                      </div>
                    <Typography sx={{fontSize: 14}}>21 Jan 2022</Typography>
                    </div>
                    <div>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>

                    <div>
                      <span><i className="fa fa-thumbs-up"></i> 2</span>
                      <span style={{"marginLeft": "15px"}}><ReplyIcon /> Reply</span>
                    </div>
                    </div>

                    <div style={{"marginLeft": 35, "padding": "10px"}}>
                    <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap"}}>
                      <div style={{"display": "flex", "alignItems": "center"}}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{mr: 2}}/>
                    <Typography sx={{fontWeight: "bold"}}>John Doe</Typography>
                      </div>
                    <Typography sx={{fontSize: 14}}>21 Jan 2022</Typography>
                    </div>
                    <div>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>

                    <div>
                      <span><i className="fa fa-thumbs-up"></i> 2</span>
                      <span style={{"marginLeft": "15px"}}><ReplyIcon /> Reply</span>
                    </div>
                    </div>

                    {showMoreReplies && (
                      <div style={{"marginLeft": 35, "padding": "10px"}}>
                      <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap"}}>
                        <div style={{"display": "flex", "alignItems": "center"}}>
                      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{mr: 2}}/>
                      <Typography sx={{fontWeight: "bold"}}>John Doe</Typography>
                        </div>
                      <Typography sx={{fontSize: 14}}>21 Jan 2022</Typography>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                      </div>

                      <div>
                      <span><i className="fa fa-thumbs-up"></i> 2</span>
                      <span style={{"marginLeft": "15px"}}><ReplyIcon /> Reply</span>
                    </div>
                      </div>
                    )}

                    <button className="btn text-primary" style={{"marginLeft": 35}} onClick={() =>setShowMoreReplies(!showMoreReplies)}>{showMoreReplies? "Show less" : "Show more"}</button>

                  </Box>

                  <Box id="modal-modal-description" sx={{ mt: 2, bgcolor: "#f1f1f1", p: 2 }}>
                    <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap"}}>
                      <div style={{"display": "flex", "alignItems": "center"}}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{mr: 2}}/>
                    <Typography sx={{fontWeight: "bold"}}>John Doe</Typography>
                      </div>
                    <Typography sx={{fontSize: 14}}>21 Jan 2022</Typography>
                    </div>
                    <div>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                    </div>

                    <div>
                      <span><i className="fa fa-thumbs-up"></i> 2</span>
                      <span style={{"marginLeft": "15px"}}><ReplyIcon /> Reply</span>
                    </div>

                    <div style={{"marginLeft": 35, "padding": "10px"}}>
                    <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap"}}>
                      <div style={{"display": "flex", "alignItems": "center"}}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{mr: 2}}/>
                    <Typography sx={{fontWeight: "bold"}}>John Doe</Typography>
                      </div>
                    <Typography sx={{fontSize: 14}}>21 Jan 2022</Typography>
                    </div>
                    <div>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>

                    <div>
                      <span><i className="fa fa-thumbs-up"></i> 2</span>
                      <span style={{"marginLeft": "15px"}}><ReplyIcon /> Reply</span>
                    </div>
                    </div>

                    <div style={{"marginLeft": 35, "padding": "10px"}}>
                    <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap"}}>
                      <div style={{"display": "flex", "alignItems": "center"}}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{mr: 2}}/>
                    <Typography sx={{fontWeight: "bold"}}>John Doe</Typography>
                      </div>
                    <Typography sx={{fontSize: 14}}>21 Jan 2022</Typography>
                    </div>
                    <div>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>

                    <div>
                      <span><i className="fa fa-thumbs-up"></i> 2</span>
                      <span style={{"marginLeft": "15px"}}><ReplyIcon /> Reply</span>
                    </div>
                    </div>

                    {showMoreReplies && (
                      <div style={{"marginLeft": 35, "padding": "10px"}}>
                      <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap"}}>
                        <div style={{"display": "flex", "alignItems": "center"}}>
                      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{mr: 2}}/>
                      <Typography sx={{fontWeight: "bold"}}>John Doe</Typography>
                        </div>
                      <Typography sx={{fontSize: 14}}>21 Jan 2022</Typography>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                      </div>

                      <div>
                      <span><i className="fa fa-thumbs-up"></i> 2</span>
                      <span style={{"marginLeft": "15px"}}><ReplyIcon /> Reply</span>
                    </div>
                      </div>
                    )}

                    <button className="btn text-primary" style={{"marginLeft": 35}} onClick={() =>setShowMoreReplies(!showMoreReplies)}>{showMoreReplies? "Show less" : "Show more"}</button>

                  </Box>

                </Box>
              </Modal>
              <span className="gtp-share bimg-icons"  data-toggle="popover" title="more">
                <i className="fa-solid fa-ellipsis"></i>
              </span>
              {/* <!-- loaded popover content --> */}
              <ul id="popover-content" className="list-group" style={{"display": "none"}}>
                <a href="#" className="list-group-share">Share</a>
                <a href="#" className="list-group-item">Download</a>
                <a href="#" className="list-group-item">Save to Library</a>
                <a href="#" className="list-group-item">Add to Playlist</a>
                <a href="#" className="list-group-item">Report</a>
            </ul>
          </div>

          {/* <!-- song or album cover image --> */}
          <div className="gtp-cimg-container">
             <a href="#">
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gustuni" width="270px" height="270px" className="gtp-cimg" />
             </a>
             {/* <!-- title for big screens --> */}
              <div className="gtp-icons-container mt-1 p-1 d-lg-block d-none">
                <span className="h5 d-block gtp-aname"><a href="#">Bazuu</a></span>
                <span className="h6 d-block gtp-sname"><a href="#">Wako Milele</a></span>
              </div>
              {/* <!-- Title for small screens --> */}
              <div className="gtp-icons-container-small mt-1 d-lg-none d-block bg-dark p-1">
                <span className="h6 gtp-aname s-aname"><a href="#">Bazuu</a> -</span>
                <span className="h6 gtp-sname s-sname"><a href="#">Wako Milele</a></span>
              </div>
              <span className="gtp-pbtn"><i className="fa-solid fa-play"></i></span>
          </div>
      </div>

      {/* <!-- Playlist songs here --> */}
      <div className="container-fluid m-0 p-0 gtp-songlist-container">
        <span className="h6 d-block">{playlistName}</span>
        <div className="table-responsive my-3">
            <table className="table table-hover table-striped table-borderless">
              <thead className="table-dark">
              </thead>
              <tbody>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">1</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* <!-- play btn --> */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count d-lg-inline d-none ms-2">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count d-lg-inline d-none ms-2">1,768</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">2</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* <!-- play btn --> */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count">1,768</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">3</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* <!-- play btn --> */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count">1,768</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">4</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* <!-- play btn --> */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count">1,768</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">5</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* play btn */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count">1,768</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">6</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* <!-- play btn --> */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count">1,768</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">7</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* <!-- play btn --> */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count">1,768</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">8</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* <!-- play btn --> */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count">1,768</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">9</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* <!-- play btn --> */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count">1,768</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">10</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* <!-- play btn --> */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count">1,768</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">11</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* <!-- play btn --> */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count">1,768</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">12</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* <!-- play btn --> */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count">1,768</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">13</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* <!-- play btn --> */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count">1,768</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">14</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* <!-- play btn --> */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count">1,768</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                      {/* <!-- cover image for song --> */}
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" height="39px" width="39px" className="gtp-table-cimg" />
                      </a>
                  </td>
                  {/* <!-- List Number --> */}
                  <td className="gtp-playlist-number">15</td>
                  {/* <!-- Song data --> */}
                  <td className="gtp-song-data">
                      <span className="h6">
                          <a href="#" className="song-aname">Artist Name</a>
                          -
                          <a href="#" className="song-name">Song name</a>
                          <span className="ft">Ft</span>
                          <a href="#" className="song-ftaname">Other artist</a>
                      </span>
                  </td>
                  {/* <!-- play btn --> */}
                  <td>
                      <span className="h6" title="play">
                          <i className="fa-solid fa-play"></i>
                          <span className="gtp-stream-count">21k</span>
                      </span>
                  </td>
                  {/* <!-- download btn --> */}
                  <td>
                    <span className="h6" title="download">
                        <i className="fa-solid fa-download"></i>
                        <span className="gtp-download-count">1,768</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
      </div>
    </div>
    {/* <!-- container playlist elements ends here --> */}

    {/* <!-- Top Artists to follow begins here --> */}
    <div className="container-fluid mb-5 mt-3">
      <TopArtists />
    </div>
    {/* <!-- Top Artists to follow ends here --> */}

    {/* <!-- Store Products starts here --> */}
    <div className="container-fluid text-center mb-5">
      {/* <!-- artist products --> */}
      <div className="row bg-dark marin">
           {/* <!-- header --> */}
           <div className="heady">
            <span className="h6">Artists' Products</span>
            <a href="#">View More <i className="fas fa-arrow-right"></i></a>
          </div>
          {/* <!-- products --> */}
          <div className="col-lg-3 col-6">
         <section className="at-products">
          {/* <!-- slider --> */}
          <div className="a-products">
            {/* <!-- a-products items --> */}
            <div className="a-item">
              {/* <!-- image container --> */}
              <a href="#" className="img-cont">
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" height="150px" width="100%" className="a-img" />
              </a>
              {/* <!-- icons --> */}
              <div className="icons text-start">
                <span className="i-cart d-block my-0"><i className="fas fa-cart-shopping" title="add to cart"></i></span>
                <span className="i-like d-block my-0"><i className="fas fa-heart" title="add to wishlist"></i></span>
              </div>
              {/* <!-- product name and artist name --> */}
              <h6 className="ap-name">Product Name</h6>
              <h6 className="aa-name">
                <a href="#">Calitoh Maina</a>
              </h6>
              {/* <!-- price and status --> */}
              <div className="pnstatus">
                <span className="h6">
                  <span>KES</span>
                  <span className="price">1,200</span>
                </span>
                <span className="h6 n-status">NEW</span>
              </div>
            </div>
          </div>
         </section>
          </div>
          {/* <!-- products --> */}
          <div className="col-lg-3 col-6">
            <section className="at-products">
             {/* <!-- slider --> */}
             <div className="a-products">
               {/* <!-- a-products items --> */}
               <div className="a-item">
                 {/* <!-- image container --> */}
                 <a href="#" className="img-cont">
                   <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" height="150px" width="100%" className="a-img" />
                 </a>
                 {/* <!-- icons --> */}
                 <div className="icons text-start">
                   <span className="i-cart d-block my-0"><i className="fas fa-cart-shopping" title="add to cart"></i></span>
                   <span className="i-like d-block my-0"><i className="fas fa-heart" title="add to wishlist"></i></span>
                 </div>
                 {/* <!-- product name and artist name --> */}
                 <h6 className="ap-name">Product Name</h6>
                 <h6 className="aa-name">
                   <a href="#">Calitoh Maina</a>
                 </h6>
                 {/* <!-- price and status --> */}
                 <div className="pnstatus">
                   <span className="h6">
                     <span>KES</span>
                     <span className="price">1,200</span>
                   </span>
                   <span className="h6 n-hot"><i className="fa-solid fa-fire-flame-curved"></i> Hot</span>
                 </div>
               </div>
             </div>
            </section>
             </div>
    
             {/* <!-- products --> */}
          <div className="col-lg-3 col-6">
            <section className="at-products">
             {/* <!-- slider --> */}
             <div className="a-products">
               {/* <!-- a-products items --> */}
               <div className="a-item">
                 {/* <!-- image container --> */}
                 <a href="#" className="img-cont">
                   <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" height="150px" width="100%" className="a-img" />
                 </a>
                 {/* <!-- icons --> */}
                 <div className="icons text-start">
                   <span className="i-cart d-block my-0"><i className="fas fa-cart-shopping" title="add to cart"></i></span>
                   <span className="i-like d-block my-0"><i className="fas fa-heart" title="add to wishlist"></i></span>
                 </div>
                 {/* <!-- product name and artist name --> */}
                 <h6 className="ap-name">Product Name</h6>
                 <h6 className="aa-name">
                   <a href="#">Calitoh Maina</a>
                 </h6>
                 {/* <!-- price and status --> */}
                 <div className="pnstatus">
                   <span className="h6">
                     <span>KES</span>
                     <span className="price">1,200</span>
                   </span>
                   <span className="h6 n-sale">On Sale</span>
                 </div>
               </div>
             </div>
            </section>
             </div>
    
             {/* <!-- products --> */}
          <div className="col-lg-3 col-6">
            <section className="at-products">
             {/* <!-- slider --> */}
             <div className="a-products">
               {/* <!-- a-products items --> */}
               <div className="a-item">
                 {/* <!-- image container --> */}
                 <a href="#" className="img-cont">
                   <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" height="150px" width="100%" className="a-img" />
                 </a>
                 {/* <!-- icons --> */}
                 <div className="icons text-start">
                   <span className="i-cart d-block my-0"><i className="fas fa-cart-shopping" title="add to cart"></i></span>
                   <span className="i-like d-block my-0"><i className="fas fa-heart" title="add to wishlist"></i></span>
                 </div>
                 {/* <!-- product name and artist name --> */}
                 <h6 className="ap-name">Product Name</h6>
                 <h6 className="aa-name">
                   <a href="#">Calitoh Maina</a>
                 </h6>
                 {/* <!-- price and status --> */}
                 <div className="pnstatus">
                   <span className="h6">
                     <span>KES</span>
                     <span className="price">1,200</span>
                   </span>
                   <span className="h6 n-limited">Limited</span>
                 </div>
               </div>
             </div>
            </section>
             </div>
      </div>
    
      {/* <!-- music equipments --> */}
      <div className="row bg-dark marin marina pb-4">
        {/* <!-- header --> */}
        <div className="heady">
         <span className="h6">Music Utility</span>
         <a href="#">View More <i className="fas fa-arrow-right"></i></a>
        </div>
       {/* <!-- products --> */}
       <div className="col-lg-3 col-6">
      <section className="at-products">
       {/* <!-- slider --> */}
       <div className="a-products">
         {/* <!-- a-products items --> */}
         <div className="a-item">
           {/* <!-- image container --> */}
           <a href="#" className="img-cont">
             <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" height="150px" width="100%" className="a-img" />
           </a>
           {/* <!-- icons --> */}
           <div className="icons text-start">
             <span className="i-cart d-block my-0"><i className="fas fa-cart-shopping" title="add to cart"></i></span>
             <span className="i-like d-block my-0"><i className="fas fa-heart" title="add to wishlist"></i></span>
           </div>
           {/* <!-- product name and artist name --> */}
           <h6 className="ap-name">Product Name</h6>
           <h6 className="aa-name">
             <a href="#">Calitoh Maina</a>
           </h6>
           {/* <!-- price and status --> */}
           <div className="pnstatus">
             <span className="h6">
               <span>KES</span>
               <span className="price">1,200</span>
             </span>
             <span className="h6 n-status">NEW</span>
           </div>
         </div>
       </div>
      </section>
       </div>
       {/* <!-- products --> */}
       <div className="col-lg-3 col-6">
         <section className="at-products">
          {/* <!-- slider --> */}
          <div className="a-products">
            {/* <!-- a-products items --> */}
            <div className="a-item">
              {/* <!-- image container --> */}
              <a href="#" className="img-cont">
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" height="150px" width="100%" className="a-img" />
              </a>
              {/* <!-- icons --> */}
              <div className="icons text-start">
                <span className="i-cart d-block my-0"><i className="fas fa-cart-shopping" title="add to cart"></i></span>
                <span className="i-like d-block my-0"><i className="fas fa-heart" title="add to wishlist"></i></span>
              </div>
              {/* <!-- product name and artist name --> */}
              <h6 className="ap-name">Product Name</h6>
              <h6 className="aa-name">
                <a href="#">Calitoh Maina</a>
              </h6>
              {/* <!-- price and status --> */}
              <div className="pnstatus">
                <span className="h6">
                  <span>KES</span>
                  <span className="price">1,200</span>
                </span>
                <span className="h6 n-hot"><i className="fa-solid fa-fire-flame-curved"></i> Hot</span>
              </div>
            </div>
          </div>
         </section>
        </div>
    
          {/* <!-- products --> */}
        <div className="col-lg-3 col-6">
         <section className="at-products">
          {/* <!-- slider --> */}
          <div className="a-products">
            {/* <!-- a-products items --> */}
            <div className="a-item">
              {/* <!-- image container --> */}
              <a href="#" className="img-cont">
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" height="150px" width="100%" className="a-img" />
              </a>
              {/* <!-- icons --> */}
              <div className="icons text-start">
                <span className="i-cart d-block my-0"><i className="fas fa-cart-shopping" title="add to cart"></i></span>
                <span className="i-like d-block my-0"><i className="fas fa-heart" title="add to wishlist"></i></span>
              </div>
              {/* <!-- product name and artist name --> */}
              <h6 className="ap-name">Product Name</h6>
              <h6 className="aa-name">
                <a href="#">Calitoh Maina</a>
              </h6>
              {/* <!-- price and status --> */}
              <div className="pnstatus">
                <span className="h6">
                  <span>KES</span>
                  <span className="price">1,200</span>
                </span>
                <span className="h6 n-sale">On Sale</span>
              </div>
            </div>
          </div>
         </section>
        </div>
    
          {/* <!-- products --> */}
        <div className="col-lg-3 col-6">
         <section className="at-products">
          {/* <!-- slider --> */}
          <div className="a-products">
            {/* <!-- a-products items --> */}
            <div className="a-item">
              {/* <!-- image container --> */}
              <a href="#" className="img-cont">
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" height="150px" width="100%" className="a-img" />
              </a>
              {/* <!-- icons --> */}
              <div className="icons text-start">
                <span className="i-cart d-block my-0"><i className="fas fa-cart-shopping" title="add to cart"></i></span>
                <span className="i-like d-block my-0"><i className="fas fa-heart" title="add to wishlist"></i></span>
              </div>
              {/* <!-- product name and artist name --> */}
              <h6 className="ap-name">Product Name</h6>
              <h6 className="aa-name">
                <a href="#">Calitoh Maina</a>
              </h6>
              {/* <!-- price and status --> */}
              <div className="pnstatus">
                <span className="h6">
                  <span>KES</span>
                  <span className="price">1,200</span>
                </span>
                <span className="h6 n-limited">Limited</span>
              </div>
            </div>
          </div>
         </section>
        </div>
    
        {/* <!-- store link --> */}
        <div className="container-fluid mt-3">
          <a href="#" className="btn btn-success my-2">Explore Store</a>
        </div>
      </div>
    </div>
    {/* <!-- store products ends here -->     */}
      
    {/* <!-- Events section starts here --> */}
    <div className="container-fluid mb-5">
          <section className="events-cont">
             {/* <!-- header --> */}
           <div className="heady">
            <span className="h6">Upcoming Events</span>
            <a href="#">View More &gt;</a>
           </div>
           {/* <!-- events cards --> */}
           <div className="row">
             {/* <!-- events cards items here --> */}
             <div className="col-lg-3 col-6 e-container">
              {/* <!-- image link --> */}
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" className="e-img" height="180px" width="100%" />
              {/* <!-- buy ticket link --> */}
               <a href="#" className="e-tlink bg-dark">
                 <span className="e-ticon"><i className="fas fa-ticket"></i></span>
                 Buy Ticket
                </a>
                <h6 className="e-name">Event Name</h6>
                <h6 className="e-location">
                  <span className="e-icon"><i className="fa-solid fa-location-dot"></i></span>
                  <span className="e-locationb">Camp Lou, Antalya</span>
                </h6>
                
             </div>
              {/* <!-- events cards items here --> */}
              <div className="col-lg-3 col-6 e-container">
                {/* <!-- image link --> */}
                  <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" className="e-img" height="180px" width="100%" />
                {/* <!-- buy ticket link --> */}
                 <a href="#" className="e-tlink bg-dark">
                   <span className="e-ticon"><i className="fas fa-ticket"></i></span>
                   Buy Ticket
                  </a>
                  <h6 className="e-name">Event Name</h6>
                  <h6 className="e-location">
                    <span className="e-icon"><i className="fa-solid fa-location-dot"></i></span>
                    <span className="e-locationb">Camp Lou, Antalya</span>
                  </h6>
                  
               </div>
                {/* <!-- events cards items here --> */}
             <div className="col-lg-3 col-6 e-container">
              {/* <!-- image link --> */}
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" className="e-img" height="180px" width="100%" />
              {/* <!-- buy ticket link --> */}
               <a href="#" className="e-tlink e-sout btn btn-success">
                 Sold Out
                </a>
                <h6 className="e-name">Event Name</h6>
                <h6 className="e-location">
                  <span className="e-icon"><i className="fa-solid fa-location-dot"></i></span>
                  <span className="e-locationb">Camp Lou, Antalya</span>
                </h6>
                
             </div>
              {/* <!-- events cards items here --> */}
              <div className="col-lg-3 col-6 e-container">
                {/* <!-- image link --> */}
                  <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" className="e-img" height="180px" width="100%" />
                {/* <!-- buy ticket link --> */}
                 <a href="#" className="e-tlink bg-dark">
                   <span className="e-ticon"><i className="fas fa-ticket"></i></span>
                   Buy Ticket
                  </a>
                  <h6 className="e-name">Event Name</h6>
                  <h6 className="e-location">
                    <span className="e-icon"><i className="fa-solid fa-location-dot"></i></span>
                    <span className="e-locationb">Camp Lou, Antalya</span>
                  </h6>
                  
               </div>
           </div>
          </section>
    </div>
    {/* <!-- Events section ends here --> */}

     {/* <!-- News section begins here --> */}
     <div className="container-fluid mb-5">
        <section className="events-cont">
           {/* <!-- header --> */}
         <div className="heady">
          <span className="h6">News</span>
          <a href="#">View More &gt;</a>
         </div>
         {/* <!-- news cards --> */}
         <div className="row">
           {/* <!-- News cards items here --> */}
           <div className="col-lg-3 col-6 e-container bg-light">
            {/* <!-- image link --> */}
              <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" className="e-img" height="180px" width="90%" />
            {/* <!-- read link --> */}
             <a href="#" className="e-tlink e-more bg-dark">
                Read More 
              </a>
              <h6 className="e-name">News Title</h6>
              <h6 className="e-location n-desc">
               <span className="desc">
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, laudantium.
               </span>
              </h6>
           </div>
            {/* <!-- News cards items here --> */}
            <div className="col-lg-3 col-6 e-container bg-light">
              {/* <!-- image link --> */}
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" className="e-img" height="180px" width="90%" />
              {/* <!-- read link --> */}
               <a href="#" className="e-tlink e-more bg-dark">
                  Read More 
                </a>
                <h6 className="e-name">News Title</h6>
                <h6 className="e-location n-desc">
                 <span className="desc">
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, laudantium.
                 </span>
                </h6>
             </div>
              {/* <!-- News cards items here --> */}
           <div className="col-lg-3 col-6 e-container bg-light">
            {/* <!-- image link --> */}
              <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" className="e-img" height="180px" width="90%" />
            {/* <!-- read link --> */}
             <a href="#" className="e-tlink e-more bg-dark">
                Read More 
              </a>
              <h6 className="e-name">News Title</h6>
              <h6 className="e-location n-desc">
               <span className="desc">
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, laudantium.
               </span>
              </h6>
           </div>
            {/* <!-- News cards items here --> */}
            <div className="col-lg-3 col-6 e-container bg-light">
              {/* <!-- image link --> */}
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600" alt="GUTSUNI" className="e-img" height="180px" width="90%" />
              {/* <!-- read link --> */}
               <a href="#" className="e-tlink e-more bg-dark">
                  Read More &gt;
                </a>
                <h6 className="e-name">News Title</h6>
                <h6 className="e-location n-desc">
                 <span className="desc">
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, laudantium.
                 </span>
                </h6>
             </div>
         </div>
         
        </section>
          </div>
           {/* <!-- News section Ends here -->   */}
</main>
 {/* <!-- main section ends here --> */}
    </>
  )
}

export default FeaturedPlaylist;