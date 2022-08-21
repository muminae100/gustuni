import { Link } from "react-router-dom";
import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem'; 
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GradeIcon from '@mui/icons-material/Grade';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import HomeIcon from '@mui/icons-material/Home';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SpokeIcon from '@mui/icons-material/Spoke';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { HorizontalCard } from "../components";
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EventIcon from '@mui/icons-material/Event';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#080808',
  boxShadow: 24,
  p: 4,
};


const Artist = () => {
  //dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const Open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  }; 


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showMusic, setShowMusic] = useState(true);
  const [showMerchandise, setShowMerchandise] = useState(false);

  const handleShowMerchandise = () =>{
    setShowMerchandise(true);
    setShowMusic(false);
  }

  const handleShowMusic = () =>{
    setShowMusic(true);
    setShowMerchandise(false);
  }

  const [state, setState] = useState({
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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Events', 'Tracks','Merchandise', 'Personalized videos', 'Insights'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>           
                {index === 0 ? <HomeIcon /> : index === 1 ? <EventIcon /> : index === 2 ? <HeadphonesIcon /> : index === 3? <StorefrontIcon /> : index === 4 ? <OndemandVideoIcon  /> : <i class="fa-solid fa-chart-line"></i>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div style={{"backgroundColor": "#080808"}}>
        <div className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img style={{"objectFit": "contain", "backgroundColor": "black"}} className="bd-placeholder-img" width="100%" height="100%" src="https://i1.sndcdn.com/avatars-NNw4TnaUyxE8eRTs-dybbkw-t240x240.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt="_" />

            <div className="container" style={{"display": "flex", "alignItems": "flex-end"}}>
                <div className="member__adminContent">
                <div>
                    <PlayCircleIcon fontSize="large" sx={{color: "rgba(106,165,197,1.00)", m:2}}/>
                    <MenuIcon fontSize="large" sx={{m:2}} onClick={toggleDrawer('right', true)}/>
                    <Drawer
                      anchor='right'
                      open={state['right']}
                      onClose={toggleDrawer('right', false)}
                    >
                      {list('right')}
                    </Drawer>

                    <button onClick={handleOpen} className="btn btn-success m-3">Upload</button>

                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className="text-white font-weight-bold">
                        Choose what to upload:
                    </Typography>
                   
                   <div style={{"marginTop": "16px", "border": "1px solid #f1f1f1", "display": "flex", "justifyContent": "center", "alignItems": "center", "padding": "20px"}}>
                        <p className="text-white font-weight-bold">Upload Song</p>
                   </div>
                   <div style={{"marginTop": "16px", "border": "1px solid #f1f1f1", "display": "flex", "justifyContent": "center", "alignItems": "center", "padding": "20px"}}>
                        <p className="text-white font-weight-bold">Upload Beats/Instrumentals</p>
                   </div>
                   <div style={{"marginTop": "16px", "border": "1px solid #f1f1f1", "display": "flex", "justifyContent": "center", "alignItems": "center", "padding": "20px"}}>
                        <p className="text-white font-weight-bold">Upload Podcast</p>
                   </div>
                   <div style={{"marginTop": "16px", "border": "1px solid #f1f1f1", "display": "flex", "justifyContent": "center", "alignItems": "center", "padding": "20px"}}>
                        <p className="text-white font-weight-bold">Upload Merchandise</p>
                   </div>
                   <div style={{"marginTop": "16px", "border": "1px solid #f1f1f1", "display": "flex", "justifyContent": "center", "alignItems": "center", "padding": "20px"}}>
                        <p className="text-white font-weight-bold">Upload Sound kits</p>
                   </div>
                    </Box>
                </Modal>
                    
                </div>
               
                </div>
            </div>

        </div>
        </div>
        </div>

        
        <div style={{"backgroundColor": "#080808", "width": "100%", "height": "100%", "display": "flex", "justifyContent": "space-around", "alignItems": "flex-start", "padding": "10px"}}>
        <div style={{"backgroundColor": "rgb(16, 16, 16)", "padding": "20px", "borderRadius": "15px", "width": "800px"}}>
            <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "width": "100%"}}>
            <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL3lqZmdRY2xYNmgybi8zNzUzNDEuanBnIiwidGltZXN0YW1wIjpudWxsLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiZmlsbCIsIndpZHRoIjoxNjAsImhlaWdodCI6MTYwfX19?t=1636041497330" alt="" style={{"borderRadius": "50%", "width": "100px", "height": "100px", "objectFit": "cover"}}/>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "center"}} className="mt-3">
                <div className="p-1">
                <p className="text-white font-weight-bold" style={{"textAlign": "center", "fontSize": 22}}>Buckroll</p>
                </div>
                <div className="p-1">
                <p><i class="fa-solid fa-circle-check text-primary"></i></p>
                </div>
                <div className="p-1">
                <p><i className="fa fa-star" style={{"color": "orange"}}></i></p>
                </div>
            </div>
            <p style={{"textAlign": "center", "fontSize": 13}}>Hamburg, Germany</p>
            <button className="w-100 btn btn-success"><i className="fa fa-edit"></i> Edit Profile</button>
            <p style={{"fontSize": 12}} className="font-weight-bold mt-3">QUICK STATS</p>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "color": "gray"}}>
                <p>Followers</p>
                <p>74.9k</p>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "color": "gray"}}>
                <p>New Followers</p>
                <p>7</p>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "color": "gray"}}>
                <p>Plays</p>
                <p>7.5M</p>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "color": "gray"}}>
                <p>Tracks</p>
                <p>1.4k</p>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "color": "gray"}}>
                <p>Total Net Sales</p>
                <p>$0.00</p>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "color": "gray"}}>
                <p>Active Campaigns</p>
                <p>7</p>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "color": "gray"}}>
                <p>Free Downloads</p>
                <p>0</p>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "color": "gray"}}>
                <p>Comments</p>
                <p>0</p>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "color": "gray"}}>
                <p>Reposts</p>
                <p>0</p>
            </div>
            <hr style={{"width": "100%"}}/>
            <div>
                <p style={{"fontSize": 12}} className="font-weight-bold">Finish Your Drafts</p>
                <p style={{"fontSize": 14, "marginBottom": 18}}>You have some drafts pending that require changes to become active.</p>
                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                    <div style={{"display": "flex", "alignItems": "center"}}>
                    <div><i className="fa fa-compact-disc" style={{"fontSize": "30px"}}></i></div>
                    <div style={{"lineHeight": 0.5, "marginLeft": 10}}>
                        <p className="font-weight-bold">New Track</p>
                        <p style={{"fontSize": "10px"}}>Aug 13, 2022, 4:05 PM</p>
                    </div>    
                    </div>
                    <div>
                        <i className="fa fa-edit"></i>
                    </div>
                </div>
                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                    <div style={{"display": "flex", "alignItems": "center"}}>
                    <div><i className="fa fa-compact-disc" style={{"fontSize": "30px"}}></i></div>
                    <div style={{"lineHeight": 0.5, "marginLeft": 10}}>
                        <p className="font-weight-bold">New Album</p>
                        <p style={{"fontSize": "10px"}}>Aug 13, 2022, 4:05 PM</p>
                    </div>    
                    </div>
                    <div>
                        <i className="fa fa-edit"></i>
                    </div>
                </div>
                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                    <div style={{"display": "flex", "alignItems": "center"}}>
                    <div><i className="fa fa-compact-disc" style={{"fontSize": "30px"}}></i></div>
                    <div style={{"lineHeight": 0.5, "marginLeft": 10}}>
                        <p className="font-weight-bold">New Track</p>
                        <p style={{"fontSize": "10px"}}>Aug 13, 2022, 4:05 PM</p>
                    </div>    
                    </div>
                    <div>
                        <i className="fa fa-edit"></i>
                    </div>
                </div>
        
            </div>
            <hr style={{"width": "100%"}}/>
            <div>
                <div>
                <p style={{"fontSize": 12}} className="font-weight-bold">Add New Content</p>
                <i className="fa fa-ecclipsis"></i>
                </div>
                <div style={{"display": "flex", "flexWrap": "wrap"}}>
                    <div style={{"backgroundColor": "gray", "width": "130px", "height": "120px", "boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)", "margin": 5, "borderRadius": 10}}>
                    <p style={{"textAlign": "center"}} className="text-white">
                    <i className="fa-solid fa-music" style={{"fontSize": 30, "margin": 10}}></i>
                        </p>
                        <p style={{"textAlign": "center"}} className="text-white">Create Track</p>
                    </div>
               
                <div>
                    <div style={{"backgroundColor": "gray", "width": "130px", "height": "120px", "boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)", "margin": 5, "borderRadius": 10}}>
                        <p style={{"textAlign": "center"}} className="text-white">
                        <i className="fa fa-compact-disc" style={{"fontSize": 30, "margin": 10}}></i>
                        </p>
                        <p className="text-white" style={{"textAlign": "center"}}>Create Album</p>
                    </div>
                </div>
                <div>
                    <div style={{"backgroundColor": "gray", "width": "130px", "height": "120px", "boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)", "margin": 5, "borderRadius": 10}}>
                    <p style={{"textAlign": "center"}} className="text-white">
                    <i class="fa-solid fa-users" style={{"fontSize": 30, "margin": 10}}></i>
                        </p>
                        <p style={{"textAlign": "center"}} className="text-white">Create Service</p>
                    </div>
                </div>
                <div>
                    <div style={{"backgroundColor": "gray", "width": "130px", "height": "120px", "boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)", "margin": 5, "borderRadius": 10}}>
                    <p style={{"textAlign": "center"}} className="text-white">
                    <i class="fa-solid fa-folder" style={{"fontSize": 30, "margin": 10}}></i>
                        </p>
                        <p style={{"textAlign": "center"}} className="text-white">Create S.Kit</p>
                    </div>
                </div>
                </div>
                
            </div>
            <hr style={{"width": "100%"}}/>
            <div>
                <p style={{"fontSize": 12}} className="font-weight-bold">ACHIEVEMENTS</p>
                <div>
                <i className="fa-solid fa-compact-disc" style={{"fontSize": "30px", "marginRight": 10, "color": "gray"}}></i>
                <i className="fa-solid fa-trophy" style={{"fontSize": "30px", "color": "gray"}}></i>
                </div>
            </div>
            <hr style={{"width": "100%"}}/>
            <div>
                <p style={{"fontSize": 12}} className="font-weight-bold">PRODUCTS</p>
                <div>
                <Chip label="11 Albums" sx={{bgcolor: "gray", color: "white", mr: 2}}/>
                <Chip label="1425 Tracks" sx={{bgcolor: "gray", color: "white"}}/>
                </div>
            </div>
            <hr style={{"width": "100%"}}/>
            <div>
                <p style={{"fontSize": 12}} className="font-weight-bold">ABOUT ME</p>
                <p>Producer</p>
                <p><a href="#">Edit</a></p>
            </div>
            <hr style={{"width": "100%"}}/>
            <div>
                <p style={{"fontSize": 12}} className="font-weight-bold">FIND ME ON</p>
                <div>
                    <i className="fa fa-twitter" style={{"fontSize": 25, "marginRight": 7}}></i>
                    <span className="font-weight-bold">Twitter</span>
                </div>
                <div>
                    <i className="fa fa-instagram" style={{"fontSize": 25, "marginRight": 7}}></i>
                    <span className="font-weight-bold">Instagram</span>
                </div>
                <div>
                    <i className="fa fa-youtube" style={{"fontSize": 25, "marginRight": 7}}></i>
                    <span className="font-weight-bold">Youtube</span>
                </div>
            </div>
            <hr style={{"width": "100%"}}/>
            <div>
                <p style={{"fontSize": 12}} className="font-weight-bold">Revenue</p>
                <p>Producer</p>
                <p><a href="#">Edit</a></p>
            </div>
        </div>


        <div>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between","padding": "20px"}}>
            <h4 className="text-white font-weight-bold">Tracks</h4>
            <p className="text-white" style={{"textDecoration": "underline"}}>Show all</p>
            </div>

            <div style={{"display": "flex", "alignItems": "flex-start", "padding": "20px"}}>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL2hRSVNwM2xkRjUyWC9pODFtNW14M3QuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636110449255" alt="" width="100%" />
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL2hpeFFJU256RnZyUS9pODFtNXAxdXYuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636720254757" alt="" width="100%" />
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL3U2RG9nYU9USUtIei9pODFtNW11OTUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636112178351" alt="" width="100%" />
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL1NTU3F0YlhkbU85Zy9pODFtNXZkd3AuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636112681270" alt="" width="100%" />
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

            </div>

            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between","padding": "20px"}}>
            <h4 className="text-white font-weight-bold">Albums</h4>
            <p className="text-white" style={{"textDecoration": "underline"}}>Show all</p>
            </div>

            <div style={{"display": "flex", "alignItems": "flex-start", "padding": "20px"}}>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL2hRSVNwM2xkRjUyWC9pODFtNW14M3QuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636110449255" alt="" width="100%" />
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL2hpeFFJU256RnZyUS9pODFtNXAxdXYuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636720254757" alt="" width="100%"/>
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL3U2RG9nYU9USUtIei9pODFtNW11OTUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636112178351" alt="" width="100%"/>
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL1NTU3F0YlhkbU85Zy9pODFtNXZkd3AuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636112681270" alt="" width="100%" />
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

            </div>

            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between","padding": "20px"}}>
            <h4 className="text-white font-weight-bold">Merchandise</h4>
            <p className="text-white" style={{"textDecoration": "underline"}}>Show all</p>
            </div>

            <div style={{"display": "flex", "alignItems": "flex-start", "padding": "20px"}}>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL2hRSVNwM2xkRjUyWC9pODFtNW14M3QuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636110449255" alt="" width="100%"/>
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL2hpeFFJU256RnZyUS9pODFtNXAxdXYuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636720254757" alt="" width="100%"/>
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL3U2RG9nYU9USUtIei9pODFtNW11OTUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636112178351" alt="" width="100%"/>
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL1NTU3F0YlhkbU85Zy9pODFtNXZkd3AuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636112681270" alt="" width="100%"/>
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

            </div>

            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between","padding": "20px"}}>
            <h4 className="text-white font-weight-bold">Sound packs</h4>
            <p className="text-white" style={{"textDecoration": "underline"}}>Show all</p>
            </div>

            <div style={{"display": "flex", "alignItems": "flex-start", "padding": "20px"}}>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL2hRSVNwM2xkRjUyWC9pODFtNW14M3QuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636110449255" alt="" width="100%"/>
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL2hpeFFJU256RnZyUS9pODFtNXAxdXYuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636720254757" alt="" width="100%"/>
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL3U2RG9nYU9USUtIei9pODFtNW11OTUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636112178351" alt="" width="100%"/>
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

                <div style={{"width": "250px"}} className="m-1">
                    <img src="https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzc1MzQxL2ltYWdlL1NTU3F0YlhkbU85Zy9pODFtNXZkd3AuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1636112681270" alt="" width="100%"/>
                    <div>
                        <p>$29.99</p>
                        <p className="text-white">Track Mondfinsternis | Asche x Kollegah Type Beat</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
    </div>
  )
}

export default Artist;