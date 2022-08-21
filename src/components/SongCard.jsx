import { useState } from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
};

const SongCard = ({ id, imageUrl, songName, artistName, playedCount, downloadedCount }) => {
  const [played, setPlayed] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
     {/* <!-- song name and details here --> */}
     <div className="s-container">
      
       {/* <!-- song metadata --> */}
       <Link style={{"textDecoration": "none"}} to={`/songs/${id}`}>
       <span className="h6 s-name-artist">
         {/* <!-- song Image --> */}
         <img src={imageUrl} alt="Gutsuni" height="60px" width="60px" className="rounded-circle" />
         <span className="s-name">
           <a href="#" className="s-name-link">{songName}</a>
         </span>
         -
         <span className="s-artist">
           <a href="#" className="s-artist-link">{artistName.slice(0, 7)}</a>
         </span>
       </span>
       </Link>
       {/* <!-- play icon with number --> */}
       <span className="pnd-icon-cont">
         <span className="s-ico">
          {played? (<i className="fa-solid fa-pause" onClick={() =>setPlayed(false)}></i>) 
          : (<i className="fa-solid fa-play" onClick={() =>setPlayed(true)}></i>)} 
          <span className="play-no"> {playedCount}</span></span>

         <span className="s-ico">
          <i className="fa-solid fa-download" title="download" onClick={handleOpen}></i> 
          <span className="down-no">{downloadedCount}</span>
          </span>
         
       </span>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {/* <!-- Modal --> */}
        <div aria-labelledby="exampleModalLabel" aria-hidden="true">
          <form action="#" method="post" className="modal-form">
            <div className="modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header mod-heady">
                <span className="h5 modal-title w-100 modo-title">
                  {/* <!-- song container --> */}
                  <div className="song-container">
                    {/* <!-- img, sound icon & time-stamp --> */}
                    <span className="img-sicon-t-stamp">
                      <img src={imageUrl} alt="Gustuni" height="72px" width="99px" />
                      <span className="sicon d-block"><i className="fa-solid fa-headphones"></i></span>
                      <span className="d-block time-stamp">03:05</span>
                    </span>
                    {/* <!-- song metadata --> */}
                    <span className="s-metadat fw-bold">
                      <span>{artistName}</span>
                      -
                      <span> {songName}</span>
                    </span>
                  </div>
                </span>

                <button type="button" className="btn-ex btn btn-secondary rounded-circle ml-5 mb-5">
                  <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                </button>

            </div>
            <div className="modal-body mody p-5">
                {/* <!-- radio choose download quality type --> */}
            <span className="d-block text-start h6 hedad mb-3">
              <button className="m-icon btn btn-danger rounded-circle">
              <i className="fa-solid fa-music"></i>
              </button>
              <span className="ms-1">Music</span>
            </span>
            {/* <!-- choices --> */}
            <div className="col-12 mb-3 fomo">
            <input type="radio" id="128k" name="128k" value="128k" />
            <label htmlFor="128k">
              <span className="ms-3 text-start fw-bold">128k</span>
              <span className="ms-5 text-start file-type">M4A</span>
              <span className="ms-4 text-start file-size">2.99 MB</span>
            </label>
            </div>
            <div className="col-12 mb-3 fomo">
            <input type="radio" id="128k" name="128k" value="128k" />
            <label htmlFor="128k">
              <span className="ms-3 text-start fw-bold">128k</span>
              <span className="ms-5 text-start file-type">MP3</span>
              <span className="ms-4 text-start file-size">2.99 MB</span>
            </label>
            </div>
            <div className="col-12 mb-3 fomo">
            <input type="radio" id="128k" name="128k" value="128k" />
            <label for="128k">
              <span className="ms-3 text-start fw-bold">488k</span>
              <span className="ms-5 text-start file-type">MP3</span>
              <span className="ms-4 text-start file-size">1.27 MB</span>
            </label>
            </div>
            <div className="col-12 mb-3 fomo">
            <input type="radio" id="128k" name="128k" value="128k" />
            <label for="128k">
              <span className="ms-3 text-start fw-bold">256k</span>
              <span className="ms-5 text-start file-type">MP3</span>
              <span className="ms-4 text-start file-size">1.66 MB</span>
            </label>
            </div>

            {/* <!-- advertisement content here --> */}
            <div className="ad">
            <a href="#">
              <img src={imageUrl} alt="Gutsuni Ad" height="105px" width="100%" />
            </a>
            </div>
            
            {/* <!-- Download and cancel button --> */}
            <div className="text-center mt-3">
              <button className="btn btn-primary d-block mt-0 mb-1 w-100 msave-btn" type="submit"><i className="fa-solid fa-download"></i> <span className="ms-1">Download</span></button>
            </div>
            </div>
            </div>
          </div>
          </form>
        </div>

        </Box>
      </Modal>
     </div>
     </>
  )
}

export default SongCard;