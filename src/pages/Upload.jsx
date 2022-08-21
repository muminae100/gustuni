import { useState, useRef } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

//react image crop
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop'
import { canvasPreview } from '../components/CanvasPreview';
import { useDebounceEffect } from '../hooks/useDebounceEffect';
import 'react-image-crop/dist/ReactCrop.css'

function centerAspectCrop(
  mediaWidth,
  mediaHeight,
  aspect,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}



const Upload = () =>{
    //image cropping
  const [imgSrc, setImgSrc] = useState('')
  const previewCanvasRef = useRef(null)
  const imgRef = useRef(null)
  const [crop, setCrop] = useState()
  const [completedCrop, setCompletedCrop] = useState()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const [aspect, setAspect] = useState(16 / 9)

  function onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined) 
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(reader.result.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
    
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        )
      }
    },
    100,
    [completedCrop, scale, rotate],
  )

  function handleToggleAspectClick() {
    if (aspect) {
      setAspect(undefined)
    } else if (imgRef.current) {
      const { width, height } = imgRef.current
      setAspect(16 / 9)
      setCrop(centerAspectCrop(width, height, 16 / 9))
    }
  }




    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState("");

    const [showUpload, setShowUpload] = useState(true);
    const [showTracks, setShowTracks] = useState(false);
    const [showInsights, setShowInsights] = useState(false);
    const [showPromotions, setShowPromotions] = useState(false);

    const [checkedDownloads, setCheckedDownloads] = useState(true);
    const [checkedReposts, setCheckedReposts] = useState(true);
    const [checkedSharing, setCheckedSharing] = useState(true);
    const [checkedComments, setCheckedComments] = useState(true);

    //upload method
    const [showSelectedUpload, setShowSelectedUpload] = useState(false);

    //selected upload
    const [showBasicInfo, setShowBasicInfo] = useState(true);
    const [showMetadata, setShowMetadata] = useState(false);
    const [showPermissions, setShowPermissions] = useState(false);
    const [showMonitize, setShowMonitize] = useState(false);

    //functions
    const handleShowUpload = () =>{
        setShowUpload(true);
        setShowTracks(false);
        setShowInsights(false);
        setShowPromotions(false);
    }

    const handleShowTracks = () =>{
        setShowUpload(false);
        setShowTracks(true);
        setShowInsights(false);
        setShowPromotions(false);
    }

    const handleShowInsights = () =>{
        setShowUpload(false);
        setShowTracks(false);
        setShowInsights(true);
        setShowPromotions(false);
    }

    const handleShowPromotions = () =>{
        setShowUpload(false);
        setShowTracks(false);
        setShowInsights(false);
        setShowPromotions(true);
    }

    const handleShowBasicInfo = () =>{
        setShowBasicInfo(true);
        setShowMetadata(false);
        setShowPermissions(false);
        setShowMonitize(false);
    }

    const handleShowMetadata = () =>{
        setShowBasicInfo(false);
        setShowMetadata(true);
        setShowPermissions(false);
        setShowMonitize(false);
    }

    const handleShowPermissions = () =>{
        setShowBasicInfo(false);
        setShowMetadata(false);
        setShowPermissions(true);
        setShowMonitize(false);
    }

    const handleShowMonitize = () =>{
        setShowBasicInfo(false);
        setShowMetadata(false);
        setShowPermissions(false);
        setShowMonitize(true);
    }

    const handleDownloadsChange = (event) => {
        setCheckedDownloads(event.target.checked);
    };

    const handleCommentsChange = (event) => {
        setCheckedComments(event.target.checked);
    };

    const handleRepostsChange = (event) => {
        setCheckedReposts(event.target.checked);
    };

    const handleSharingChange = (event) => {
        setCheckedSharing(event.target.checked);
    };

    const addTag = () =>{
        if(tagInput !== ""){
            setTags([...tags, tagInput]);
            setTagInput("");
        }
    }

    const handleRemoveTag = (tag) =>{
        if ([...tags].includes(tag)) {
            const newTags = [...tags].filter(t => t !== tag);
            setTags([...newTags]);
        }
    }

    const handleTagInputChange = (e) =>{
        setTagInput(e.target.value);
    }

    return (
        <div style={{"marginTop": "60px", "padding": "30px"}}>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "width": "100%"}}>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around"}}>
                    <p className="p-3" style={{"borderBottom": showUpload && "2px solid #4CAF50", "cursor": "pointer"}} onClick={handleShowUpload}>Upload</p>
                    <p className="p-3" style={{"borderBottom": showInsights && "2px solid #4CAF50", "cursor": "pointer"}} onClick={handleShowInsights}>Mastering</p>
                    <p className="p-3" style={{"borderBottom": showTracks && "2px solid #4CAF50", "cursor": "pointer"}} onClick={handleShowTracks}>Your tracks</p>
                    <p className="p-3" style={{"borderBottom": showPromotions && "2px solid #4CAF50", "cursor": "pointer"}} onClick={handleShowPromotions}>Pro plans</p>
            </div>
                <div>
                    <p className="p-3"><i className="fa fa-external-link"></i> Creators help center</p>
                </div>
            </div>

            {showUpload && (
            <>
            {showSelectedUpload? (
            <>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-around"}}>
            <p className="p-3" style={{"borderBottom": showBasicInfo && "2px solid #4CAF50", "cursor": "pointer"}} onClick={handleShowBasicInfo}>Basic Info</p>
            <p className="p-3" style={{"borderBottom": showMetadata && "2px solid #4CAF50", "cursor": "pointer"}} onClick={handleShowMetadata}>Metadata</p>
            <p className="p-3" style={{"borderBottom": showPermissions && "2px solid #4CAF50", "cursor": "pointer"}} onClick={handleShowPermissions}>Permissions</p>
            <p className="p-3" style={{"borderBottom": showMonitize && "2px solid #4CAF50", "cursor": "pointer"}} onClick={handleShowMonitize}>Monitize</p>
            </div>

            {showBasicInfo && (
            <>
            <div className="p-3" style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "center"}}>
                <div className="p-1" style={{"width": "30%","display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    <img src="https://images.pexels.com/photos/12977998/pexels-photo-12977998.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="upload image" style={{"width": "80%", "height": "100%"}}/>
                    <div style={{"backgroundColor": "white", "borderRadius": 5, "textAlign": "center", 'position': "absolute", "bottom": 10, "left": '30%', "color": "#333", "padding": 5}}>
                        <i class="fa-solid fa-camera" style={{"marginRight": 5}}></i>
                        <span>Upload image</span>
                    </div>

        {/* <div className="Crop-Controls" style={{"marginBottom": "10px"}}>
        <input type="file" accept="image/*" onChange={onSelectFile} />
        <div className="mt-3">
          <label htmlFor="scale-input">Scale: </label>
          <input
            id="scale-input"
            type="number"
            step="0.1"
            value={scale}
            disabled={!imgSrc}
            onChange={(e) => setScale(Number(e.target.value))}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="rotate-input">Rotate: </label>
          <input
            id="rotate-input"
            type="number"
            value={rotate}
            disabled={!imgSrc}
            onChange={(e) =>
              setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
            }
          />
        </div>
        <div className="mt-3">
          <button onClick={handleToggleAspectClick} className="btn btn-outline-success">
            Toggle aspect {aspect ? 'off' : 'on'}
          </button>
        </div>
      </div>
      
      {Boolean(imgSrc) && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspect}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={imgSrc}
            style={{ transform: `scale(${scale}) rotate(${rotate}deg)`, "maxWidth": "100%" }}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}

      <div>
        {Boolean(completedCrop) && (
          <canvas
            ref={previewCanvasRef}
            style={{
              border: '1px solid black',
              objectFit: 'contain',
              width: completedCrop.width,
              height: completedCrop.height,
            }}
          />
        )}
      </div> */}

    </div>
                <div className="w-50 p-3">
                    <p>Title *</p>
                    <input type="text" className="form-control" placeholder="GILAD - SEMA MILELE (Official music video)"/>
                    <div className="p-1 mt-5" style={{"backgroundColor": "#f1f1f1", "borderRadius": "10px"}}>
                        <p>gustuni.co.ke/username/gilad-sema-milele-official-music-video <i className="fa fa-edit text-dark" style={{"marginLeft": "5px"}}></i></p>
                    </div>

                    <div className="form-group mt-5">
                    <label>Track Type</label>
                    <select className="form-control">
                        <option value="music">Music</option>
                    </select>
                    </div>

                    <div className="form-group mt-5">
                    <label>Genre</label>
                    <select className="form-control">
                        <option value="none">None</option>
                        <option value="custom">Custom</option>
                        <option className="font-weight-bold text-lg"><i class="fa-solid fa-arrows-rotate"></i> Recent</option>
                        <option value="gengetone">Gengetone</option>
                        <option className="font-weight-bold text-lg"><i class="fa-solid fa-arrows-rotate"></i> Music</option>
                        <option value="gengetone">Gengetone</option>
                        <option value="reggea">Reggea</option>
                        <option className="font-weight-bold" style={{"fontSize": 25}}><i class="fa-solid fa-arrows-rotate"></i> Audio</option>
                        <option value="comedy">Comedy</option>
                        <option value="sports">Sports</option>
                    </select>
                    </div>

                    <p className="mt-5">Hash Tags</p>
                    <div style={{"marginBottom": 10}}>
                    <div style={{"display": "flex", "alignItems": "center"}}>
                        {tags.length > 0 && (
                        <>
                        {tags.map((tag, index) => ( 
                                <div className="bg-success p-2 m-1 text-white" style={{"borderRadius": 10}} key={index}>
                                    {tag} <span onClick={() =>handleRemoveTag(tag)}>&times;</span>
                                </div>
                        ))}
                        </>
                        )}
                    </div>
                    </div>
                    <input type="text" className="form-control" placeholder="Tags describe the mood & genre of your track" value={tagInput} onChange={handleTagInputChange}/>
                    <button className="btn btn-outline-success mt-2" onClick={addTag}><i className="fa fa-plus"></i> Add</button>

                    <p className="mt-5">Description</p>
                    <textarea className="p-3" rows="3" cols="75" placeholder="Describe your track"></textarea>

                </div>

            </div>
            <hr />
                
                    <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}} className="p-3">
                        <p>* Required fields</p>
                        <div>
                            <button className="btn btn-outline-danger" style={{"marginRight": 5}}>Cancel</button>
                            <button className="btn btn-success">Next</button>
                        </div>
                    </div>
                    <p className="p-3">By uploading, you confirm that you sounds comply with our terms of use and you don't infringe anyone else's rights.</p>
            </>
            )}

            {showMetadata && (
            <>
             <div className="p-3" style={{"display": "flex", "justifyContent": "center"}}>
                <div style={{"width": '60%'}}>
                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start", "width": "100%"}} >

                    <div>
                        <p>Release title</p>
                        <input type="text" className="form-control"/>
                        <p>Composer</p>
                        <input type="text" className="form-control"/>
                    </div>
                    <div>
                        <p>Release date</p>
                        <input type="text" className="form-control"/>
                        <p>Record Label</p>
                        <input type="text" className="form-control"/>
                    </div>
                    <div>
                        <p>Producer</p>
                        <input type="text" className="form-control"/>
                        <p>Publisher</p>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <hr />
                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start", "width": "100%"}}>
                    <div>
                        <p>Album title</p>
                        <input type="text" className="form-control"/>
                        <p>Contains explicit content</p>
                        <input type="text" className="form-control"/>
                    </div>
                    <div>
                        <p>Playlist title</p>
                        <input type="text" className="form-control"/>
                    </div>
                    <div>
                        <p>Contains Music</p>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <hr />
                <div>
                    <label htmlFor="" style={{"marginRight": "10px"}}>License</label>
                    <input type="checkbox" checked style={{"marginRight": "5px"}}/>
                    <label htmlFor="" style={{"marginRight": "10px"}}>All rights reserved</label>
                    <input type="checkbox" style={{"marginRight": "5px"}}/>
                    <label htmlFor="">Creative commons</label>
                </div>
                <hr />
                
                <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "width": "100%"}}>
                    <p>* Required fields</p>
                    <div>
                        <button className="btn btn-outline-danger" style={{"marginRight": 5}}>Cancel</button>
                        <button className="btn btn-success">Next</button>
                    </div>
                </div>

                </div>
             </div>
             <p style={{"textAlign": "center", "marginTop": "20px"}}>By uploading, you confirm that you sounds comply with our terms of use and you don't infringe anyone else's rights.</p>
             </>
            )}

            {showPermissions && (
            <>
            <div style={{"display": "flex", "justifyContent": "center"}}>
            <div style={{"width": "60%"}}>
                <h4 className="text-dark">Control Access and Actions</h4>
                <br />
                <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "space-between"}}>
                    <div>
                        <div className="p-3">
                        <FormGroup>
                        <FormControlLabel control={<Switch checked={checkedDownloads} onChange={handleDownloadsChange}/>} label="Enable downloads" />
                        </FormGroup>
                        <p>This track will be available for download by Gustuni users</p>
                        <p><a href="#">Learn more</a></p>

                        {!checkedDownloads && (
                        <p style={{"color": "red"}}>Disabled downloads will limit your revenue options</p>
                        )}
                        </div>

                        <div className="p-3">
                        <FormGroup>
                        <FormControlLabel control={<Switch checked={checkedReposts} onChange={handleRepostsChange} />} label="Enable Repost" />
                        </FormGroup>
                        <p>This track will be available for download by Gustuni users</p>
                        <p><a href="#">Learn more</a></p>

                        {!checkedReposts && (
                        <p style={{"color": "red"}}>Disabled reposts will limit your revenue options</p>
                        )}
                        </div>

                    </div>

                    <div className="p-3">
                    <FormGroup>
                    <FormControlLabel control={<Switch checked={checkedComments} onChange={handleCommentsChange} />} label="Enable comments" />
                    </FormGroup>
                    <p>This track will be available for download by Gustuni users</p>
                    <p><a href="#">Learn more</a></p>

                    {!checkedComments && (
                        <p style={{"color": "red"}}>Disabled comments will limit your revenue options</p>
                    )}
                    </div>

                    <div className="p-3">
                    <FormGroup>
                    <FormControlLabel control={<Switch checked={checkedSharing} onChange={handleSharingChange} />} label="Enable sharing" />
                    </FormGroup>
                    <p>This track will be available for download by Gustuni users</p>
                    <p><a href="#">Learn more</a></p>

                    {!checkedSharing && (
                        <p style={{"color": "red"}}>Disabled sharing will limit your revenue options</p>
                    )}
                    </div>

                </div>
                <hr />
                
                <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                    <p>* Required fields</p>
                    <div>
                        <button className="btn btn-outline-danger" style={{"marginRight": 5}}>Cancel</button>
                        <button className="btn btn-success">Next</button>
                    </div>
                </div>
            </div>
            </div>
            <p style={{"textAlign": "center", "marginTop": "20px"}}>By uploading, you confirm that you sounds comply with our terms of use and you don't infringe anyone else's rights.</p>
            </>
            )}

            {showMonitize && (
            <>
            <div style={{"display": "flex", "justifyContent": "center"}}>
            <div style={{"width": "60%"}}>
            <div className="mb-5">
                <p>Skiza</p>
                <input type="text" className="form-control"/>
                <p>Buy Link</p>
                <input type="text" className="form-control"/>
            </div>
            <hr />
                
                <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                    <p>* Required fields</p>
                    <div>
                        <button className="btn btn-outline-danger" style={{"marginRight": 5}}>Cancel</button>
                        <button className="btn btn-success">Next</button>
                    </div>
                </div>
            </div>
            </div>
            <p style={{"textAlign": "center", "marginTop": "20px"}}>By uploading, you confirm that you sounds comply with our terms of use and you don't infringe anyone else's rights.</p>
            </>
            )}
            </>
            )
            : 
            (
            <div style={{"padding": "20px", "display": "flex", "alignItems": "center", "justifyContent": "center"}} className="w-100 mt-5">
                <div style={{"border": "2px solid #f1f1f1", "padding": "20px"}} className="w-50">
                <h4 className="text-dark p-3">Drag and Drop your Tracks and Albums here.</h4>
                <div style={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <button className="btn btn-success m-1" onClick={() => setShowSelectedUpload(true)}>or choose files to upload</button>
                </div>
                <div className="p-3" style={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    <input type="checkbox" style={{"marginRight": 5}} checked/> <label htmlFor=""> Make a playlist or album when multiple files are selected</label>
                </div>
                <div className="p-1 mt-1" style={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    <label htmlFor="" style={{"marginRight": 5}}>Privacy: </label>
                    <input type="radio" style={{"marginRight": 5}} checked/>
                    <label htmlFor="" style={{"marginRight": 5}}> Public</label>
                    <input type="radio" style={{"marginRight": 5}} />
                    <label htmlFor=""> Private</label>
                </div>
                </div>
            </div>
            )}
            </>
            )}

            {showTracks && (
                <div style={{"padding": "20px"}}>
                    <h3 className="text-dark">Your tracks</h3>
                    <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "width": "100%"}}>
                        <div>
                            <p style={{"textAlign": "center"}} className="font-weight-bold">Seems a little quiet over here</p>
                            <p style={{"textAlign": "center"}} className="text-primary">Upload a track to share it with your followers.</p>
                        </div>
                    </div>
                </div>
            )}

            {showInsights && (
                <div>
                    <div style={{"display": "flex", "justifyContent": "space-around","backgroundImage": "url('https://a-v2.sndcdn.com/assets/images/mastering-hero-bg-43b50c47.jpg')", "padding": "20px", "position": "relative", "height": "100vh", "alignItems": "center", "backgroundPosition": "center", "backgroundRepeat": "repeat"}}>
                        <div style={{"width": "50%", "padding": "20px"}}>
                            <h1 className="text-white font-weight-bold" style={{"fontSize": 35}}>MASTERING ON GUSTUNI</h1>
                            <h5 className="text-white mt-5" style={{"fontSize": 23}}>For a fraction of the cost, get your tracks release-ready for streaming platforms without ever leaving your SoundCloud account.</h5>
                            <button className="btn btn-success btn-lg mt-5">Get Started</button>
                        </div>
                        <div style={{"width": "50%", "padding": "20px"}}>
                        <img src="https://a-v2.sndcdn.com/assets/images/mastering-hero-c259960d.jpg" alt="" width={500} height={400} />
                        </div>


                    <div style={{"position": "absolute","top": "85%"}}>
                    <div style={{"display": "flex", "justifyContent": "space-around", "alignItems": "flex-start"}}>
                    <div style={{"width": "350px", "margin": 10}}>    
                    <div style={{"backgroundColor": "white", "padding": "15px", "width": "100%", "border": "1px solid #f1f1f1"}}>
                            <img src="https://a-v2.sndcdn.com/assets/images/box1-abcb89ae.jpg" alt="" width="100%" height="100%" />
                        </div>
                        <div>
                            <h4 className="text-dark mt-5">Mastering technology built into your workflow</h4>
                            <p className="mt-3">As the last step of your upload flow, you can make any track release-ready in minutes for one low cost per master</p>
                        </div>
                        
                    </div>

                    <div style={{"width": "350px", "margin": 10}}>
                        <div style={{"backgroundColor": "white", "padding": "15px", "width": "100%","border": "1px solid #f1f1f1"}}>
                            <img src="https://a-v2.sndcdn.com/assets/images/box2-01f1d053.jpg" alt="" width="100%" height="100%" />
                        </div>    
                        <div>
                            <h4 className="text-dark mt-5">Optimized loudness and enhanced sonic quality</h4>
                            <p className="mt-3">Pick from a custom suite of mastering styles that sculpt your song’s tonal balance and dynamic range while preserving its original intent. Mastering optimizes your songs specifically for streaming platforms *</p>
                        </div>
                                      
                    </div>

                    <div style={{"width": "350px", "margin": 10}}>
                        <div style={{"backgroundColor": "white", "padding": "15px", "border": "1px solid #f1f1f1", "width": "100%"}}>
                            <img src="https://a-v2.sndcdn.com/assets/images/box3-a3134313.jpg" alt="" width="100%" height="100%" />
                        </div>
                        <div>
                            <h4 className="text-dark mt-5">Music you can release with confidence</h4>
                            <p className="mt-3">With Dolby’s technology merging art x science to deliver professional-sounding results, your work will be ready to be heard by the world</p>
                        </div>
                    </div>

                    </div>

                    <div style={{"padding": 45, "margin": 10, "width": "70%"}}>
                        <h3 className="text-black">Hearing is believing</h3>
                        <p className="mt-3">Dolby has perfected its mastering technology through thousands of hours of music analysis and by working with professional engineers to replicate their process. By critically listening to your music the way an engineer does – identifying the details, the unique sections, and musical transitions that give your song its unique story arc – the audio technology preserves your original intent while delivering a final track that sounds wide, powerful and ready for streaming playback where it goes. This technology is specifically for tracks distributed to streaming platforms.</p>
                        <p>* Non-streaming use cases may cause volume softening.</p>
                    </div>

                    <div style={{"padding": 20, "margin": 10, "display": "flex", "justifyContent": "space-between", "alignItems": "flex-start"}}>
                        <div className="w-50 p-5">
                        <h3 className="text-dark">Master tracks with Pro Unlimited</h3>
                        <p>In addition to unlimited uploads, full stats, and tools to grow your audience, Pro Unlimited subscribers get 3 free masters every month and the option to purchase additional ones for a discounted price of $3.99 each.</p>
                        <button className="btn btn-outline-success btn-lg">Try Pro Unlimited</button>
                        <p className="mt-5">For more information on mastering, supported formats and available styles, please visit our Help Center</p>
                        </div>
                        <div className="w-50 p-5">
                            <img src="https://a-v2.sndcdn.com/assets/images/upsell-image-6c4f5a10.jpg" alt="" width="70%" height="70%" />
                        </div>
                    </div>


                    </div>

                    </div>

                    

                </div>
            )}

            {showPromotions && (
                <div>
                    Promotions
                </div>
            )}
        </div>
    )
}

export default Upload;