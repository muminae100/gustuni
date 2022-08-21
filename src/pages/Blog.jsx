import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const itemData = [
    {
      img: 'https://images.pexels.com/photos/5047415/pexels-photo-5047415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas',
      rows: 2,
      cols: 2,
      author: 'Armenia Vena'
    },
    {
      img: 'https://images.pexels.com/photos/6497794/pexels-photo-6497794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas',
      cols: 2,
      author: 'Armenia Vena'
    },
    {
      img: 'https://images.pexels.com/photos/1587036/pexels-photo-1587036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas',
      author: 'Armenia Vena'
    },
    {
      img: 'https://images.pexels.com/photos/956722/pexels-photo-956722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas',
      author: 'Armenia Vena'
    }
  ];

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format` ,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

const Blog = () =>{
    return (
        <>
        <Box sx={{ width: '100%', mt: 8, p:1 }}>
        <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center" 
        spacing={2}>
        <Button variant="text" sx={{borderBottom: "2px solid", borderColor: "black", color: "black"}}>NEWS</Button>
        <Button variant="text" endIcon={<ArrowDropDownIcon />} sx={{color: "black"}}>FASHION</Button>
        <Button variant="text" endIcon={<ArrowDropDownIcon />} sx={{color: "black"}}>GADGETS</Button>
        <Button variant="text" endIcon={<ArrowDropDownIcon />} sx={{color: "black"}}>LIFESTYLE</Button>
        <Button variant="text" endIcon={<ArrowDropDownIcon />} sx={{color: "black"}}>VIDEO</Button>
        <Button variant="text" endIcon={<ArrowDropDownIcon />} sx={{color: "black"}}>FEATURES</Button>
        <Button variant="text" endIcon={<ArrowDropDownIcon />} sx={{color: "black"}}>HOMEPAGES</Button>
        </Stack>
        <Divider />
        </Box>
        <Box sx={{ width: '100%', p:1 }}> 
        <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center" 
        spacing={2}>
        <Button variant="contained" sx={{bgcolor: "#333"}}>TRENDING NOW</Button>
        <Typography variant="body1">
            Designer fashion show kicks off Variety Week
        </Typography>
        </Stack>
        </Box>

        <Box sx={{ width: '100%', p:1 }}>
        <ImageList
        sx={{ width: "100%" }}
        variant="quilted"
        cols={4}
        rowHeight={200}
        >
        {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                style={{"objectFit": "cover"}}
                alt={item.title}
                loading="lazy"
            />
            <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                >
                    <InfoIcon />
                </IconButton>
                }
            />
            </ImageListItem>
        ))}
        </ImageList>
        </Box>


        <Box sx={{ width: '100%', p:1 }}>
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start" 
        spacing={2}>
        <Box sx={{ width: '100%', p:1 }}>
        <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center" 
        spacing={2}>
        <Button variant="contained" sx={{bgcolor: "orange"}} disableElevation>DON'T MISS</Button>
        <Button variant="text" sx={{color: "black"}}>All</Button>
        <Button variant="text" sx={{color: "black"}}>Style hunter</Button>
        <Button variant="text" sx={{color: "black"}}>Vogue</Button>
        <Button variant="text" sx={{color: "black"}}>Health & Fitness</Button>
        <Button variant="text" sx={{color: "black"}}>Travel</Button>
        <Button variant="text" sx={{color: "black"}}>Gadgets</Button>
        <Button variant="text" sx={{color: "black"}} endIcon={<ArrowDropDownIcon />}>More</Button>
        </Stack>
        <Divider sx={{color: "orange", border: "2px solid"}}/>
        <Box sx={{mt: 2}}>
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start" 
        spacing={2}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="250"
            image="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="body1">
            <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas
            </strong>
            </Typography>
            <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center" 
            spacing={2}
            mt={2}
            mb={2}
            >
            <Typography variant="body1">
              <strong>John Doe</strong> Feb, 26 2017
            </Typography>
            <FeedbackIcon />
            </Stack>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
        <div>
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start" 
        spacing={2}
        sx={{p: 2, m: 1}}
        >
        <img
         height={100}
         width={100} 
         style={{"objectFit": "cover"}}
         src="https://images.pexels.com/photos/9320450/pexels-photo-9320450.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image1" />
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Feb 25, 2017</p>
        </div>
        </Stack>
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start" 
        spacing={2}
        sx={{p: 2, m: 1}}
        >
        <img
         height={100}
         width={100} 
         style={{"objectFit": "cover"}}
         src="https://images.pexels.com/photos/9897446/pexels-photo-9897446.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image1" />
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Feb 25, 2017</p>
        </div>
        </Stack>
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start" 
        spacing={2}
        sx={{p: 2, m: 1}}
        >
        <img
         height={100}
         width={100} 
         style={{"objectFit": "cover"}}
         src="https://images.pexels.com/photos/12557625/pexels-photo-12557625.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image1" />
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Feb 25, 2017</p>
        </div>
        </Stack>

        </div>
        
        </Stack>
        </Box>
        </Box>


        <Box sx={{ p: 1, width: '50%' }}>
        <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center" 
            spacing={2}
            >
            <Box sx={{ width: '100%', p:1 }}>
            <Button variant="contained" sx={{bgcolor: "black"}} disableElevation>STAY CONNECTED</Button>
            <Divider sx={{color: "#333", border: "2px solid"}}/>
            </Box>
            <Box sx={{ width: '100%', p:1 }}>
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center" 
                spacing={2}
                >
                <div>
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center" 
                spacing={2}
                m={1}
                >
                <FacebookIcon sx={{color: "#1976D2"}}/>
                <Typography>16,193 Fans</Typography>
                </Stack>
                </div>
                <div>
                    <Typography>Like</Typography>
                </div>
                </Stack>

                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center" 
                spacing={2}
                >
                <div>
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center" 
                spacing={2}
                m={1}
                >
                <TwitterIcon sx={{color: "#5bc0de"}}/>
                <Typography>1,594 Followers</Typography>
                </Stack>
                </div>
                <div>
                <Typography>Follow</Typography>
                </div>
                </Stack>

                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center" 
                spacing={2}
                >
                <div>
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center" 
                spacing={2}
                m={1}
                >
                <YouTubeIcon sx={{color: "#FF5252"}}/>
                <Typography>13,039 Subscribers</Typography>
                </Stack>
                </div>
                <div>
                <Typography>Subscribe</Typography>
                </div>
                </Stack>

            </Box>
            <Box>
                <Typography>
                    <em>Advertisement</em>
                </Typography>
                <img width="100%" src="https://sixads.net/blog/advertisement-examples/?gen=fb.jpg" alt="advert" />
            </Box>
        </Stack>
        </Box>


        </Stack>
        </Box>


        <Box sx={{ width: '100%', p:1 }}>
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start" 
        spacing={2}>
        <Box sx={{ width: '100%', p:1 }}>
        <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center" 
        spacing={2}>
        <Button variant="contained" sx={{bgcolor: "#4CAF50"}} disableElevation>LIFESTYLE NEWS</Button>
        <Button variant="text" sx={{color: "black"}}>All</Button>
        <Button variant="text" sx={{color: "black"}}>Travel</Button>
        <Button variant="text" sx={{color: "black"}}>Recipes</Button>
        <Button variant="text" sx={{color: "black"}}>Health & Fitness</Button>
        <Button variant="text" sx={{color: "black"}}>Business</Button>
        </Stack>
        <Divider sx={{color: "#4CAF50", border: "2px solid"}}/>

        <Box sx={{mt: 2}}>
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center" 
        spacing={2}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="250"
            image="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="body1">
            <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas
            </strong>
            </Typography>
            <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center" 
            spacing={2}
            mt={2}
            mb={2}
            >
            <Typography variant="body1">
              <strong>John Doe</strong> Feb, 26 2017
            </Typography>
            <FeedbackIcon />
            </Stack>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>

        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="250"
            image="https://images.pexels.com/photos/12227831/pexels-photo-12227831.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="body1">
            <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas
            </strong>
            </Typography>
            <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center" 
            spacing={2}
            mt={2}
            mb={2}
            >
            <Typography variant="body1">
              <strong>John Doe</strong> Feb, 26 2017
            </Typography>
            <FeedbackIcon />
            </Stack>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>

        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="250"
            image="https://images.pexels.com/photos/3723034/pexels-photo-3723034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="body1">
            <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas
            </strong>
            </Typography>
            <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center" 
            spacing={2}
            mt={2}
            mb={2}
            >
            <Typography variant="body1">
              <strong>John Doe</strong> Feb, 26 2017
            </Typography>
            <FeedbackIcon />
            </Stack>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>

        </Stack>
        </Box>
        </Box>


        <Box sx={{ p: 1, width: '60%' }}>
        <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center" 
            spacing={2}
            >
            <Box sx={{ width: '100%', p:1 }}>
            <Button variant="contained" sx={{bgcolor: "black"}} disableElevation>MAKE IT MODERN</Button>
            <Divider sx={{color: "#333", border: "2px solid"}}/>
            </Box>
            <Box sx={{ width: '100%', p:1 }}>
                <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center" 
                spacing={2}
                sx={{flexWrap: "wrap"}}
                >
                    <Card sx={{ maxWidth: 220, m: 1 }}>
                    <CardMedia
                        component="img"
                        height="120"
                        image="https://images.pexels.com/photos/11961778/pexels-photo-11961778.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="green iguana"
                    />
                    <CardContent>
                        <p>
                            <strong>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                            </strong>
                        </p>
                    </CardContent>
                    
                    </Card>

                    <Card sx={{ maxWidth: 220, m: 1 }}>
                    <CardMedia
                        component="img"
                        height="120"
                        image="https://images.pexels.com/photos/12616283/pexels-photo-12616283.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="green iguana"
                    />
                    <CardContent>
                    <p>
                            <strong>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                            </strong>
                        </p>
                    </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 220, m: 1 }}>
                    <CardMedia
                        component="img"
                        height="120"
                        image="https://images.pexels.com/photos/12879617/pexels-photo-12879617.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="green iguana"
                    />
                    <CardContent>
                    <p>
                            <strong>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                            </strong>
                        </p>
                    </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 220, m: 1 }}>
                    <CardMedia
                        component="img"
                        height="120"
                        image="https://images.pexels.com/photos/12461256/pexels-photo-12461256.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="green iguana"
                    />
                    <CardContent>
                        <p>
                            <strong>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit...
                            </strong>
                        </p>
                    </CardContent>
                    </Card>

                </Stack>
            </Box>
        </Stack>
        </Box>


        </Stack>
        </Box>
        </>
    )
}

export default Blog;