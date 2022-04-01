import { Button, Box } from "@mui/material";
import React from "react";
// import Styled from "styled-components"; 

function HeaderButton(prop) {
    return(
        <Button sx={{ marginLeft: '10px', marginRight: '10px' }} variant="text">{prop.text}</Button>
    )
}

function Heading() {
    return (
        <>
            <Box sx={{textAlign: 'center'}}>
                <div>                
                    <HeaderButton text="text">Hello World</HeaderButton>
                    <HeaderButton text="text">Hello World</HeaderButton>
                    <HeaderButton text="text">Hello World</HeaderButton>
                </div>
            </Box>
        </>
    )
}

export default Heading