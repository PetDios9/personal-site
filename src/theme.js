import {createMuiTheme} from '@material-ui/core'
import { grey, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: red[700]
        },
        secondary: {
            main: grey[50]
        }
    },
    typography: {
        fontFamily: [
            'Montserrat'
        ]
    }
})

export default theme