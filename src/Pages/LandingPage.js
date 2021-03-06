import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import coding from '../images/coding.jpg'

const useStyles = makeStyles(theme => ({
    root : {
        background: `linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5), rgba(33,33,33,1) 93%), url('${coding}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        color: 'white'
    },
    textContainer: {
        height: "100vh",
        width: "100vw",
        overflow: 'auto'
    },
}))

const LandingPage = () => {
    const classes = useStyles()
    return(
        <Grid container alignItems="center" justify="center" className={classes.root}>
            <Grid container className={classes.textContainer} direction="column" alignItems="center" justify="center">
                <Grid item>
                    <Typography variant="h3">
                        Hello, World! My name is Peter Diosdado!
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h4">
                        Full Stack Software Developer 
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LandingPage