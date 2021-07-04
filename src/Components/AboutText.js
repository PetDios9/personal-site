import React from 'react'
import {Typography, Grid } from '@material-ui/core'

export const AboutText = () => {
    return(
        <Grid container direction="row" justify="flex-start" >
            <Grid item xs={12}>
                <Typography variant="body1" align="center" style={{padding: 50}} >
                    I am 26 years old and a self taught Web Developer! 
                        <br />
                        <br />
                    I began teaching myself web development at the beginning of 2020 by learning how to work with HTML and CSS, and over the pandemic learned more technologies while also working full time. 
                    I am very open minded, forward thinking, and excited to learn more technologies in the ever evolving web development world.
                    Reach out to me by clicking the Indeed link in the banner. I'm excited to hear from you! :-)
                </Typography>
            </Grid>
        </Grid>
    )
}