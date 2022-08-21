import pimg4 from "../assets/images/pimg4.jpg";
import mpcready from "../assets/images/mpcready.jpg";
import reason from "../assets/images/reason.jpg";
import flimg from "../assets/images/flimg.jfif";
import logic from "../assets/images/logic.png";
import ableton from "../assets/images/ableton.jpg";
import {
    useCallback,
    useEffect,
    useRef,
    useState,
    useMemo
  } from "react";
import styled from "styled-components";
import { WaveSurfer, WaveForm, Region, Marker } from "wavesurfer-react";
import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min";
import MarkersPlugin from "wavesurfer.js/src/plugin/markers";



const Buttons = styled.div`
  display: inline-block;
`;

const Button = styled.button``;

/**
 * @param min
 * @param max
 * @returns {*}
 */
function generateNum(min, max) {
  return Math.random() * (max - min + 1) + min;
}

/**
 * @param distance
 * @param min
 * @param max
 * @returns {([*, *]|[*, *])|*[]}
 */
function generateTwoNumsWithDistance(distance, min, max) {
  const num1 = generateNum(min, max);
  const num2 = generateNum(min, max);
  // if num2 - num1 < 10
  if (num2 - num1 >= 10) {
    return [num1, num2];
  }
  return generateTwoNumsWithDistance(distance, min, max);
}


