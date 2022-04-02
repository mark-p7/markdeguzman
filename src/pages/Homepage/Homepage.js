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
                        color: "white"
                    }
                }
            ]
        }
    }
});

function getQuote(){
    axios.get('/api/random').then(response => {
        console.log(response.data[0].q)
        console.log(response.data[0].a)
        document.getElementsByClassName('quote')[0].innerHTML = response.data[0].q
        document.getElementsByClassName('author')[0].innerHTML = response.data[0].a
    })
    setTimeout(getQuote, 5000);
}
getQuote();

function Homepage() {

    return (
        <>
            <Heading background={true} />
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'grid', width: '100%', textAlign: 'center', gridTemplateRows: '90vh 100px 200px 300px', height: '100%', justifyItems: 'center', alignItems: 'center' }}>
                    <div style={{ height: '100%', display: 'inline-flex' }}>
                        <div style={{margin: 'auto'}}>
                            <Typography variant="name">MARK DE GUZMAN</Typography>
                            <br />
                            <Typography className="quote" variant="quote"></Typography>
                            <br />
                            <Typography className="author" variant="quote"></Typography>
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