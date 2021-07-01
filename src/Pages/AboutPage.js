import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import peter from '../peter.jpg'

const useStyles = makeStyles(theme => ({
    peter : {
        // backgroundImage: `url(${peter})`,
        background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('${peter}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        
    },
    textContainer: {
        height: "90vh",
        width: "90vw",
        color: 'white'
    },
}))

const AboutPage = () => {
    const classes = useStyles()
    return(
        <Grid container alignItems="center" justify="center" className={classes.peter}>
            <Grid container className={classes.textContainer} direction="column" alignItems="center" justify="center">
                <Grid item>
                    <Typography variant="h3">
                        Hello, World! My name is Peter Diosdado!
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        Junior Software Developer!
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AboutPage