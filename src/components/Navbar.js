import { Typography, Button, Box, ThemeProvider } from "@mui/material";
import React, { useRef } from "react";
import Theme from "../pages/Theme";
import {Link} from 'react-scroll'
// import Styled from "styled-components"; 

/** TO-DO List:
 *  - Change Fonts
 *  - Add Theme Colors
 */

function HeaderButton(prop) {
    return (
        <Button sx={{ paddingLeft: '20px', paddingRight: '20px' }} variant="text">
            
            <ThemeProvider theme={Theme}>
                <Link to={prop.target} spy={true} smooth={true}>
                <Typography variant="menuItems">
                {prop.text}
            </Typography>
                </Link>
            </ThemeProvider>
        </Button>
    )
}

function Heading(prop) {
    const transparentBackground = useRef(prop.background);
    const background = transparentBackground.current ? "rgba(255, 255, 255, 0)" : "#0A1929";

    // const textColor = useRef(prop.background);
    // const text = textColor.current ? ""

    return (
        <>
            <Box id="head" sx={{ textAlign: 'center', padding: '1vh 0 1vh 0', backgroundColor: { background } }}>
                <div>
                    <HeaderButton text=" Home " target="head"/>
                    <HeaderButton text=" About " target="about-component"/>
                    {/* <HeaderButton text=" Resume " target="resume"/>
                    <HeaderButton text=" Contact " target="contact"/> */}
                </div>
            </Box>
        </>
    )
}

export default Heading