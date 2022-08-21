import { useState } from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: "90vh",
  bgcolor: 'background.paper',
  boxShadow: 24,
  overflowY: "scroll"
};

const HorizontalCard = () =>{
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isBasicSelected, setIsBasicSelected] = useState(true);
  const [isPremiumSelected, setIsPremiumSelected] = useState(false);
  const [isTrackoutSelected, setIsTrackoutSelected] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const [showBasicDetails, setShowBasicDetails] = useState(false);
  const [showPremiumDetails, setShowPremiumDetails] = useState(false);
  const [showTrackoutDetails, setShowTrackoutDetails] = useState(false);

  const backButton = () =>{
    setShowBasicDetails(false);
    setShowPremiumDetails(false);
    setShowTrackoutDetails(false);
  }

  const handleBasicClick = () =>{
    setIsBasicSelected(true);
    setIsPremiumSelected(false);
    setIsTrackoutSelected(false);
  }

  const handlePremiumClick = () =>{
    setIsBasicSelected(false);
    setIsPremiumSelected(true);
    setIsTrackoutSelected(false);
  }

  const handleTrackoutClick = () =>{
    setIsBasicSelected(false);
    setIsPremiumSelected(false);
    setIsTrackoutSelected(true);
  }

  const handleShowBasicDetails = () =>{
    setShowBasicDetails(true);
    setShowPremiumDetails(false);
    setShowTrackoutDetails(false);
  }

  const handleShowPremiumDetails = () =>{
    setShowBasicDetails(false);
    setShowPremiumDetails(true);
    setShowTrackoutDetails(false);
  }

  const handleShowTrackoutDetails = () =>{
    setShowBasicDetails(false);
    setShowPremiumDetails(false);
    setShowTrackoutDetails(true);
  }

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [state2, setState2] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleDrawer2 = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState2({ ...state2, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Song page', 'Artist page', 'License song'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon onClick={handleOpen}>
                {index === 0 ? <ArrowForwardIosIcon /> : index === 1 ? <PersonIcon />:  <ShoppingCartIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> 
      <Divider />
      <List>
        {['Share', 'Like', 'Add to playlist', 'Comment on this song'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <i className="fa-solid fa-share"></i> : index === 1? <FavoriteBorderIcon />: index === 2? <AddIcon /> : <ChatBubbleOutlineIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> 
    </Box>
  );

  const list2 = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer2(anchor, false)}
      onKeyDown={toggleDrawer2(anchor, false)}
    >
      <List>
        {['Shopping Cart', 'Pay with crypto', 'Paypal'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} /> <br />
            </ListItemButton>
          </ListItem>
        ))}
      </List> 
    </Box>
  );


    return (
        <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
              <IconButton 
              aria-label="more"
              id="basic-button"
              aria-controls={'modal'}
              aria-haspopup="true"
              aria-expanded={'true'}
              onClick={toggleDrawer('left', true)}
              >
              <MoreHorizIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  {showBasicDetails? (
                    <>
                    <Box sx={{bgcolor: "#333", width: "100%", p: 2}}>
                      <button onClick={backButton} className="btn btn-link">&lt; Back</button>
                      <h3 className="p-2">Basic license - $25</h3>
                    </Box>
                    <Box sx={{ width: "100%", p:2 }}>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>MP3 file</p>
                        <p style={{width: "30%"}}><i className="fa fa-check text-success"></i></p>
                        <p style={{width: "35%"}}>This license includes an MP3 file. It comes in 320 kbps sound quality.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Lossless file</p>
                        <p style={{width: "30%", "color": "red"}}>&times;</p>
                        <p style={{width: "35%"}}>This license does not include any lossless file.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Trackout/stem file</p>
                        <p style={{width: "30%", "color": "red"}}>&times;</p>
                        <p style={{width: "35%"}}>Tracked-out stem files are collections that contain a track split into several musical elements: A drums stem, a bassline stem, a harmony stem, and a lead stem for example.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Audio tags</p>
                        <p style={{width: "30%"}}>0</p>
                        <p style={{width: "35%"}}>This track is free of any audio tags.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                       <p style={{width: "30%"}}>Sales limit</p>
                       <p style={{width: "30%"}}>2,500</p>
                       <p style={{width: "35%"}}>
                        This license allows you sales of up to 2,500 units of the resulting work.
                        If you sell more units, then you need to purchase a new license.
                        </p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Paid streams limit</p>
                        <p style={{width: "30%"}}>10,000</p>
                        <p style={{width: "35%"}}>
                        This limit applies to paid streams on services such as Spotify, Apple Music, or YouTube. Free streams like the ones on SoundClick do NOT count towards this limit.
                        If you achieve more paid streams, then you need to purchase a new license.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Publishing split</p>
                        <p style={{width: "30%"}}>50/50</p>
                        <p style={{width: "35%"}}>This license comes with a "50% buyer / 50% producer" split. So the buyer and producer split any publishing royalties of the resulting work equally. This includes writer's share and publisher's share, unless noted otherwise.</p>
                      </div>  

                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Must credit producer</p>
                        <p style={{width: "30%"}}><i className="fa fa-check text-success"></i></p>
                        <p style={{width: "35%"}}>
                        The producer has to be credited in the resulting work. This usually happens in the song description or byline like "beat produced by [name of seller]".</p>
                      </div>

                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                      <p style={{width: "30%"}}>Exclusive rights</p>
                      <p style={{width: "30%", "color": "red"}}>&times;</p>
                      <p style={{width: "35%"}}>
                      This license is not exclusive. The producer may sell licenses of the same track to other buyers. The ownership of the original track that is licensed remains with the selling producer at all times.</p>
                      </div>

                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>License duration</p>
                        <p style={{width: "30%"}}>12 months</p>
                        <p style={{width: "35%"}}>This determines how long the agreement is valid, starting from the date of purchase.</p>
                      </div>

                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Discount</p>
                        <p style={{width: "30%"}}>Buy 1 - Get 1 free</p>
                        <p style={{width: "35%"}}>This means if you buy 1 license you get another 1 license for free. Simply add more licenses of the same type by the same artist to the shopping cart to activate the discount.</p>
                      </div>

                    </Box>
                    </>
                  )
                  :showPremiumDetails? (
                    <>
                    <Box sx={{bgcolor: "#333", width: "100%", p: 2}}>
                      <button onClick={backButton} className="btn btn-link">&lt; Back</button>
                      <h3 className="p-2">Premium license - $40</h3>
                    </Box>
                    <Box sx={{ width: "100%", p:2 }}>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>MP3 file</p>
                        <p style={{width: "30%"}}><i className="fa fa-check text-success"></i></p>
                        <p style={{width: "35%"}}>This license includes an MP3 file. It comes in 320 kbps sound quality.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Lossless file</p>
                        <p style={{width: "30%", "color": "red"}}>&times;</p>
                        <p style={{width: "35%"}}>This license does not include any lossless file.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Trackout/stem file</p>
                        <p style={{width: "30%", "color": "red"}}>&times;</p>
                        <p style={{width: "35%"}}>Tracked-out stem files are collections that contain a track split into several musical elements: A drums stem, a bassline stem, a harmony stem, and a lead stem for example.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Audio tags</p>
                        <p style={{width: "30%"}}>0</p>
                        <p style={{width: "35%"}}>This track is free of any audio tags.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                       <p style={{width: "30%"}}>Sales limit</p>
                       <p style={{width: "30%"}}>2,500</p>
                       <p style={{width: "35%"}}>
                        This license allows you sales of up to 2,500 units of the resulting work.
                        If you sell more units, then you need to purchase a new license.
                        </p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Paid streams limit</p>
                        <p style={{width: "30%"}}>10,000</p>
                        <p style={{width: "35%"}}>
                        This limit applies to paid streams on services such as Spotify, Apple Music, or YouTube. Free streams like the ones on SoundClick do NOT count towards this limit.
                        If you achieve more paid streams, then you need to purchase a new license.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Publishing split</p>
                        <p style={{width: "30%"}}>50/50</p>
                        <p style={{width: "35%"}}>This license comes with a "50% buyer / 50% producer" split. So the buyer and producer split any publishing royalties of the resulting work equally. This includes writer's share and publisher's share, unless noted otherwise.</p>
                      </div>  

                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Must credit producer</p>
                        <p style={{width: "30%"}}><i className="fa fa-check text-success"></i></p>
                        <p style={{width: "35%"}}>
                        The producer has to be credited in the resulting work. This usually happens in the song description or byline like "beat produced by [name of seller]".</p>
                      </div>

                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                      <p style={{width: "30%"}}>Exclusive rights</p>
                      <p style={{width: "30%", "color": "red"}}>&times;</p>
                      <p style={{width: "35%"}}>
                      This license is not exclusive. The producer may sell licenses of the same track to other buyers. The ownership of the original track that is licensed remains with the selling producer at all times.</p>
                      </div>

                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>License duration</p>
                        <p style={{width: "30%"}}>12 months</p>
                        <p style={{width: "35%"}}>This determines how long the agreement is valid, starting from the date of purchase.</p>
                      </div>

                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Discount</p>
                        <p style={{width: "30%"}}>Buy 1 - Get 1 free</p>
                        <p style={{width: "35%"}}>This means if you buy 1 license you get another 1 license for free. Simply add more licenses of the same type by the same artist to the shopping cart to activate the discount.</p>
                      </div>

                    </Box>
                    </>
                  ):showTrackoutDetails? (
                    <>
                    <Box sx={{bgcolor: "#333", width: "100%", p: 2}}>
                      <button onClick={backButton} className="btn btn-link">&lt; Back</button>
                      <h3 className="p-2">Trackout license - $75</h3>
                    </Box>
                    <Box sx={{ width: "100%", p:2 }}>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>MP3 file</p>
                        <p style={{width: "30%"}}><i className="fa fa-check text-success"></i></p>
                        <p style={{width: "35%"}}>This license includes an MP3 file. It comes in 320 kbps sound quality.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Lossless file</p>
                        <p style={{width: "30%"}}><i className="fa fa-check text-success"></i></p>
                        <p style={{width: "35%"}}>This license does not include any lossless file.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Trackout/stem file</p>
                        <p style={{width: "30%"}}><i className="fa fa-check text-success"></i></p>
                        <p style={{width: "35%"}}>Tracked-out stem files are collections that contain a track split into several musical elements: A drums stem, a bassline stem, a harmony stem, and a lead stem for example.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Audio tags</p>
                        <p style={{width: "30%"}}>0</p>
                        <p style={{width: "35%"}}>This track is free of any audio tags.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                       <p style={{width: "30%"}}>Sales limit</p>
                       <p style={{width: "30%"}}>2,500</p>
                       <p style={{width: "35%"}}>
                        This license allows you sales of up to 2,500 units of the resulting work.
                        If you sell more units, then you need to purchase a new license.
                        </p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Paid streams limit</p>
                        <p style={{width: "30%"}}>10,000</p>
                        <p style={{width: "35%"}}>
                        This limit applies to paid streams on services such as Spotify, Apple Music, or YouTube. Free streams like the ones on SoundClick do NOT count towards this limit.
                        If you achieve more paid streams, then you need to purchase a new license.</p>
                      </div>
                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Publishing split</p>
                        <p style={{width: "30%"}}>50/50</p>
                        <p style={{width: "35%"}}>This license comes with a "50% buyer / 50% producer" split. So the buyer and producer split any publishing royalties of the resulting work equally. This includes writer's share and publisher's share, unless noted otherwise.</p>
                      </div>  

                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Must credit producer</p>
                        <p style={{width: "30%"}}><i className="fa fa-check text-success"></i></p>
                        <p style={{width: "35%"}}>
                        The producer has to be credited in the resulting work. This usually happens in the song description or byline like "beat produced by [name of seller]".</p>
                      </div>

                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                      <p style={{width: "30%"}}>Exclusive rights</p>
                      <p style={{width: "30%", "color": "red"}}>&times;</p>
                      <p style={{width: "35%"}}>
                      This license is not exclusive. The producer may sell licenses of the same track to other buyers. The ownership of the original track that is licensed remains with the selling producer at all times.</p>
                      </div>

                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>License duration</p>
                        <p style={{width: "30%"}}>12 months</p>
                        <p style={{width: "35%"}}>This determines how long the agreement is valid, starting from the date of purchase.</p>
                      </div>

                      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "padding": "10px"}}>
                        <p style={{width: "30%"}}>Discount</p>
                        <p style={{width: "30%"}}>Buy 1 - Get 1 free</p>
                        <p style={{width: "35%"}}>This means if you buy 1 license you get another 1 license for free. Simply add more licenses of the same type by the same artist to the shopping cart to activate the discount.</p>
                      </div>

                    </Box>
                    </>
                  ):addedToCart? (
                    <>
                    <Box sx={{width: "100%", p: 4, textAlign: "center", bgcolor: "#333", height: "100%"}}>
                      <p style={{"color": "white", "textAlign": "center"}}>This artist offers a bulk deals</p>
                      <h4 style={{"color": "orange", "textAlign": "center", "padding": "10px"}}>Buy 1 get 4 - DEAL UNLOCKED!</h4>
                      <p style={{"color": "white", "textAlign": "center", "padding": "10px"}}>You can add 4 premium licenses for free</p>
                      <Button variant="contained">Select free tracks (Premium)</Button> <br />
                      <Button variant="outlined" sx={{mt: 2}} onClick={toggleDrawer2('right', true)} >Proceed to checkout</Button>
                      <Drawer
                      anchor="right"
                      open={state2["right"]}
                      onClose={toggleDrawer2("right", false)}
                    >
                      {list2("right")}
                    </Drawer>
                    </Box>
                    </>
                  ):
                  (
                  <>
                  <Box sx={{width: "100%", p: 2, textAlign: "center", bgcolor: "#333"}}>
                    <div style={{"margin": "10px auto", "width": "100%", "textAlign": "center"}}>
                    <img src="https://images.pexels.com/photos/555345/pexels-photo-555345.jpeg?auto=compress&cs=tinysrgb&w=600" alt="modal image" width="100px" height="100px" style={{"borderRadius": "50%", "objectFit": "cover"}}/>
                    </div>
                  <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: "white"}}>
                  KEEPS IT REAL *Buy 1 Get 1 Free*
                  </Typography>
                  <p style={{"color": "white"}}>LWilliamsBeats</p>
                  </Box>
                  <Box sx={{width: "100%", bgcolor: "#808080", p: 2}}>

                  <Box sx={{display: "flex", p: 2 , alignItems: "center", justifyContent: "space-around", bgcolor: "#333", m: 2}} onClick={handleBasicClick}>
                    <div>
                    <i className="fa-regular fa-circle-check" style={{"fontSize": "40px", "color": `${isBasicSelected? "#1976D2": "white"}`}}></i>
                    </div>
                    <div>
                    <h4 style={{"color": "white"}}>Basic</h4>
                    <p style={{"color": "white"}}>MP3</p>
                    <p style={{"color": "white"}}>Buy 1 get 1 free</p>
                    <Button variant="contained" sx={{mr: 2}}>{isBasicSelected? "Selected": "Select"}</Button>
                    <Button variant="contained" onClick={handleShowBasicDetails}>Details</Button>
                    </div>
                    <div>
                      <h4 style={{"color": "white"}}>$29</h4>
                    </div>
                  </Box>

                  <Box sx={{display: "flex", p: 2 , alignItems: "center", justifyContent: "space-around", bgcolor: "#333", m: 2}} onClick={handlePremiumClick}>
                    <div>
                    <i className="fa-regular fa-circle-check" style={{fontSize: "40px", color: `${isPremiumSelected? "#1976D2": "white"}`}}></i>
                    </div>
                    <div>
                    <h4 style={{"color": "white"}}>PREMIUM</h4>
                    <p style={{"color": "white"}}>MP3 + WAV</p>
                    <p style={{"color": "white"}}>Buy 1 get 4 free</p>
                    <Button variant="contained" sx={{mr: 2}}>{isPremiumSelected? "Selected": "Select"}</Button>
                    <Button variant="contained" onClick={handleShowPremiumDetails}>Details</Button>
                    </div>
                    <div>
                      <h4 style={{"color": "white"}}>$50</h4>
                    </div>
                  </Box>

                  <Box sx={{display: "flex", p: 2 , alignItems: "center", justifyContent: "space-around", bgcolor: "#333", m: 2}} onClick={handleTrackoutClick}>
                    <div>
                    <i className="fa-regular fa-circle-check" style={{fontSize: "40px", color: `${isTrackoutSelected? "#1976D2": "white"}`}}></i>
                    </div>
                    <div>
                    <h4 style={{"color": "white"}}>Trackout</h4>
                    <p style={{"color": "white"}}>MP3 + WAV + Trackout</p>
                    <p style={{"color": "white"}}>Buy 1 get 1 free</p>
                    <Button variant="contained" sx={{mr: 2}}>{isTrackoutSelected? "Selected": "Select"}</Button>
                    <Button variant="contained" onClick={handleShowTrackoutDetails}>Details</Button>
                    </div>
                    <div>
                      <h4 style={{"color": "white"}}>$80</h4>
                    </div>
                  </Box>

                  <Box sx={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                  <Button variant="contained" sx={{width: "70%", m: 2, p:2}} onClick={() => setAddedToCart(true)}>Add to cart</Button>
                  </Box>

                  </Box>
                  </>
                  )}

                </Box>
              </Modal>
               <div className="d-flex px-3" style={{"alignItems": "center", "justifyContent": "space-between"}}>
                <p style={{"fontSize": "20px"}}>1</p>
                <img width={50} height={50} src="https://cdn.airbit.com/avatars/b605db2f8276b597bb1b82c0395eea45@300x.jpg" alt="_" style={{"marginLeft": "10px"}}/>
               </div>
                <div>
                  <h5 className="text-dark">Spray</h5>
                  <p>Peak position #2</p>
                </div>
                <div>
                  <p># trap</p>
                </div>
                <div>
                <Button variant="contained" startIcon={<ShoppingCartIcon />}>
                  $50
                </Button>
                </div>
              </div>
    )
}

export default HorizontalCard;