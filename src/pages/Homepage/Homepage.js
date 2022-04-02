import { createTheme, ThemeProvider, Typography, Box } from "@mui/material";
import Heading from "../../components/Navbar";
const axios = require('axios')

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
const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
function yourFunction(){
    // do whatever you like here
    // axios.get('https://zenquotes.io/api/random', { crossdomain: true }).then(response => {
    //     console.log(response)
    // })

    const fetchData = async () => {
        const result = await fetch(`https://zenquotes.io/api/random`);
        const body = await result.json();
        console.log(body)
        }
    fetchData();

    // setTimeout(yourFunction, 5000);
}
yourFunction();

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
                            <Typography className="quote" variant="quote">(Quote)</Typography>
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
                <div>
                    eeeee
                </div>
            </ThemeProvider>
        </>
    )

}

export default Homepage