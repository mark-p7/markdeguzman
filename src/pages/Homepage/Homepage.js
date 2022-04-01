import { ThemeProvider, Typography } from "@mui/material";
import Heading from "../../components/Navbar";

function Homepage() {


    return (
        <>
            <Heading background={true} />

            <Typography sx={{color: 'white', textAlign: 'center', marginTop: '30vh', top: '50%'}} variant="h1">MARK DE GUZMAN</Typography>


        </>
    )
}

export default Homepage