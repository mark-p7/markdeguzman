import { createTheme } from "@mui/material";
const Theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'name'
                    },
                    style: {
                        color: 'white',
                        fontSize: '6em'
                    }
                },
                {
                    props: {
                        variant: 'quote'
                    },
                    style: {
                        color: 'white',
                        fontSize: '2em',
                        transition: 'opacity 1s'
                    }
                },
                {
                    props: {
                        variant: 'title'
                    },
                    style: {
                        color: 'white',
                        fontSize: '3.2em',
                        transition: 'opacity 1s'
                    }
                },
                {
                    props: {
                        variant: 'info'
                    },
                    style: {
                        color: 'white',
                        fontSize: '2em',
                        transition: 'opacity 1s'
                    }
                }
            ]
        }
    }
});

export default Theme;