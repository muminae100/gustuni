import { useStateValue } from "../StateProvider";
import { useState } from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import Input from '@mui/material/Input';
import AddIcon from '@mui/icons-material/Add';

const ProfilePage = () => {
  const [{ user }, dispatch] = useStateValue();
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
        {['Comments'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>           
                <ModeCommentOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Post a comment...'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <Input placeholder={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <>
    <div className="mt-5 p-5 bg-dark text-center" style={{"height": "400px", "display": "flex", "alignItems": "flex-end", "justifyContent": "center"}}>
      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column"}}>
      <div>
      <h1 className="text-white">{user?.displayName}</h1> 
      </div>
      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around"}}>
        <div style={{"margin": "15px", "textDecoration": "none", "color": "white"}}><Button variant="contained">Save</Button></div>
        <div>
          <Button variant="contained">
          <Link style={{"textDecoration": "none", "color": "white"}} to="/memberAdmin">Edit</Link>
          </Button></div>
      </div>
      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around"}}>
        <button style={{"borderBottom": "1px solid #f1f1f1"}} className="btn btn-lg text-white">Overview</button>
        <button className="btn btn-lg text-white" onClick={toggleDrawer('right', true)}>User posts</button>
        <Drawer
          anchor='right'
           open={state['right']}
          onClose={toggleDrawer('right', false)}
        >
          {list('right')}
        </Drawer>
      </div>
      </div>
    </div>

    <div style={{"width": "100%","display": "flex", "alignItems": "center", "justifyContent": "center"}}>
    <div className="p-5 m-3 bg-secondary" style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "width": "70%", "flexWrap": "wrap"}}>
      <div className="m-3">
      <i className="fa fa-user" style={{"fontSize": "45px", "color": "white"}}></i>
      </div>
      <div className="m-3" style={{"color": "white"}}>
        <p style={{"textAlign": "center"}}>{user?.email}</p>
        <span className="m-3"><i className="fa-solid fa-location-dot"></i> Kenya</span>
        <span className="m-3"> <i className="fa fa-calendar" style={{"color": "#f2f2f2"}}></i> Joined July 2022</span>
      </div>
    </div>
    </div>
    </>
  )
}

export default ProfilePage;