const Bundles = () =>{
  const [timelineVis, setTimelineVis] = useState(true);

  const [markers, setMarkers] = useState([
    {
      time: 5.5,
      label: "V1",
      color: "#ff990a",
      draggable: true
    },
    {
      time: 10,
      label: "V2",
      color: "#00ffcc",
      position: "top"
    }
  ]);

  const plugins = useMemo(() => {
    return [
      {
        plugin: RegionsPlugin,
        options: { dragSelection: true }
      },
      timelineVis && {
        plugin: TimelinePlugin,
        options: {
          container: "#timeline"
        }
      },
      {
        plugin: MarkersPlugin,
        options: {
          markers: [{ draggable: true }]
        }
      }
    ].filter(Boolean);
  }, [timelineVis]);

  const toggleTimeline = useCallback(() => {
    setTimelineVis(!timelineVis);
  }, [timelineVis]);

  const [regions, setRegions] = useState([
    {
      id: "region-1",
      start: 0.5,
      end: 10,
      color: "rgba(0, 0, 0, .5)",
      data: {
        systemRegionId: 31
      }
    },
    {
      id: "region-2",
      start: 5,
      end: 25,
      color: "rgba(225, 195, 100, .5)",
      data: {
        systemRegionId: 32
      }
    },
    {
      id: "region-3",
      start: 15,
      end: 35,
      color: "rgba(25, 95, 195, .5)",
      data: {
        systemRegionId: 33
      }
    }
  ]);

  // use regions ref to pass it inside useCallback
  // so it will use always the most fresh version of regions list
  const regionsRef = useRef(regions);

  useEffect(() => {
    regionsRef.current = regions;
  }, [regions]);

  const regionCreatedHandler = useCallback(
    (region) => {
      console.log("region-created --> region:", region);

      if (region.data.systemRegionId) return;

      setRegions([
        ...regionsRef.current,
        { ...region, data: { ...region.data, systemRegionId: -1 } }
      ]);
    },
    [regionsRef]
  );

  const wavesurferRef = useRef();
  const handleWSMount = useCallback(
    (waveSurfer) => {
      if (waveSurfer.markers) {
        waveSurfer.clearMarkers();
      }

      wavesurferRef.current = waveSurfer;

      if (wavesurferRef.current) {
        wavesurferRef.current.load("http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3");

        wavesurferRef.current.on("region-created", regionCreatedHandler);

        wavesurferRef.current.on("ready", () => {
          console.log("WaveSurfer is ready");
        });

        wavesurferRef.current.on("region-removed", (region) => {
          console.log("region-removed --> ", region);
        });

        wavesurferRef.current.on("loading", (data) => {
          console.log("loading --> ", data);
        });

        if (window) {
          window.surferidze = wavesurferRef.current;
        }
      }
    },
    [regionCreatedHandler]
  );

  const generateRegion = useCallback(() => {
    if (!wavesurferRef.current) return;
    const minTimestampInSeconds = 0;
    const maxTimestampInSeconds = wavesurferRef.current.getDuration();
    const distance = generateNum(0, 10);
    const [min, max] = generateTwoNumsWithDistance(
      distance,
      minTimestampInSeconds,
      maxTimestampInSeconds
    );

    const r = generateNum(0, 255);
    const g = generateNum(0, 255);
    const b = generateNum(0, 255);

    setRegions([
      ...regions,
      {
        id: `custom-${generateNum(0, 9999)}`,
        start: min,
        end: max,
        color: `rgba(${r}, ${g}, ${b}, 0.5)`
      }
    ]);
  }, [regions, wavesurferRef]);
  const generateMarker = useCallback(() => {
    if (!wavesurferRef.current) return;
    const minTimestampInSeconds = 0;
    const maxTimestampInSeconds = wavesurferRef.current.getDuration();
    const distance = generateNum(0, 10);
    const [min] = generateTwoNumsWithDistance(
      distance,
      minTimestampInSeconds,
      maxTimestampInSeconds
    );

    const r = generateNum(0, 255);
    const g = generateNum(0, 255);
    const b = generateNum(0, 255);

    setMarkers([
      ...markers,
      {
        label: `custom-${generateNum(0, 9999)}`,
        time: min,
        color: `rgba(${r}, ${g}, ${b}, 0.5)`
      }
    ]);
  }, [markers, wavesurferRef]);

  const removeLastRegion = useCallback(() => {
    let nextRegions = [...regions];

    nextRegions.pop();

    setRegions(nextRegions);
  }, [regions]);
  const removeLastMarker = useCallback(() => {
    let nextMarkers = [...markers];

    nextMarkers.pop();

    setMarkers(nextMarkers);
  }, [markers]);

  const shuffleLastMarker = useCallback(() => {
    setMarkers((prev) => {
      const next = [...prev];
      let lastIndex = next.length - 1;

      const minTimestampInSeconds = 0;
      const maxTimestampInSeconds = wavesurferRef.current.getDuration();
      const distance = generateNum(0, 10);
      const [min] = generateTwoNumsWithDistance(
        distance,
        minTimestampInSeconds,
        maxTimestampInSeconds
      );

      next[lastIndex] = {
        ...next[lastIndex],
        time: min
      };

      return next;
    });
  }, []);

  const play = useCallback(() => {
    wavesurferRef.current.playPause();
  }, []);

  const handleRegionUpdate = useCallback((region, smth) => {
    console.log("region-update-end --> region:", region);
    console.log(smth);
  }, []);

    return (
        <>
        {/* <!-- bundle section begins here --> */}
    <div className="container-fluid px-0 bg-dark" style={{"marginTop": "60px"}}>

        {/* <!-- Banner section begins here --> */}
        <div className="container-fluid m-0 p-0 position-relative bg-dark" style={{"height": "auto"}}>
            {/* <!-- image and details row --> */}
            <div className="row mx-0 py-4 px-0">
                {/* <!-- image container --> */}
                <div className="col-lg-6 col-12 position-relative d-flex align-items-center">
                    {/* <!-- image --> */}
                    <img src={pimg4} alt="#" width="300px" height="300px" className="#" />
                </div>

                {/* <!-- details container --> */}
                <div className="col-lg-6 col-12 position-relative">
                    {/* <!-- Bundle Name --> */}
                    <span className="h5 d-block text-start text-white">Bundle Name</span>
                    {/* <!-- Bundle price --> */}
                    <span className="h6 d-block text-white text-start">KSH 3500</span>
                    
                    {/* <!-- angle down --> */}
                    <a href="#overview" className="text-white d-block text-center">
                        <i className="fas fa-angle-down"></i>
                    </a>

                    {/* <!-- product list container --> */}
                    <ul className="text-white ms-0 ps-0 mt-5">
                        <li className="ms-0 ps-0 d-flex justify-content-between" style={{"listStyleType": "none"}}>
                            {/* <!-- Pack Name --> */}
                            <span className="h6 text-start">Pack Name</span>

                            {/* <!-- Price --> */}
                            <span className="h6 text-start">KSH 1700</span>
                        </li>
                        <li className="ms-0 ps-0 d-flex justify-content-between" style={{"listStyleType": "none"}}>
                            {/* <!-- Pack Name --> */}
                            <span className="h6 text-start">Pack Name</span>

                            {/* <!-- Price --> */}
                            <span className="h6 text-start">KSH 2500</span>
                        </li>
                    </ul>
                    <hr />

                    {/* <!-- Total value & Discount price --> */}
                    <ul className="text-white ms-0 ps-0 mt-3">
                        <li className="ms-0 ps-0 d-flex justify-content-between" style={{"listStyleType": "none"}}>
                            {/* <!-- Total value --> */}
                            <span className="h6 text-start text-uppercase">Total value</span>

                            {/* <!-- Price --> */}
                            <span className="h6 text-start text-decoration-line-through">KSH 4200</span>
                        </li>
                        <li className="ms-0 ps-0 d-flex justify-content-between text-danger" style={{"listStyleType": "none"}}>
                            {/* <!-- Discount price --> */}
                            <span className="h6 text-start text-uppercase">Discount price</span>

                            {/* <!-- Price --> */}
                            <span className="h6 text-start">KSH 3500</span>
                        </li>
                    </ul>
                    <hr />

                </div>
            </div>

            {/* <!-- special-price and add to cart row --> */}
            <div className="row mx-0 px-0 py-3">
                {/* <!-- Prices --> */}
                <span className="d-block h6 text-white text-center">
                    {/* <!-- total price --> */}
                    <span className="text-decoration-line-through">KSH 4200</span>

                    {/* <!-- discounted price --> */}
                    <span className="ms-2 text-danger">KSH 3500</span>
                </span>

                {/* <!-- Special Prices --> */}
                <span className="d-block h6 text-white text-center text-uppercase">
                    Special Price
                </span>

                {/* <!-- add to cart --> */}
                <span className="d-block text-center my-3">
                    <button className="btn btn-success btn-sm" style={{"width": "150px"}}>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="ms-1 text-uppercase">Add to cart</span>
                    </button>
                </span>
            </div>
            
        </div>
        {/* <!-- Banner section ends here --> */}

        {/* <!-- overview section begins here --> */}
        <div className="container-fluid m-0 px-0 py-3 position-relative bg-dark" id="overview">
            {/* <!-- heading --> */}
            <span className="d-block d-flex justify-content-center">
                <span className="text-white h5 text-center py-3" style={{"width":"210px", "borderTop": "1px solid rgb(159, 157, 157)"}}>
                    Overview
                </span>
            </span>

            {/* <!-- overview item --> */}
            <div className="row mx-0 px-0">
                {/* <!-- image --> */}
                <div className="col-lg-6 col-12">
                    <img src={pimg4} alt="#" width="240px" height="240px" className="#" />
                </div>

                {/* <!-- details container --> */}
                <div className="col-lg-6 col-12">
                    {/* <!-- overall container --> */}
                    <div className="container-fluid mx-0 px-0 my-0 py-0" style={{"backgroundColor": "#525252"}}>
                        {/* <!-- white strip --> */}
                        <span className="d-block m-0 p-0 bg-light" style={{"height": "2px", "maxWidth": "100%"}}></span>
                        {/* <!-- header --> */}
                        <span className="d-block py-3 text-white row text-center text-sm-center">
                            {/* <!-- Pack Name --> */}
                            <span className="h6">
                                Pack Name
                            </span>

                            {/* <!-- value price --> */}
                            <span className="h6 d-block text-warning text-uppercase" style={{"fontSize": "14px"}}>
                                KSH 1700 value
                            </span>
                        </span>

                        {/* <!-- white strip --> */}
                        <span className="d-block m-0 ms-2 px-0 bg-light" style={{"height": ".5px", "maxWidth": "6%", "backgroundColor": "#d8d8d8"}}></span>

                        {/* <!-- Description --> */}
                        <p className="ms-2 py-3" style={{"color": "#ccc", "fontSize": "13px", "maxHeight": "180px"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum dolores perferendis qui pariatur voluptates, porro temporibus, corporis vero culpa consectetur magnam optio doloremque.
                        </p>

                        {/* <!-- container for wavesurfer --> */}
                        <div id="waveform">
                        <WaveSurfer plugins={plugins} onMount={handleWSMount}>
                        <WaveForm id="waveform" cursorColor="transparent">
                        {regions.map((regionProps) => (
                            <Region
                            onUpdateEnd={handleRegionUpdate}
                            key={regionProps.id}
                            {...regionProps}
                            />
                        ))}
                        {markers.map((marker, index) => {
                            return (
                            <Marker
                                key={index}
                                {...marker}
                                onClick={(...args) => {
                                console.log("onClick", ...args);
                                }}
                                onDrag={(...args) => {
                                console.log("onDrag", ...args);
                                }}
                                onDrop={(...args) => {
                                console.log("onDrop", ...args);
                                }}
                            />
                            );
                        })}
                        </WaveForm>
                        <div id="timeline" />
                    </WaveSurfer>
                    <Buttons>
                        <Button onClick={generateRegion}>Generate region</Button>
                        <Button onClick={generateMarker}>Generte Marker</Button>
                        <Button onClick={play}>Play / Pause</Button>
                        <Button onClick={removeLastRegion}>Remove last region</Button>
                        <Button onClick={removeLastMarker}>Remove last marker</Button>
                        <Button onClick={shuffleLastMarker}>Shuffle last marker</Button>
                        <Button onClick={toggleTimeline}>Toggle timeline</Button>
                    </Buttons>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- overview section ends here --> */}

        {/* <!-- Total files included section begins here --> */}
        <div className="container-fluid m-0 px-0 py-3 position-relative bg-dark">
            {/* <!-- heading --> */}
            <span className="d-block d-flex justify-content-center">
                <span className="text-white h5 text-center py-3" style={{"width":"210px", "borderTop": "1px solid rgb(159, 157, 157)"}}>
                    Total Files Included
                </span>
            </span>

            {/* <!-- banner image container --> */}
            <div className="container-fluid m-0 p-0">
                <img src={pimg4} alt="Pack Name" width="100%" height="180px" />
            </div>

            {/* <!-- overall container --> */}
            <div className="container-fluid mx-0 p-3 my-0" style={{"backgroundColor": "#525252"}}>
                {/* <!-- heading for table --> */}
                <div className="row d-flex align-items-center mb-2 p-1 bg-dark">
                    {/* <!-- category --> */}
                    <span className="text-white h6 text-uppercase col-lg-4 col-12">Category</span>

                    {/* <!-- Amount --> */}
                    <span className="text-white h6 text-uppercase col-lg-4 col-12 d-none d-lg-block">Amount</span>

                    {/* <!-- Format --> */}
                    <span className="text-white h6 text-uppercase col-lg-4 col-12 d-none d-lg-block">Format</span>
                </div>

                {/* <!-- container for table items --> */}
                <div className="row mb-2 py-2 d-flex align-items-center" style={{"backgroundColor": "#333333"}}>
                    {/* <!-- Pack Name --> */}
                    <span className="text-white h6 text-uppercase col-lg-4 col-12">Pack Name</span>

                    {/* <!-- Number --> */}
                    <span className="text-white h6 text-uppercase col-lg-4 col-12 d-none d-lg-block">40</span>

                    {/* <!-- Format --> */}
                    <span className="text-white h6 text-uppercase col-lg-4 col-12 d-none d-lg-block">.WAV</span>
                </div>

                {/* <!-- container for table items --> */}
                <div className="row mb-2 py-2 d-flex align-items-center" style={{"backgroundColor": "#333333"}}>
                    {/* <!-- Pack Name --> */}
                    <span className="text-white h6 text-uppercase col-lg-4 col-12">Pack Name</span>

                    {/* <!-- Number --> */}
                    <span className="text-white h6 text-uppercase col-lg-4 col-12 d-none d-lg-block">40</span>

                    {/* <!-- Format --> */}
                    <span className="text-white h6 text-uppercase col-lg-4 col-12 d-none d-lg-block">.WAV</span>
                </div>
            </div>


        </div>
        {/* <!-- Total files included section ends here --> */}

        {/* <!-- Works with your favorite DAW section begins here --> */}
        <div className="container-fluid m-0 px-0 py-3 position-relative bg-dark">
            {/* <!-- heading --> */}
            <span className="d-block d-flex justify-content-center">
                <span className="text-white h5 text-center py-3" style={{"width": "360px", "borderTop": "1px solid rgb(159, 157, 157)"}}>
                    Works with your favorite software/sampler:
                </span>
            </span>
            {/* <!-- Row container for the DAW/smapler --> */}
            <div className="row">
                <div className="col-3">
                    <img src={flimg} alt="FL Studio" height="120px" width="120px" />
                   
                </div>

                <div className="col-3">
                    <img src={ableton} alt="abletonon" height="120px" width="120px" />
                   
                </div>

                <div className="col-3">
                    <img src={logic} alt="logic" height="120px" width="120px" />
                  
                </div>

                <div className="col-3">
                    <img src={reason} alt="Reason" height="120px" width="120px" />
                    
                </div>

                <div className="col-3">
                    <img src={mpcready} alt="MPC" height="120px" width="120px" />
                   
                </div>
            </div>
        </div>
        {/* <!-- Works with your favorite DAW section begins here --> */}

    </div>
    {/* <!-- bundle section ends here --> */}

        </>
    )
}

export default Bundles;