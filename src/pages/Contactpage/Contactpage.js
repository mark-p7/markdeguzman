import { ThemeProvider, Typography, Box, Button, FormControl, InputLabel, Input, FormHelperText } from "@mui/material";

const label = (props) => <Typography variant="subTitle">{props.label}</Typography>

export default function Contactpage() {
    return (
        <>
            <div id="Contact">
                <Box sx={{ backgroundColor: 'white', width: '100%', height: '30em' }}>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                </Box>
            </div>
        </>
    )
}