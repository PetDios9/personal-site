import { Grid, makeStyles,Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import React from 'react'
import MERNBlogSS from '../images/MERNBlogSS.png'
import RandimeSS from '../images/RandimeSS.png'

const useStyles = makeStyles(theme => ({
    root: {
        color: '#FFFFFF',
        backgroundColor: grey[900],
        padding: '5%',
    },
    container: {
        height: '100%',
        width: '100%'
    },
    mernBlogContainer: {
        margin: '10% 0%',
    },
    imgContainers: {
        height: '90%',
        width: '90%'
    },
    links: {
        color: '#ffffff'
    }
}))

export const Projects = () => {
    const classes = useStyles()

    return(
        <div className={classes.root}>
            <Grid 
                container 
                direction="column" 
                justify="center" 
                alignContent="center"
                className={classes.container} 
                spacing={0}
                >
                <Grid item className={classes.mernBlogContainer}>
                    <Grid container direction="column" spacing={8}>
                        <Grid item xs={12}>
                            <img 
                                src={MERNBlogSS} 
                                className={classes.imgContainers} 
                                alt="Mern Blog Web App Screenshot"
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                MERN Blog
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1">
                                A full-stack blog web app with authentication using 
                                Passport.js that allows users to make and post blogs 
                                for other users to see. Utilizes frameworks and services 
                                that are popular in the Web Development landscape today. 
                                Made using the MERN stack (MongoDB, Express, React, 
                                and Node.js). Front end made using the React framework 
                                and styled using the CSS library MaterialUI.  Backend 
                                made with Express and Mongoose. Server side leverages 
                                the Mongoose dependency to communicate with the MongoDB 
                                database and store the blog posts &amp; users.
                                <br />
                                <br />
                                <a 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href="https://hopeful-goldberg-6fb3d1.netlify.app" 
                                    className={classes.links}
                                    >
                                    <em>Click here to visit the app!</em>
                                </a>
                                <br />
                                <br />
                                <a 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href="https://github.com/petdios9/mernblog" 
                                    className={classes.links}
                                    >
                                    <em>Click here to see the code!</em>
                                </a> 
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.randime}>
                    <Grid container direction="column" spacing={8}>
                        <Grid item xs={12}>
                            <img 
                                src={RandimeSS} 
                                className={classes.imgContainers}
                                alt="Randime Web App Screenshot" 
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                Randime
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1">
                                Work in progress web application made using React.js 
                                and Material UI for styling. Uses Kitsu public API to 
                                shuffle random anime on loading and button press for 
                                user to find the next anime show or movie they would 
                                like to watch. Made to display my ability to work with
                                React.js and display data from external API's.
                                <br />
                                <br />
                                <a 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href="https://vigorous-kilby-b98311.netlify.app" 
                                    className={classes.links}
                                    >
                                    <em>Click here to visit the app!</em>
                                </a>
                                <br />
                                <br />
                                <a 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href="https://github.com/petdios9/randime" 
                                    className={classes.links}
                                    >
                                    <em>Click here to see the code!</em>
                                </a> 
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

