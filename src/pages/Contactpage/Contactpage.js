import { ThemeProvider, Typography, Box, Button, FormControl, InputLabel, Input, FormHelperText, TextField } from "@mui/material";
import { Fade } from "react-reveal";
import { useRef } from "react";

export default function Contactpage() {

    const email = useRef('');
    const name = useRef('');
    const message = useRef('');

    function sendMessage() {
        console.log(email.current.value)
        console.log(name.current.value)
        console.log(message.current.value)
        if (email.current.value == '' || name.current.value == '' || message.current.value == '') {
            alert('Please fill out all fields')
        } else {
            email.current.value = ''
            name.current.value = ''
            message.current.value = ''
            alert('Message submitted')
        }
    }

    function clearMessage() {
        email.current.value = ''
        name.current.value = ''
        message.current.value = ''
    }

    return (
        <>
            <div id="contact" style={{ width: '60%', marginTop: '10vh', marginBottom: '25vh' }}>
                <Box sx={{ width: '100%', height: '40em', marginTop: '10vh' }}>
                    <Fade bottom>
                        <Box sx={{ my: '6vh' }}>
                            <Typography variant="name">Contact</Typography>
                        </Box>
                    </Fade>
                    <div style={{ textAlign: 'left' }}>
                        <Fade left>
                            <TextField id="outlined-basic" inputRef={email} label="Email" variant="outlined" color="basic" sx={{ width: '40%', my: '3vh' }} inputProps={{ style: { color: "white" } }} focused />
                            <br />
                            <TextField id="outlined-basic" inputRef={name} label="Name" variant="outlined" color="basic" sx={{ width: '40%', my: '3vh' }} inputProps={{ style: { color: "white" } }} focused />
                        </Fade>
                    </div>
                    <Fade right>
                        <TextField id="outlined-basic" inputRef={message} label="Message" variant="outlined" color="basic" multiline={true} rows={8} sx={{ width: '100%', my: '5vh' }} inputProps={{ style: { color: "white" } }} focused />
                    </Fade>
                    <Fade bottom>
                        <div style={{ textAlign: 'left' }}>
                            <Button variant="outlined" color="error" style={{ textTransform: 'none', width: '10em', margin: '2em 2em 2em 0' }} onClick={() => { clearMessage() }}>
                                <Typography id="quote" className="quote" variant="info">Clear</Typography>
                            </Button>
                            <Button variant="outlined" color="basic" style={{ textTransform: 'none', width: '10em', margin: '2em 2em 2em 0' }} onClick={() => { sendMessage() }}>
                                <Typography id="quote" className="quote" variant="info">Submit</Typography>
                            </Button>
                        </div>
                    </Fade>

                </Box>
            </div>
        </>
    )
}