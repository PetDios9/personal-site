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
                <img src={reactlogo}  />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src={nodelogo}  />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src={mongodblogo} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src={javascriptlogo} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src={expresslogo} />
            </Grid>
    </Grid>
    )
}