import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const theme = createTheme({
    palette: {
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
});

const ArtistAdmin = () =>{
    return (
        <>
        <div className="mt-5 p-5 bg-dark text-center" style={{"height": "280px", "display": "flex", "alignItems": "flex-end", "justifyContent": "center"}}>
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column"}}>
        <div>
        <h1 className="text-white">Artist administration</h1> 
        </div>
        </div>
        </div>
        <div className="mt-5 p-3" style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "width": "100%"}}>
            <Box sx={{p:5, bgcolor: "#333", textAlign: "center", width: 300}}>
            <Typography variant="h6" component="h2" sx={{fontSize: 40, textAlign: "center"}}>
                SC
            </Typography>
            </Box>
        </div>
        <div className="mt-1 p-3 text-center" style={{"display": "flex", "justifyContent": "center", "alignItems": "flex-start", "width": "100%"}}>
        <div className="p-2">
        <p>PiliChilli</p>
        </div>
        <div className="p-2">
        <Link to="/artistAdmin/edit">
        <SettingsOutlinedIcon />
        </Link>
        </div>
        </div>
        <div className="p-3 text-center" style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "width": "100%"}}>
            <div className="p-5">
            <Button variant="contained" startIcon={<AddIcon />}>
            ADD ARTIST
            </Button>
            </div>
            <div className="p-5">
            <ThemeProvider theme={theme}>
            <Button variant="contained" color="neutral" startIcon={<ClearIcon />}>
            DELETE AN ACCOUNT
            </Button>
            </ThemeProvider>
            </div>
        </div>
        </>
    )
}

export default ArtistAdmin;