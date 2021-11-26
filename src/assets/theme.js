import { createTheme } from '@mui/material';


const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#00acc1',
        },
        secondary: {
            main: '#007c91'
        },
        tertiary: {
            main: "red"
        },
        iconColor: {
            main: "white",
            secondary: "red"
        },
        text: {
            primary: "#fff"
        }
    },
    shape: {
        borderRadius: 5,
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    fontWeight: 700
                }
            }
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    border: '2px solid #00acc1',
                    borderRadius: 5,
                    padding: '0px'
                },

                '&.hover': {
                    border: '0px solid #00acc1'
                }
            }
        }
    }
})


export default theme;