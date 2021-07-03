import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import nodelogo from '../images/nodelogo.png'
import reactlogo from '../images/reactlogo.png'
import mongodblogo from '../images/mongologo.png'
import javascriptlogo from '../images/javascriptlogo.png'
import expresslogo from '../images/expresslogo.png'

export const MyStack = () => {
    return(
        <Grid container spacing={2} direction="row" alignItems="center" justify="flex-start">
            <Grid item xs={12}>
                <Typography variant='subtitle1'>
                    Here are some frameworks and technologies that I work with in my projects!
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src={reactlogo} alt="React.js Logo"  />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src={nodelogo} alt="Node.js Logo"  />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src={mongodblogo} alt="MongoDB Logo" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src={javascriptlogo} alt="Javascript Logo" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src={expresslogo} alt="Express.js Logo" />
            </Grid>
    </Grid>
    )
}