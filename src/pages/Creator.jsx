import { useState } from "react";
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Creator = () => {
  //dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }; 

  return (
    <div style={{"marginTop": "60px", "backgroundColor": "#080808", "width": "100%", "height": "100%", "display": "flex", "justifyContent": "space-around", "alignItems": "flex-start", "padding": "20px"}}>
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
            <div>
                <button className="btn btn-primary m-1"><i className="fa fa-plus" style={{"marginRight": 5}}></i> Follow</button>
                <button className="btn btn-outline-light m-1">Message</button>
                <button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} 
                className="btn m-1 btn-outline-light"><i className="fa fa-ellipsis"></i></button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                    >
                    <MenuItem onClick={handleClose}>Report</MenuItem>
                </Menu>
            </div>
            <p style={{"fontSize": 12}} className="font-weight-bold mt-3">STATS</p>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "color": "gray"}}>
                <p>Followers</p>
                <p>74.9k</p>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "color": "gray"}}>
                <p>Plays</p>
                <p>7.5M</p>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "color": "gray"}}>
                <p>Tracks</p>
                <p>1.4k</p>
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
                <p><a href="#">View more</a></p>
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
  )
}

export default Creator;