import { Typography, Box, List, ListItem, Button } from "@mui/material";
import Fade from 'react-reveal/Fade';

export default function Aboutpage() {
    return (
        <div id="about-component" style={{ height: '100%', paddingTop: '13.5vh', paddingBottom: '15vh' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '45vw 20vw', gridTemplateRows: 'auto auto auto', width: '100%', gap: '1em 2em' }}>
                <div style={{ textAlign: 'left' }}>
                    <Fade left>
                        <Typography variant="title">Summary</Typography>
                        <br />
                        <br />
                        <Typography variant="info">My name is Mark De Guzman and I'm 20 years old.
                            I am currently a BCIT CST student working towards becoming a full time software developer.
                            Currently I only have experience flipping burgers and working the cashier at a local
                            McDonalds but I am excited to break into the Tech industry.
                        </Typography>
                    </Fade>
                </div>
                <div style={{ gridArea: '1 / 2 / span 2 / span 1', overflow: 'hidden', textAlign: 'left' }}>
                    <Fade right>
                        <Typography variant="title" sx={{ paddingLeft: '1.1em' }}>
                            Skills
                        </Typography>
                        <ul>
                            <List>

                                <ListItem>
                                    <Typography variant="info">
                                        HTML CSS JS
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography variant="info">
                                        Java
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography variant="info">
                                        Python
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography variant="info">
                                        C
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography variant="info">
                                        REST API
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography variant="info">
                                        PHP
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography variant="info">
                                        React
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography variant="info">
                                        Git/Github
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography variant="info">
                                        Azure
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography variant="info">
                                        Firebase
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography variant="info">
                                        MySQL
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography variant="info">
                                        SQL
                                    </Typography>
                                </ListItem>
                            </List>
                        </ul>
                    </Fade>
                </div>
                <div style={{ textAlign: 'left' }}>
                    <Fade bottom>
                        <Typography variant="title">
                            Goals
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="info">
                            My primary goal right now is to become a full time software developer but
                            I have big aspirations to become someone great one day. My dream is to someday
                            create my own startup and become a successful Tech CEO. I hope to also, one day,
                            delve deeper into the world of AI and Quantum Computing later on in my career.
                        </Typography>
                    </Fade>
                </div>
                <div id="resume" style={{ gridArea: '3 / 1 / span 1 / span 1', textAlign: 'left', paddingTop: '5vh' }}>
                    <Fade left>
                        <Typography variant="name">Resume</Typography>
                    </Fade>
                </div>
                <div style={{ marginTop: '5vh' }}>
                <Fade right>
                    <Button variant="outlined" style={{ textTransform: 'none', width: '15em' }}>
                        <Typography id="quote" className="quote" variant="quote">ZIP file</Typography>
                    </Button>
                </Fade>
                <Fade bottom>
                <Button variant="outlined" style={{ textTransform: 'none', width: '15em', marginTop: '2em' }}>
                        <Typography id="quote" className="quote" variant="quote">PDF file</Typography>
                    </Button>
                </Fade>

                </div>
            </Box>
        </div>
    )
}