import { createTheme } from "@mui/material/styles"
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: grey[800],
        },
        secondary: {
            main: grey[200],
        },
    }
})

export default theme;