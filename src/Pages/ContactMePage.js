import { Grid, makeStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import React from 'react'
import { PeterContactCard } from '../Components/PeterContactCard'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '88vh',
        backgroundColor: grey[900]
    },
    container: {
        height: '100%',
        width: '100%'
    }
}))

export const ContactMePage = () =>  {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Grid container justify="center" alignItems="center" className={classes.container}>
                <Grid item>
                    <PeterContactCard />
                </Grid>
            </Grid>
        </div>
    )
}