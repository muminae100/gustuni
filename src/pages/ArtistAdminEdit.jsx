import { useState } from "react";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonIcon from '@mui/icons-material/Person';
import "../assets/css/accountSidenav.css";

const ArtistAdminEdit = () => {
    const [showMusic, setShowMusic] = useState(true);
    const [showEditProfile, setShowEditProfile] = useState(false);

    const [showEssentials, setShowEssentials] = useState(true);
    const [showProfilePic, setShowProfilePic] = useState(false);
    
    //modal
     const [open, setOpen] = useState(false);
     const handleOpen = () => {
         setBasicUpload(false);
         setUploadForLicensing(false);
         setOpen(true);
    };
     const handleClose = () => setOpen(false);

     //song uploads 
     const [basicUpload, setBasicUpload] = useState(false);
     const [uploadForLicensing, setUploadForLicensing] = useState(false);

     const handleShowMusic = () =>{
        setShowMusic(true);
        setShowEditProfile(false);
     }

     const handleShowEditProfile = () =>{
        setShowMusic(false);
        setShowEditProfile(true);
     }

     const handleShowBasicUpload = () =>{
        setBasicUpload(true);
        setUploadForLicensing(false);
     }

     const handleShowLicensingUpload = () =>{
        setBasicUpload(false);
        setUploadForLicensing(true);
     }

     const handleShowEssentials = () =>{
        setShowEssentials(true);
        setShowProfilePic(false);
     }

     const handleShowProfilePic = () =>{
        setShowEssentials(false);
        setShowProfilePic(true);
     }

     const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        boxShadow: 24,
    };


  return (
    <>
    <div className="mt-5 p-5 bg-dark text-center" style={{"height": "400px", "display": "flex", "alignItems": "flex-end", "justifyContent": "center"}}>
      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column"}}>
      <div>
      <h1 className="text-white">PiliChilli</h1> 
      </div>
      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around", "marginTop": "30px"}}>
        <button style={{"borderBottom": showMusic && "1px solid #f1f1f1" }} className="btn btn-lg text-white" onClick={handleShowMusic}>MUSIC</button>
        <button style={{"borderBottom": showEditProfile && "1px solid #f1f1f1" }} className="btn btn-lg text-white" onClick={handleShowEditProfile}>EDIT PROFILE</button>
      </div>
      </div>
    </div>

    {showMusic && (
    <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "center", "marginTop": "30px", "width": "100%"}} className="account__container">
    <div className="account__sidebar">
    <a className="active">Songs</a>
    <a>License types</a>
    <a>Albums</a>
    <a>Sound kits</a>
    </div>
    <div className="p-5" >
    <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
        ADD SONG
    </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{bgcolor: "#333", color: "white", p: 2, textAlign: "center"}}>
                {basicUpload? "Multi song upload" : uploadForLicensing? "Song for Licensing" : " Select your upload"}
                </Typography>

                {basicUpload? (
                    <>
                    <Box sx={{p: 6, textAlign: "center", bgcolor: "#f1f1f1"}} >
                    <Typography sx={{textAlign: "center"}}>
                    FILE DROP
                    </Typography>
                    <Button variant="contained" startIcon={<FileUploadIcon />} onClick={handleOpen} >
                        Browse
                    </Button>
                    <br />
                    <br />
                    <span className="p-2">
                        Url link
                    </span>
                    <input type="text" />
                    </Box>
                    {/* <Box sx={{p: 6}}>
                        
                    </Box> */}
                    <Box sx={{p: 6, textAlign: "center"}}>
                        <div>          
                        Recommended: lossless file format (WAV, FLAC, AIF, AU, SND)
                        You may upload multiple files by browsing or dropping tracks onto the file drop zone.
                        </div>
                    </Box>
                    <Box sx={{p: 2, textAlign: "center", m:4, bgcolor: "#f1f1f1"}}>
                        <div style={{"display": "flex", "justifyContent": "space-around"}}>
                            <p></p>
                            <p>Standard</p>
                            <p>Pro</p>
                        </div>
                        <div style={{"display": "flex", "justifyContent": "space-around"}}>
                            <p>Max lossless size</p>
                            <p>100 MB</p>
                            <p>400 MB</p>
                        </div>
                        <div style={{"display": "flex", "justifyContent": "space-around"}}>
                            <p>Max MP3 size</p>
                            <p>25 MB</p>
                            <p>50 MB</p>
                        </div>
                        <div style={{"display": "flex", "justifyContent": "space-around"}}>
                            <p>Stream quality</p>
                            <p>160 kbps</p>
                            <p>160 kbps</p>
                        </div>
                        <div style={{"display": "flex", "justifyContent": "space-around"}}>
                            <p>Free downloads</p>
                            <p>160 kbps</p>
                            <p>Best *</p>
                        </div>
                        <div style={{"display": "flex", "justifyContent": "space-around"}}>
                            <p>Paid downloads</p>
                            <p>Best *</p>
                            <p>Best *</p>
                        </div>
                        <div className="mt-5">
                        *Best: Choice between MP3 (320, 160) and lossless (WAV, AIF...) <br />
                        Upgrade to Pro account
                        </div>
                    </Box>
                    </>
                ) 
                : uploadForLicensing? (
                    <>
                    <Box sx={{p: 6}}>
                    <div style={{"display": "flex", "justifyContent": "space-between"}}>
                        <div>
                        <h5>Song title</h5>
                        <p style={{"fontSize": "14px"}}>Title of the song</p>
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                    <div style={{"display": "flex", "justifyContent": "space-between"}}>
                        <div>
                        <h5>Tags</h5>
                        <p style={{"fontSize": "14px"}}>How you are found in our site search. Enter genre, mood, sounds-like, etc.</p>
                        </div>
                        <div>
                            <input type="text" placeholder="Keywords, separated by comma"/>
                        </div>
                    </div>
                    <div style={{"display": "flex", "justifyContent": "space-between"}}>
                        <div>
                        <h5>Lossless untagged file (WAV,...)</h5>
                        <p style={{"fontSize": "14px"}}>Song to license. Automatically creates MP3 for licensing as well. Max file size 100 MB.</p>
                        </div>
                        <div>
                        <Button variant="contained" startIcon={<FileUploadIcon />} onClick={handleOpen} >
                            Browse
                        </Button>
                        </div>
                    </div>
                    <div style={{"display": "flex", "justifyContent": "space-between"}}>
                        <div>
                        <h5>Tagged version for streaming</h5>
                        <p style={{"fontSize": "14px"}}>Only needed if you use 2 versions, tagged for streaming and untagged for licensing.</p>
                        </div>
                        <div>
                        <Button variant="contained" startIcon={<FileUploadIcon />} onClick={handleOpen} >
                            Browse
                        </Button>
                        </div>
                    </div>
                    <div style={{"display": "flex", "justifyContent": "space-between"}}>
                        <div>
                        <h5>Trackout/Stems</h5>
                        <p style={{"fontSize": "14px"}}>Upload in ZIP or RAR file format. Optional, but highly recommended. Max file size 400 MB.</p>
                        </div>
                        <div>
                        <Button variant="contained" startIcon={<FileUploadIcon />} onClick={handleOpen} >
                            Browse
                        </Button>
                        </div>
                    </div>
                    </Box>
                    </>
                ) : (
                    <>
                    <div style={{"display": "flex", "justifyContent": "space-around"}}>
                    <Box sx={{p: 6, textAlign: "center", bgcolor: "#f1f1f1", m:4}} onClick={handleShowBasicUpload}>
                    <h4>Basic Upload</h4>
                    <p style={{"fontSize": "12px"}}>Upload MP3, WAV or other lossless files. Single song or batch uploads.</p>
                    </Box>
                    <Box sx={{p: 6, textAlign: "center", bgcolor: "#f1f1f1", m:4}} onClick={handleShowLicensingUpload}>
                    <h4>Upload for Licensing</h4>
                    <p style={{"fontSize": "12px"}}>This option is mostly for beat producers. Upload tagged and untagged WAV, plus trackout stems.</p>
                    </Box>
                    </div>
                    <Typography sx={{p: 6}}>
                        I agree to SoundClick's Music Submission Terms.
                        Questions? See our upload FAQs
                    </Typography>
                    </>
                )}
                
                </Box>
            </Modal>
            <div style={{"width": "100%", "backgroundColor": "#f1f1f1"}} className="p-5 mt-5 mb-5">
                <h2>Welcome to Gustuni!</h2>
                <p>These are our recommended first steps.</p>
                <p>1 - Add your first song(s)</p>
                <p>Click the blue button above to upload your first song. You are free to upload as many songs as you like!</p>
                <p>2 - Make your profile shine</p>
                <p>The "edit profile" tab allows you to let your fans know what you're all about.</p>
                <p>3 - Upload profile pictures</p>
                <p>Visuals are important too. Simply add a cover picture and an artist picture, and you're well on your way.</p>
            </div>
            </div>
            </div>
        )}

        {showEditProfile && (
            <>
            <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "center", "marginTop": "30px", "width": "100%"}} className="account__container">
            <div className="account__sidebar">
            <a className={showEssentials && "active"} onClick={handleShowEssentials}>Essentials</a>
            <a className={showProfilePic && "active"} onClick={handleShowProfilePic}>Profile pictures</a>
            <a>Interview</a>
            <a>Videos</a>
            <a>Photos</a>
            </div>
            <div className="p-5">
                <>
                
            {showEssentials && (
                <>
                <div style={{"padding": "10px", "width": "700px"}}>

                <div style={{"display": "flex", "justifyContent": "space-between","width": "100%"}}>
                <label style={{"padding": "15px"}} htmlFor="username">Artist name</label> <br />
                <input style={{"margin": "10px", "width": "100%"}} type="text" /> <br />     
                </div>

                <div style={{"display": "flex", "justifyContent": "space-between","width": "100%"}}>
                <label style={{"padding": "15px"}} htmlFor="realname">Hashtags/keywords</label> <br />
                <input style={{"margin": "10px", "width": "100%"}} type="text" /> <br />    
                </div>

                <div style={{"display": "flex", "justifyContent": "space-between"}}>
                <label style={{"padding": "15px"}} htmlFor="Citystate">City, state</label> <br />
                <input style={{"margin": "10px", "width": "100%"}} type="text" /> <br /> 
                </div>

                <div style={{"display": "flex", "justifyContent": "space-between"}}>
                <label style={{"padding": "15px"}} htmlFor="Tagline">Country</label> <br />
                <select name="country" id="" style={{"margin": "10px", "width": "100%"}}>
                    <option value="kenya" selected>Kenya</option>
                    <option value="tz">Tanzania</option>
                    <option value="ug">Uganda</option>
                </select>
                </div>

                <div style={{"display": "flex", "justifyContent": "space-between"}}>
                <label style={{"padding": "15px"}} htmlFor="Website">Website</label> <br />
                <input style={{"margin": "10px", "width": "100%"}} type="text" /> <br />          
                </div>

                <div style={{"display": "flex", "justifyContent": "space-between"}}>
                <label style={{"padding": "15px"}} htmlFor="Tagline">Tagline</label> <br />
                <textarea style={{"margin": "10px", "width": "100%"}} name="tagline" id="" cols="30" rows="3"></textarea>
                </div>

                </div>


                <div style={{"width": "100%", "display": " flex", "justifyContent": "center", "marginTop": "10px"}}>
                <Button variant="contained" disabled>
                Save
                </Button>
                </div>
                </>
            )}

            {showProfilePic && (
                 <>
                 <div style={{"display": "flex", "alignItems": "center", "width": "100%", "flexDirection": "column"}}>
                     <div className="p-3">Artist picture</div>
                     <div className="p-3">
                     <Box sx={{p: 10, bgcolor: "#333"}}>
                         <PersonIcon fontSize="large" sx={{color: "white", textAlign: "center"}}/>
                         <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: "white", textAlign: "center"}}>
                         Upload
                         </Typography>
                     </Box>
                     </div>
                 </div>
                 <div style={{"display": "flex", "alignItems": "center", "width": "100%", "flexDirection": "column"}}>
                     <div className="p-3">Cover picture</div>
                     <div className="p-3">
                     <Box sx={{p: 10, bgcolor: "#333", width: "100%"}}>
                         <CameraAltIcon fontSize="large" sx={{color: "white", textAlign: "center"}}/>
                         <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: "white", textAlign: "center"}}>
                         Upload
                         </Typography>
                     </Box>
                     </div>
                 </div>
     
                 </>
            )}
            
            </>
            </div>
            </div>
            </>
        )}
    </>
  )
}

export default ArtistAdminEdit;