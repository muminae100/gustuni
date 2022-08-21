import { useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from '../Firebase';
import {signOut} from 'firebase/auth';
import SidebarNav from "./SidebarNav";
import Logo from "../assets/images/GUSTUNI LOGO black.svg";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import "../assets/css/navbar.css";


const Navbar = () =>{
  const [{ user }, dispatch] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);
  
  //account dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //notifications dropdown
  const [anchorElement, setAnchorElement] = useState(null);
  const Open = Boolean(anchorElement);
  const handleNotificationClick = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleNotificationClose = () => {
    setAnchorElement(null);
  };

  //sidenav
  const ToggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
 }

    const handleAuthentication = () =>{
        if (user){
            signOut(auth);
        }
    };


    return (
        <>
        <header>
        <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div onClick={ToggleSidebar} title="Menu"><i className="fas fa-bars" style={{"color": "white", "height": "100%", "padding": "15px", "backgroundColor": "rgb(59,119,153)", "marginRight": "15px"}}></i></div>
            <div className="navbar-brand">
              <img src={Logo} width={50} height={50} style={{"objectFit": "cover"}} alt="Logo" />
            </div>
            <Link className="navbar-brand responsive" to="/">Gutsuni</Link>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-md-0 w-100 d-flex justify-content-end">
              <form className="me-3 position-relative responsive">
              <input className="form-control usacc-inpt" type="text" placeholder="Search" aria-label="Search" />
              <i className="fas fa-search text-success d-inline position-absolute" style={{"right": 6, "top": 13 }}></i>
              </form>
              
              <li className="nav-item me-3 position-relative responsive">
                    <Link to="/cart" className="nav-link position-relative"><span className="unsav-icon me-1"><i className="fa-solid fa-cart-shopping"></i></span>
                    <span className="badge text-danger position-absolute" style={{"fontSize": 10, "top": 2.5, "right": 0}}>4</span>
                    </Link>
                </li>
                <li className="nav-item me-3 position-relative responsive">
                  <span className="nav-link position-relative">
                  <span 
                  id="notification-button"
                  aria-controls={Open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={Open ? 'true' : undefined}
                  onClick={handleNotificationClick}
                  className="unsav-icon me-1"><i className="fa-solid fa-bell"></i></span>
                  <span className="badge text-danger position-absolute" style={{"fontSize": 10, "top": 2.5, "right": 0}}>4</span>
                  </span>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorElement}
                    open={Open}
                    onClose={handleNotificationClose}
                    MenuListProps={{
                      'aria-labelledby': 'notification-button',
                    }}
                    >
                    <MenuItem onClick={handleNotificationClose}>
                    <Box
                      sx={{
                        width: 300,
                        height: 360
                      }}
                    >
                      <div style={{"display": "flex", "alignItems": "center"}}>
                      <p className="p-2">
                      <Link to="/messages">
                      <i className="fa fa-message" style={{"backgroundColor": "gray", "borderRadius": "50%", "padding": "10px", "fontSize": 20, "color": "#f1f1f1"}}></i>
                      </Link>
                      </p>
                      <div style={{"lineHeight": 0.4}} className="p-2">
                      <p className="text-dark font-weight-bold">Inbox</p>
                      <p>0 unread messages</p>
                      </div>
                      </div>
                      <hr style={{"width": "100%"}}/>
                      <div>
                        <p style={{"textAlign": "center"}} className="font-weight-bold"><i class="fa-solid fa-bell" style={{"color": "gray", "fontSize": "35px"}}></i></p>
                        <p style={{"textAlign": "center"}} className="font-weight-bold">No Notifications</p>
                        <p style={{"textAlign": "center"}}>If you receive any notification, <br /> it will display here</p>
                      </div>
                      <hr style={{"width": "100%"}}/>
                      <button className="btn btn-outline-success w-100 mt-5">All Notifications</button>
                    </Box>
                    
                    </MenuItem>
                  </Menu>
                </li>
                {/* <li className="nav-item me-3 position-relative responsive">
                    <Link to="/messages" className="nav-link position-relative"><span className="unsav-icon me-1"><i className="fa-solid fa-envelope"></i>
                    </span>
                    <span className="badge text-danger position-absolute" style={{"fontSize": 10, "top": 2.5, "right": 0}}>4</span>
                    </Link>
                </li> */}
                <li class="nav-item dropdown me-3">
                    <a 
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    class="nav-link" 
                    ><img src="https://www.w3schools.com/howto/img_avatar.png" alt="image" height="27px" width="27px" class="rounded-circle me-2" /></a>

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
                      <Avatar alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar.png" />
                      <span style={{"marginLeft": "10px"}}>John Doe</span>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>My Playlists</MenuItem>
                    <MenuItem onClick={handleClose}>Favourites</MenuItem>
                    <MenuItem onClick={handleClose}>History</MenuItem>
                    <MenuItem onClick={handleClose}>Purchased</MenuItem>
                    <MenuItem onClick={handleClose}>Collaborations</MenuItem>
                    <MenuItem onClick={handleClose}>Your Orders</MenuItem>
                    <MenuItem onClick={handleClose}>Gift Card Orders</MenuItem>
                    <MenuItem onClick={handleClose}>Negotiations</MenuItem>
                    <MenuItem onClick={handleClose}>Messages</MenuItem>
                    <MenuItem onClick={handleClose}>Connections</MenuItem>
                    <MenuItem onClick={handleClose}>Account Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Help</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>

                  </li>
              {!user &&(
                <> 
                <li className="nav-item me-3">
                  <Link className="nav-link btn btn-success" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item me-2">
                  <Link className="btn btn-outline-success" to={!user && '/login'}>Log In</Link>
                </li>
                </>
               )}
              </ul>
            </div>

          </div>
        </nav>
        </header>

        <SidebarNav ToggleSidebar={ToggleSidebar} isOpen={isOpen} user={user}/>
        </>
    )
}

export default Navbar;