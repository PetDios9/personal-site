import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import nodelogo from '../images/nodelogo.png'
import reactlogo from '../images/reactlogo.png'
import mongodblogo from '../images/mongologo.png'
import expresslogo from '../images/expresslogo.png'

export const MyStack = () => {
    return(
        <Grid container direction="row" justify="center" alignItems="center" alignContent="center">
            <Grid item xs={12}>
                <Typography variant='body1' paragraph={true} align="center" >
                    <br />
                    Here are some frameworks and technologies that I work with in my projects!
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
                <img src={reactlogo} alt="React.js Logo"  />
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <img src={nodelogo} alt="Node.js Logo"  />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
                <img src={mongodblogo} alt="MongoDB Logo" />
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={6}>
                <img src={expresslogo} alt="Express.js Logo" />
            </Grid>
    </Grid>
    )
}