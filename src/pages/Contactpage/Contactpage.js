import { ThemeProvider, Typography, Box, Button, FormControl, InputLabel, Input, FormHelperText, TextField } from "@mui/material";

// const label = (props) => <Typography variant="subTitle">{props.label}</Typography>

export default function Contactpage() {
    return (
        <>
            <div id="Contact" style={{ width: '60%', marginTop: '10vh', marginBottom:'25vh' }}>
                <Box sx={{ width: '100%', height: '40em', marginTop: '15vh' }}>
                    <Box sx={{my: '6vh'}}>
                    <Typography variant="name">Contact</Typography>
                    </Box>
                    
                    <div style={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" color="basic" sx={{ width: '40%', my: '3vh' }} inputProps={{ style: { color: "white" } }} focused />
                        <br/>
                        <TextField id="outlined-basic" label="Name" variant="outlined" color="basic" sx={{ width: '40%', my: '3vh' }} inputProps={{ style: { color: "white" } }} focused />
                    </div>
                    <TextField id="outlined-basic" label="Message" variant="outlined" color="basic" multiline={true} rows={8} sx={{ width: '100%', my: '5vh'}} inputProps={{ style: { color: "white" } }} focused />
                </Box>
            </div>
        </>
    )
}