import { Link } from "react-router-dom";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import OwlCarousel from 'react-owl-carousel';

const SlideItem = ({imageUrl, title}) => {
  const [showHoverShadow, setShowHoverShadow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //modal
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div style={{"width": "200px", "boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)", "position": "relative"}} onMouseEnter={() => setShowHoverShadow(true)} onMouseLeave={() => setShowHoverShadow(false)}>
        {showHoverShadow && (
        <div style={{"position": "absolute", "backgroundColor": "rgba(0,0,0,0.5)", "width": "100%", "height": "100%", "display": "flex", "justifyContent": "flex-end", "alignItems": "flex-end"}}>
              <IconButton 
              aria-label="more"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              >
              <MoreVertIcon sx={{color: "white"}}/>
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
              <MenuItem onClick={handleOpen}>
                <span className="me-1 text-primary"><i className="fa-solid fa-share"></i></span>
                Share
              </MenuItem>
              <Modal
                  open={openModal}
                  onClose={handleModalClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: "black"}}>
                      Share
                    </Typography>
                    <Box sx={{p: 2}}>
                    <OwlCarousel dots={false} className='owl-theme' items={4} margin={5}>
                      <div className="p-3" style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
                        <i className="fab fa-whatsapp text-success" style={{"fontSize": 30}}></i>
                        <p>Whatsapp</p>
                      </div>
                      <div className="p-3" style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
                        <i className="fab fa-facebook text-primary" style={{"fontSize": 30}}></i>
                        <p>Facebook</p>
                      </div>
                      <div className="p-3" style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
                        <i className="fab fa-twitter text-primary" style={{"fontSize": 30}}></i>
                        <p>Twitter</p>
                      </div>
                      <div className="p-3" style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
                        <i className="fa fa-snapchat text-warning" style={{"fontSize": 30}}></i>
                        <p>Snapchat</p>
                      </div>
                      <div className="p-3" style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
                        <i className="fa fa-telegram text-primary" style={{"fontSize": 30}}></i>
                        <p>Telegram</p>
                      </div>
                    </OwlCarousel>
                    <div>
                      <Typography sx={{bgcolor: "#f1f1f1", p: 2, mb: 4}}>https://youtu.be/yi0F1tO6iuo</Typography>
                      <Button variant="outlined">Copy</Button>
                    </div>
                    </Box>
                  </Box>
                </Modal>
              <MenuItem onClick={handleClose}>
                <span className="me-1 text-danger"><i className="fa-solid fa-flag"></i></span>
                Report
              </MenuItem>
            </Menu>
        </div>
        )}
        <img src="https://sclkssl.ssl.hwcdn.net/41/images/i/song/itsmoebeats%2Blildurkxlilbabytypebeatbigchecks2.jpg" width="100%" height="65%" alt="" />
        <div style={{"height": "35%", "display": "flex", "justifyContent": "space-between", "padding": "10px"}}>
            <span>
            Mogusii Abanto
            </span>

        </div>
    </div>

  )
}

export default SlideItem;