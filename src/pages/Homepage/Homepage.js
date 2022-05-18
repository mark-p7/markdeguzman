import { ThemeProvider, Typography, Box, Button, FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import { FileDownload } from "@mui/icons-material";
import Heading from "../../components/Navbar";
import axios from "axios";
import Aboutpage from "../Aboutpage/Aboutpage";
import Theme from "../Theme";
import Resumepage from "../Resumepage/Resumepage";
import Contactpage from "../Contactpage/Contactpage";

function setQuote() {
    var quote = document.getElementById('quote');
    var author = document.getElementById('author');
    quote.innerHTML = responseTracker.data[0].q;
    author.innerHTML = responseTracker.data[0].a;
    quote.style.opacity = 1;
    author.style.opacity = 1;
    setTimeout(getQuote, 5000);
}
var responseTracker = '';
function getQuote() {
    axios.get('/api/random').then(response => {
        var quote = document.getElementById('quote');
        var author = document.getElementById('author');
        responseTracker = response;
        quote.style.opacity = 0;
        author.style.opacity = 0;
        setTimeout(setQuote, 1000);
    })
}
getQuote()

function Homepage() {

    return (
        <>
            <Heading background={true} />
            <ThemeProvider theme={Theme}>
                <Box sx={{ display: 'grid', width: '100%', textAlign: 'center', gridTemplateRows: '110vh auto auto auto', height: '100%', justifyItems: 'center', alignItems: 'center' }}>
                    <div style={{ height: '100%', display: 'inline-flex' }}>
                        <div style={{ margin: 'auto', marginTop: '15em' }}>
                            <Typography variant="name">MARK DE GUZMAN</Typography>
                            <br />
                            {/* <Typography id="quote" className="quote" variant="quote"></Typography> */}
                            <br />
                            {/* <Typography id="author" className="author" variant="quote"></Typography> */}
                        </div>
                    </div>

                    < Aboutpage />

                    {/* <div id='resume' style={{ width: '80%', paddingTop: '15vh' }}>
                        <div style={{ display: 'grid', alignItems: 'center', margin: 'auto' }}>
                            <Resumepage />
                        </div>
                    </div>

                    <Contactpage /> */}
                </Box>
            </ThemeProvider>
        </>
    )

}

export default Homepage