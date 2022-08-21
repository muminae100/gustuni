import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer";
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { green, red, blue } from "@mui/material/colors";
import PauseIcon from "@mui/icons-material/Pause";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4"
];

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    minWidth: 240,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    width: "100%"
  },
  list: {
    padding: 0
  },
  listItem: {
    //paddingBottom: 0
  },
  buttons: {
    padding: theme.spacing(1)
  },
  controls: {
    minWidth: "100px"
  },
  icon: {
    height: 18,
    width: 18
  },
  avatar: {
    display: "inline-block"
  }
}));
/*
avatar username ostalo layout sa grid

*/
function AudioPlayer({ file }) {
  const wavesurfer = useRef(null);

  const [playerReady, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const wavesurferId = `wavesurfer--${uuidv4()}`;

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: `#${wavesurferId}`,
      waveColor: "grey",
      progressColor: "tomato",
      height: 70,
      cursorWidth: 1,
      cursorColor: "lightgray",
      barWidth: 2,
      normalize: true,
      responsive: true,
      fillParent: true
    });

    const wav = require("https://uploads.codesandbox.io/uploads/user/3c85e264-7497-4c1d-8752-da7f9cbb4870/fXPJ-12346%203203.ogg");

    // console.log("wav", wav);
    wavesurfer.current.load(wav);

    wavesurfer.current.on("ready", () => {
      setPlayerReady(true);
    });

    const handleResize = wavesurfer.current.util.debounce(() => {
      wavesurfer.current.empty();
      wavesurfer.current.drawBuffer();
    }, 150);

    wavesurfer.current.on("play", () => setIsPlaying(true));
    wavesurfer.current.on("pause", () => setIsPlaying(false));
    window.addEventListener("resize", handleResize, false);
  }, []);

  useEffect(() => {
    console.log("file", file);
    if (file) {
      wavesurfer.current.load(file.blobURL);
    }
  }, [file]);

  const togglePlayback = () => {
    if (!isPlaying) {
      wavesurfer.current.play();
    } else {
      wavesurfer.current.pause();
    }
  };

  const stopPlayback = () => wavesurfer.current.stop();

  const classes = useStyles();

  let transportPlayButton;

  if (!isPlaying) {
    transportPlayButton = (
      <IconButton onClick={togglePlayback}>
        <PlayArrowIcon className={classes.icon} />
      </IconButton>
    );
  } else {
    transportPlayButton = (
      <IconButton onClick={togglePlayback}>
        <PauseIcon className={classes.icon} />
      </IconButton>
    );
  }

  return (
    <>
      <Card className={classes.card}>
        <Grid container direction="column">
          <Grid item>
            <List className={classes.list}>
              <ListItem alignItems="flex-start" className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar} src={faces[0]} />
                </ListItemAvatar>
                <ListItemText
                  primary="Username"
                  secondary="@username · 11h ago"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item id={wavesurferId} />
          <Grid item container className={classes.buttons}>
            <Grid item xs={5}>
              {transportPlayButton}
              <IconButton onClick={stopPlayback}>
                <StopIcon className={classes.icon} />
              </IconButton>
            </Grid>
            <Grid item xs={7} container justify="space-around">
              <Grid item>
                <IconButton>
                  <FavoriteIcon
                    style={{ color: blue[500] }}
                    className={classes.icon}
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <ShareIcon
                    style={{ color: red[500] }}
                    className={classes.icon}
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <ChatBubbleIcon
                    style={{ color: green[500] }}
                    className={classes.icon}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default AudioPlayer;
