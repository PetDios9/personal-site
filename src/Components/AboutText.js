import React from 'react'
import {Typography, Grid } from '@material-ui/core'

export const AboutText = () => {
    return(
        <Grid container direction="row" justify="flex-start" >
            <Grid item xs={12} style={{padding: 20}}>
                <Typography variant="body1" align="center" >
                    I am 26 years old and a self taught Software Engineer! 
                        <br />
                        <br />
                    I began learning software development in the beginning of 2020 starting with basic HTML and CSS 
                    and am now able to build full stack web applications using cutting edge and modern technologies in the web development world. 
                    My passion for web development and strong interpersonal skills allow me to be an integral part of any workplace and foster both collaborative <span>&#38; </span>
                    productive environments. 
                    I am quick to learn, eager to take on any challenge put in front of me, and excited to hear from you! Reach out to me by scrolling down! 
                    Am available anytime to chat. :-)

                </Typography>
            </Grid>
        </Grid>
    )
}