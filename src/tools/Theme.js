import { createTheme } from "@mui/material";

const mainColor = '#fffff'
//const mainSecondaryColor = '#2b1a46'
const mainSuccessColor = '#009c57'
const mainBlack = '#1A2027'
const mainBlue = '#0768e2'

let Theme = createTheme({
    palette: {

        primary: {
            main: mainColor,
        },
        secondary:{
            main: mainBlack,
        },
        success:{
            main: mainSuccessColor,
        },
        info:{
            main: mainBlue,
        },
    },
})

export default Theme