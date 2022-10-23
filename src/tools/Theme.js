import { createTheme } from "@mui/material";

const mainColor = '#ffcc00'
const mainSecondaryColor = '#2b1a46'
const mainSuccessColor = '#009c57'

let Theme = createTheme({
    palette: {

        primary: {
            main: mainColor,
        },
        secondary:{
            main: mainSecondaryColor,
        },
        success:{
            main: mainSuccessColor,
        },
    },
})

export default Theme