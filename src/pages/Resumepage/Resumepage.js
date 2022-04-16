import { Typography, Box, List, ListItem, Button } from "@mui/material";
import Fade from 'react-reveal/Fade';

export default function Resumepage() {
    return (
        <>
            <div style={{border: '1px solid white', borderRadius: '5px', width: '75%',  display: 'grid', alignItems: 'center', margin: 'auto' }}>
                <div id="resume" style={{ textAlign: 'center', paddingTop: '15vh' }}>
                    <Fade left>
                        <Typography variant="name">Resume</Typography>
                        <Typography variant="subTitle">Download</Typography>
                    </Fade>
                </div>
                <div style={{ marginTop: '5vh', marginBottom: '20vh' }}>
                    <Fade right>
                        <Button variant="outlined" color="basic" style={{ textTransform: 'none', width: '15em' }}>
                            <Typography id="quote" className="quote" variant="quote">ZIP file</Typography>
                        </Button>
                    </Fade>
                    <Fade bottom>
                        <Button variant="outlined" color="basic" style={{ textTransform: 'none', width: '15em', marginTop: '2em'}}>
                            <Typography id="quote" className="quote" variant="quote">PDF file</Typography>
                        </Button>
                    </Fade>
                </div>
            </div>
        </>
    )
}