import { Typography, Box, List, ListItem } from "@mui/material";
export default function Aboutpage() {
    return (
        <div style={{ height: '100%' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '45vw 20vw', gridTemplateRows: 'auto 50vh', width: '100%', gap: '1em 2em' }}>
                <div style={{ textAlign: 'left' }}>
                    <Typography variant="title">Summary</Typography>
                    <br />
                    <br />
                    <Typography variant="info">My name is Mark De Guzman and I'm 20 years old.
                        I am currently a BCIT CST student working towards becoming a full time software developer.
                        Currently I only have experience flipping burgers and working the cashier at a local
                        McDonalds but I am excited to break into the Tech industry.
                    </Typography>
                </div>
                <div style={{ gridArea: '1 / 2 / span 2 / span 1', overflow: 'hidden', textAlign: 'left' }}>
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
                </div>
                <div style={{ textAlign: 'left' }}>
                    <Typography variant="title">
                        Goals
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="info">
                        My primary goal right now is to become a full time software developer but
                        I have big aspirations to become someone great one day. My dream is to someday
                        create my own startup and become a successful Tech CEO. I hope to also one day
                        delve deeper into the world of AI and Quantum Computing later on in my career.
                    </Typography>
                </div>
            </Box>
        </div>
    )
}