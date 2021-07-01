import {createMuiTheme} from '@material-ui/core'
import { red } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: red[700]
        }
    },
    typography: {
        fontFamily: [
            'Montserrat'
        ]
    }
})

export default theme