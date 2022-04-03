import { createTheme, ThemeProvider, Typography, Box } from "@mui/material";
import Heading from "../../components/Navbar";
import axios from "axios";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'name'
                    },
                    style: {
                        color: 'white',
                        fontSize: '4em'
                    }
                },
                {
                    props: {
                        variant: 'quote'
                    },
                    style: {
                        color: 'white',
                        transition: 'opacity 1s'
                    }
                }
            ]
        }
    }
});

function setQuote() {
    var quote = document.getElementById('quote');
    var author = document.getElementById('author');
    quote.innerHTML = responseTracker.data[0].q;
    author.innerHTML = responseTracker.data[0].a;
    quote.style.opacity = 1;
    author.style.opacity = 1;
    setTimeout(getQuote, 4000);
}
var responseTracker = '';
function getQuote(){
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
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'grid', width: '100%', textAlign: 'center', gridTemplateRows: '95vh 100px 200px 300px', height: '100%', justifyItems: 'center', alignItems: 'center' }}>
                    <div style={{ height: '100%', display: 'inline-flex' }}>
                        <div style={{margin: 'auto'}}>
                            <Typography variant="name">MARK DE GUZMAN</Typography>
                            <br />
                            <Typography id="quote" className="quote" variant="quote"></Typography>
                            <br />
                            <Typography id="author" className="author" variant="quote"></Typography>
                        </div>
                    </div>
                    <div style={{ height: '100%' }}>
                        <Typography variant="quote">(Quote)</Typography>
                    </div>
                    <div style={{ height: '100%' }}>
                        <Typography variant="quote">(Quote)</Typography>
                    </div>
                    <div style={{ height: '100%' }}>
                        <Typography variant="quote">(Quote)</Typography>
                    </div>
                </Box>
            </ThemeProvider>
        </>
    )

}

export default Homepage