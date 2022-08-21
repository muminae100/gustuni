import { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PersonIcon from '@mui/icons-material/Person';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import "../assets/css/accountSidenav.css";

const MemberAdministration = () => {
    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //navigation
    const [showAccount, setShowAccount] = useState(true);
    const [showProfile, setShowProfile] = useState(false);
    const [showWallet, setShowWallet] = useState(false);

    //account
    const [showUserInfo, setShowUserInfo] = useState(true);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showPurchases, setShowPurchases] = useState(false);

    //profile
    const [showAboutMe, setShowAboutMe] = useState(true);
    const [showProfilePictures, setShowProfilePictures] = useState(false);
    const [showPhotos, setShowPhotos] = useState(false);
    const [showBlog, setShowBlog] = useState(false);

    //wallet
    const [showMemberWallet, setShowMemberWallet] = useState(true);
    const [showTransactions, setShowTransactions] = useState(false);

    const handleShowAccount = () =>{
        setShowAccount(true);
        setShowProfile(false);
        setShowWallet(false);
    }

    const handleShowProfile = () =>{
        setShowAccount(false);
        setShowProfile(true);
        setShowWallet(false);
    }

    const handleShowWallet = () =>{
        setShowAccount(false);
        setShowProfile(false);
        setShowWallet(true);
    }

    const handleShowUserInfo = () =>{
        setShowUserInfo(true);
        setShowPrivacy(false);
        setShowPurchases(false);
    }

    const handleShowPrivacy = () =>{
        setShowUserInfo(false);
        setShowPrivacy(true);
        setShowPurchases(false);
    }

    const handleShowPurchases = () =>{
        setShowUserInfo(false);
        setShowPrivacy(false);
        setShowPurchases(true);
    }

    const handleShowAboutMe = () =>{
        setShowAboutMe(true);
        setShowProfilePictures(false);
        setShowPhotos(false);
        setShowBlog(false);
    }

    const handleShowProfilePictures = () =>{
        setShowAboutMe(false);
        setShowProfilePictures(true);
        setShowPhotos(false);
        setShowBlog(false);
    }

    const handleShowPhotos = () =>{
        setShowAboutMe(false);
        setShowProfilePictures(false);
        setShowPhotos(true);
        setShowBlog(false);
    }

    const handleShowBlog =() =>{
        setShowAboutMe(false);
        setShowProfilePictures(false);
        setShowPhotos(false);
        setShowBlog(true);
    }

    const handleShowMemberWallet = () =>{
        setShowTransactions(false);
        setShowMemberWallet(true);
    }

    const handleShowTransactions = () =>{
        setShowTransactions(true);
        setShowMemberWallet(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
    };

  return (
    <>
        <div className="carousel slide bg-dark" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">

            <div className="container" style={{"display": "flex", "alignItems": "flex-end"}}>
                <div className="member__adminContent">
                <div className="mb-5">
                    <h2 style={{"color": "rgb(255,255,255,0.8)"}}>@Simon</h2>
                </div>
                <div style={{"width": "100%", "display": "flex", "justifyContent": "space-around"}}>
                <div style={{"textDecoration": "none", "color": "rgba(255,255,255,0.8)", "fontSize": "25px", "padding": "10px", "borderBottom": showAccount && "3px solid rgb(59,119,153)", "cursor": "pointer"}} onClick={handleShowAccount}>Account</div>
                <div style={{"textDecoration": "none", "color": "rgba(255,255,255,0.8)", "fontSize": "25px", "padding": "10px", "cursor": "pointer", "borderBottom": showProfile && "3px solid rgb(59,119,153)"}} onClick={handleShowProfile}>Profile</div>
                <div style={{"textDecoration": "none", "color": "rgba(255,255,255,0.8)", "fontSize": "25px", "padding": "10px", "cursor": "pointer", "borderBottom": showWallet && "3px solid rgb(59,119,153)"}} onClick={handleShowWallet}>Wallet</div>
                </div>
                </div>
            </div>

        </div>
        </div>
        </div>

    <div style={{"display": "flex", "justifyContent": "center", "width": "100%", "height": "100%", "alignItems": "center"}}>
    <div style={{"display": "flex", "justifyContent": "center", "alignItems": "flex-start", "width": "70%", "height": "50%"}} className="account__container">
      {showAccount && (
      <>
      {/* <!-- The sidebar --> */}
        <div className="account__sidebar">
            <a className={showUserInfo && "active"} onClick={handleShowUserInfo}>User info</a>
            <a className={showPrivacy && "active"} onClick={handleShowPrivacy}>Privacy</a>
            <a className={showPurchases && "active"} onClick={handleShowPurchases}>My purchases</a>      
        </div>

        {/* <!-- Page content --> */}
        <div className="account__content">
        {showUserInfo && (
            <>
            <h3 style={{"padding": "10px"}}>Login</h3>
            <div style={{"display": "flex", "justifyContent": "space-between"}}>
                <div style={{"padding": "10px"}}>
                <label style={{"padding": "15px"}} htmlFor="email">Email</label> <br />
                <label style={{"padding": "15px"}} htmlFor="phone">Phone</label> <br />
                <label style={{"padding": "15px"}} htmlFor="password">Password</label> <br />
                <label style={{"padding": "15px"}} htmlFor="account_type">Account type</label>
                </div>
                <div style={{"padding": "10px"}}>
                <input style={{"margin": "10px", "width": "100%"}} type="email" /> <br />     
                <input style={{"margin": "10px", "width": "100%"}} type="text" /> <br />          
                <button className="btn btn-secondary m-3">Change</button>
                <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Regular user" />
                <FormControlLabel control={<Switch />} label="Artist/band" />
                <FormControlLabel control={<Switch />} label="Business/industry" />
                </FormGroup>
                </div>
            </div>
            <div style={{"width": "100%", "display": " flex", "justifyContent": "center", "marginTop": "10px"}}>
            <Button variant="contained" disabled>
                Save
            </Button>
            </div>
            
            </>
        )}
        {showPrivacy && (
            <>
            <div style={{"display": "flex", "alignItems": "center", "width": "100%"}}>
                <div className="p-3">Private profile</div>
                <div className="p-3">
                <FormControlLabel control={<Switch />} label="Only your followers can access your full profile page" />
                </div>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "width": "100%"}}>
                <div className="p-3">Playlist: liked songs</div>
                <div className="p-3">
                <FormControlLabel control={<Switch />} label="Make this playlist private (only you can see this playlist)" />
                </div>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "width": "100%"}}>
                <div className="p-3">Comments</div>
                <div className="p-3">
                <FormControlLabel control={<Switch />} label="Allow comments (recommended)" />
                </div>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "width": "100%", "justifyContent": "space-between"}}>
                <div></div>
                <div className="p-3">
                <FormControlLabel control={<Switch />} label="New comments require your approval before others can see them" />
                </div>
            </div>
            <div style={{"width": "100%", "display": " flex", "justifyContent": "center", "marginTop": "10px"}}>
            <Button variant="contained" disabled>
                Save
            </Button>
            </div>
            </>
        )}
        {showPurchases && (
            <div style={{"display": "flex", "justifyContent": "space-between", "flexDirection": "column", "alignItems": "center"}}>
            <div className="m-3">
            <SentimentDissatisfiedIcon fontSize="large"/>
            </div>
            <div className="m-3">
                <p>Sorry, currently no purchases to show.</p>
            </div>
            </div>
        )}
        </div>
        </>
       )}

     {showWallet && (
      <>
      {/* <!-- The sidebar --> */}
        <div className="account__sidebar">
            <a className={showMemberWallet && "active"} onClick={handleShowMemberWallet}>Member wallet</a>
            <a className={showTransactions && "active"} onClick={handleShowTransactions}>Transactions</a>  
        </div>

        {/* <!-- Page content --> */}
        <div className="account__content">
        {showMemberWallet && (
            <>
            <div style={{"display": "flex", "alignItems": "center", "width": "100%", "justifyContent": "space-around"}}>
            <div>
            <Box sx={{p:10, bgcolor: "#f1f1f1"}}>
                <Typography variant="h6" component="h2" sx={{fontSize: 40, textAlign: "center"}}>$0.00</Typography>
                <Typography sx={{textAlign: "center"}}>Balance</Typography>
            </Box>
            </div>
            <div>
            <Button variant="contained">
              Add $25 USD With Crypto
            </Button> <br />
            <br />
            <Button variant="contained">
              Add $50 USD With Crypto
            </Button> <br />
            <br />
            <Button variant="contained">
              Add $100 USD With Crypto
            </Button>
            </div>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "width": "100%"}}>
                <div className="p-3">What is a Member Wallet?</div>
                <div className="p-3">
                <p>The Member Wallet is a pre-paid account. It allows you to buy songs or licenses on Gustuni. It works like a regular PayPal or credit card payment when checking out.</p>
                </div>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "width": "100%"}}>
                <div className="p-3">Why would I use a wallet?</div>
                <div className="p-3">
                <p>A wallet can be funded with crypto assets. So you transfer your money using Bitcoin, Ethereum, Tether, or similar. Which means you no longer need PayPal or a credit card to purchase items on Gustuni.</p>
                </div>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "width": "100%"}}>
                <div className="p-3">How does it work?</div>
                <div className="p-3">
                <p>You transfer money to us in your preferred cryptocurrency. The transfer usually takes between 10 and 60 minutes. When we receive your payment we add the money in US Dollars to your Member Wallet. You can then pay on SoundClick using your wallet.</p>
                </div>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "width": "100%"}}>
                <div className="p-3">Why is there a service fee?</div>
                <div className="p-3">
                <p>In addition to the network fee you pay, we also pay similar fees when we transfer the money on our end. So unfortunately we have to add this fee to cover our costs.</p>
                </div>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "width": "100%"}}>
                <div className="p-3">Can I withdraw money from my Member Wallet?</div>
                <div className="p-3">
                <p>The funds in your wallet are only to be used for purchases on SoundClick. Funds can not be withdrawn or sent somewhere else.</p>
                </div>
            </div>
            
            </>
        )}
        {showTransactions && (
            <>
            <div style={{"display": "flex", "alignItems": "center", "width": "100%", "justifyContent": "center"}}>
                <div className="p-3">No transactions yet.</div>
            </div>
            </>
        )}
        </div>
        </>
       )}

     {showProfile && (
      <>
      {/* <!-- The sidebar --> */}
        <div className="account__sidebar">
            <a className={showAboutMe && "active"} onClick={handleShowAboutMe}>About me</a>
            <a className={showProfilePictures && "active"} onClick={handleShowProfilePictures}>Profile pictures</a>
            <a className={showPhotos && "active"} onClick={handleShowPhotos}>Photos</a>
            <a className={showBlog && "active"} onClick={handleShowBlog}>Blog</a>      
        </div>

        {/* <!-- Page content --> */}
        <div className="account__content">
        {showAboutMe && (
            <>
                <div style={{"padding": "10px", "width": "100%"}}>

                <div style={{"display": "flex", "justifyContent": "space-between","width": "100%"}}>
                <label style={{"padding": "15px"}} htmlFor="username">@Username</label> <br />
                <input style={{"margin": "10px", "width": "100%"}} type="text" /> <br />     
                </div>

                <div style={{"display": "flex", "justifyContent": "space-between","width": "100%"}}>
                <label style={{"padding": "15px"}} htmlFor="realname">Real name</label> <br />
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

                <div style={{"display": "flex", "justifyContent": "space-between"}}>
                <label style={{"padding": "15px"}} htmlFor="Tagline">About me</label>
                <textarea name="Aboutme" id="" cols="30" rows="6"></textarea>
                </div>

                </div>

            
            <div style={{"width": "100%", "display": " flex", "justifyContent": "center", "marginTop": "10px"}}>
            <Button variant="contained" disabled>
                Save
            </Button>
            </div>
            
            </>
        )}
        {showProfilePictures && (
            <>
            <div style={{"display": "flex", "alignItems": "center", "width": "100%", "flexDirection": "column"}}>
                <div className="p-3">Member picture</div>
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
        {showPhotos && (    
            <div>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
              ADD PHOTO
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{bgcolor: "#333", color: "white", p: 4, textAlign: "center"}}>
                    Picture upload
                </Typography>
                <Box sx={{p: 4, textAlign: "center"}} >
                <Button variant="contained" startIcon={<FileUploadIcon />} onClick={handleOpen} >
                    Browse
                </Button>
                </Box>
                </Box>
            </Modal>
            </div>
        )}

        {showBlog && (
            <div style={{"display": "flex", "justifyContent": "space-between", "flexDirection": "column", "alignItems": "center"}}>
            <div className="m-3">
            <Button variant="contained" startIcon={<AddIcon />}>
              ADD BLOG POST
            </Button>
            </div>
            <div className="m-3">
                <p>Blogs(0)</p>
            </div>
            </div>
        )}
        </div>
        </>
       )}
    </div>
    </div>
    </>
  )
}

export default MemberAdministration;