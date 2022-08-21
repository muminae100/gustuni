import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AudioPlayerSection, Footer } from "../components";
import { useGetSongQuery } from "../api/apiSlice";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';

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

const SingleSong = () =>{
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const [postComment, setPostComment] = useState(false);

    const [showMoreReplies, setShowMoreReplies] = useState(false);


    const { songId } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { data, isFetching, isSuccess } = useGetSongQuery(songId);


    if(isFetching) return "Loading..."; 
    
  if(isSuccess)
return (
    <>
    <main style={{"marginBottom": "50px"}}>
    <div className="beatpagecont">
    <div className="container-fluid pt-5 mt-4 p-relative">
     {/* <!-- ROW for beats item container --> */}
     <div className="row">
      {/* <!-- column for beats image and plya btn --> */}
      <div className="col-lg-6 col-12 lopin">
          {/* <!-- image --> */}
          <img src={data?.imageUrl} style={{"objectFit": "cover"}} alt="beats name" width="100%" height="330px" className="rounded shadow" />
 
          {/* <!-- play button --> */}
          <button className="btn btn-dark btn-md playa" title="play">
              <span className="me-1"><i className="fa-solid fa-play"></i></span>
              Play Now
          </button>
 
          {/* <!-- ICONS CONTAINER --> */}
          <div className="icons-cont mt-1">
             {/* <!-- no. of plays --> */}
             <span className="ico me-2" title="listens">
                 <i className="fas fa-headphones"></i>
                 <span className="play-count">{data?.playedCount }</span>
             </span>
 
             {/* <!-- no. of likes --> */}
             <span className="ico me-2" title="like">
                 <i className="fas fa-heart"></i>
                 <span className="like-count">1k</span>
             </span>
 
             {/* <!-- no. of comments --> */}
             <span className="ico me-2" title="comment" onClick={handleOpen}>
                 <i className="fas fa-message"></i>
                 <span className="comment-count">1k</span>
             </span>
             <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                  <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: "black" }}>
                    Comments
                  </Typography>
                  <Button variant="contained" onClick={() => setPostComment(true)}>Post comment</Button>
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
                      </div>
                    )}

                    <button className="btn text-primary" style={{"marginLeft": 35}} onClick={() =>setShowMoreReplies(!showMoreReplies)}>{showMoreReplies? "Show less" : "Show more"}</button>


                    <div>
                        <ReplyIcon /> Reply
                    </div>
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
                      </div>
                    )}

                    <button className="btn text-primary" style={{"marginLeft": 35}} onClick={() =>setShowMoreReplies(!showMoreReplies)}>{showMoreReplies? "Show less" : "Show more"}</button>

                    <div>
                        <ReplyIcon /> Reply
                    </div>
                  </Box>

                </Box>
              </Modal>
 
             {/* <!-- no. of repost --> */}
             <span className="ico me-1" title="repost">
                 <i className="fas fa-retweet"></i>
                 <span className="repost-count">678</span>
             </span>
 
              <IconButton 
              aria-label="more"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              >
              <MoreHorizIcon />
              </IconButton>
                <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>
                  <span className="me-1 text-primary"><i className="fa-solid fa-play-circle"></i></span>
                  Add to Que
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <span className="me-1 text-primary"><i className="fa-solid fa-share"></i></span>
                  Share
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <span className="me-1 text-danger"><i className="fa-solid fa-flag"></i></span>
                  Report
                </MenuItem>
              </Menu>
      
          </div>
      </div>
 
      {/* <!-- column for beats details and description plus download button --> */}
      <div className="col-lg-6 col-12 lokij">
          {/* <!-- beat name --> */}
          <span className="h6 d-block beat-name mt-3">{ data?.songName }</span>
 
          {/* <!-- creator name --> */}
          <span className="d-block text-start pro-name">
              By
              <a href="#" className="producer-name text-decoration-none"> { data?.artistName }</a>
          </span>
 
          {/* <!-- genre and tag --> */}
          <span className="d-block genre-tag text-success">
              <span className="ico"><i className="fas fa-tag"></i></span>
              <span className="genre">Trap</span>
          </span>
 
          {/* <!-- free or purchase --> */}
          <span className="d-block h6 text-start free-purchase">
              <span className="d-block free text-primary">Free</span>
              <span className="d-block purchase text-success">KSH 790</span>
          </span>
 
          {/* <!-- description --> */}
         <div className="description-container">
          {/* <!-- header --> */}
          <span className="h6 d-block text-start hep">Description</span>
          {/* <!-- Description --> */}
          <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          </p>
         </div>
 
          {/* <!-- Download beat button --> */}
          <button className="btn btn-success btn-md d-block w-100 mb-2">
              <span className="me-1 icona"><i className="fas fa-download"></i></span>
              Download song MP3
          </button>

          {/* <!-- Download song's beat button --> */}
         <button class="btn btn-primary btn-md d-block w-100 mb-2">
             <span class="me-1 icona"><i class="fas fa-download"></i></span>
             Download track beat
         </button>

         {/* <!-- Download song's acpella button --> */}
         <button class="btn btn-warning btn-md d-block w-100 mb-2 text-white">
             <span class="me-1 icona"><i class="fas fa-download"></i></span>
             Download track acapella
         </button>

      </div>
     </div>
 </div>
 </div>
    <AudioPlayerSection artistName={data?.artistName} songName={data?.songName} songUrl={data?.songUrl} imageUrl={data?.imageUrl}/>

 </main>
 {/* <Footer /> */}
 
 </>
)
}

export default SingleSong;