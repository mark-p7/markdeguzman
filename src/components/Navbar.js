import { Button, Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
// import Styled from "styled-components"; 

/** TO-DO List:
 *  - Change Fonts
 *  - Add Theme Colors
 */

function HeaderButton(prop) {
    return (
        <Button sx={{ paddingLeft: '20px', paddingRight: '20px', color: '#FFFFFF' }} variant="text">
            {prop.text}
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
            <Box sx={{ textAlign: 'center', padding: '1vh 0 1vh 0', backgroundColor: {background}}}>
                <div>
                    <HeaderButton text=" Home "/>
                    <HeaderButton text=" About " />
                    <HeaderButton text=" Resume " />
                    <HeaderButton text=" Contact " />
                </div>
            </Box>
        </>
    )
}

export default Heading