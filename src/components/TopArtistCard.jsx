import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const TopArtistCard = ({artistName, imageUrl, followerCount, tracksCount}) => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <>
    <div style={{"width": "200px", "boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)", "position": "relative"}} onMouseEnter={() =>setShowMoreOptions(true)} onMouseLeave={() =>setShowMoreOptions(false)}> 
       <Link to="/artist">
        <img src={imageUrl} width="100%" height="70%" alt="" />
        </Link>
        <div style={{"height": "30%", "display": "flex", "justifyContent": "space-between", "padding": "10px", "alignItems": "center"}}>
            <div className="p-2">
            <Typography>{artistName}</Typography>
            </div>
            <div>
            <IconButton 
            aria-label="more"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
            <MoreVertIcon />
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
        {/* {showMoreOptions && (
        <div style={{"position": "absolute", "top": "70%", "bottom": 0 , "width": "100%", "display": "flex", "justifyContent": "end", "padding": "10px","backgroundColor": "rgba(0,0,0,0.5)", "alignItems": "flex-end"}}>
        
        </div>
        )} */}
    </div>
  </>
  )
}

export default TopArtistCard;