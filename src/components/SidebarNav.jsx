import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/sidebar.css";

const SidebarNav = ({ToggleSidebar, isOpen, user}) => {
    const [toggleMusicDropdown, setToggleMusicDropdown] = useState(false);

    return (
        <>
            <div className="container-fluid">
                    <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <div>
                            {user?.photoURL 
                                ? <Link to="/profile"><img src={user?.photoURL} alt={user?.email} width="40px" height="40px" style={{"borderRadius": "50%", "objectFit": "cover"}}/></Link>
                                : <Link to="/profile"><img width={40} height={40} style={{"borderRadius": "50%", "objectFit": "cover"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                                </Link>
                            }  
                            </div>
                            <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                                <li><a className="sd-link">
                                    <i className="fa fa-home"></i>
                                    <span style={{"marginLeft": "10px"}}>Home</span>
                                </a>
                                </li>
                                <li>
                                    <div className="sd-link justify-content-between">
                                    <div>
                                    <i className="fa fa-headphones"></i>
                                    <span style={{"marginLeft": "10px"}} onClick={() => setToggleMusicDropdown(!toggleMusicDropdown)}>                            
                                    Music                           
                                    </span>
                                    </div>
                                   
                                    <div> 
                                        <i className="fa fa-caret-down" onClick={() => setToggleMusicDropdown(!toggleMusicDropdown)}></i>
                                    </div>  
                                
                                   </div>
                                </li>
                                {toggleMusicDropdown && (
                                <li>
                                    <div className="sd-link">                                   
                                    <div className="p-2">
                                    <span><Link style={{"textDecoration": "none"}} to="/topcharts">&gt; Top charts</Link></span><br />
                                    <span><Link style={{"textDecoration": "none"}} to="/playlists">&gt; Playlists </Link></span><br />
                                    <span><Link style={{"textDecoration": "none"}} to="/albums">&gt; Albums</Link> </span><br />
                                    <span><Link style={{"textDecoration": "none"}} to="/artist">&gt; Top artists</Link> </span>
                                    </div>                                   
                                    </div>
                                </li>
                                 )}

                                <li><Link to="/events" className="sd-link">
                                    <i className="fa fa-ticket"></i>
                                    <span style={{"marginLeft": "10px"}}>Events</span>
                                </Link></li>
                                <li><a className="sd-link">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span style={{"marginLeft": "10px"}}>Store</span>
                                </a></li>
                                <li><a className="sd-link">
                                    <i className="fa fa-compact-disc"></i>
                                    <span style={{"marginLeft": "10px"}}>Sound packs</span>
                                </a></li>
                                <li><a className="sd-link">
                                    <i className="fa fa-microphone"></i>
                                    <span style={{"marginLeft": "10px"}}>Beat contests</span>
                                </a></li>
                                <li><a className="sd-link">
                                    <i className="fa fa-envelope"></i>
                                    <span style={{"marginLeft": "10px"}}>Contact Us</span>
                                </a></li>
                                <li><a className="sd-link">
                                    <i className="fa fa-cog"></i>
                                    <span style={{"marginLeft": "10px"}}>Settings</span>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
           </div>
        </>
    )
}

export default SidebarNav;