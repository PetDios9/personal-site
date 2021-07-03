import React, {useState} from 'react'
import { Grid, makeStyles, Typography, Button } from '@material-ui/core'
import { AboutText } from '../Components/AboutText'
import { MyStack } from '../Components/MyStack'
import { grey } from '@material-ui/core/colors'
const useStyles = makeStyles(theme=> ({
    root: {
        backgroundColor: grey[900] ,
        width: '100%',
        height: '100%',
        color: 'white ',
        //overflowx hidden for horizontal scroll bar bug in material ui
        overflowX: 'hidden'
    },
    container: {
        height: '100vh',
        width: '100vw',
        padding: 60
    },
    aboutButtons :{
        paddingLeft: '20px'
    },
    images: {
        height: '200px',
        width: '100px'
    }
}))
export const AboutPage = () => {
    const [pressedButton, setPressedButton] = useState('about')
    const classes = useStyles()
    let renderedComponent 
    switch(pressedButton) {
        case 'about':
            renderedComponent = <AboutText />
            break
        case 'myStack':
            renderedComponent = <MyStack />
            break
        default:
            renderedComponent= <AboutText />
            break
    }
    return(
        <div className={classes.root}>
            <Grid container direction="row" alignItems="center" className={classes.container} >
                <Grid item sm={6} className={classes.aboutButtons}>
                    <Grid container direction="column" justify='flex-end'>
                        <Grid item>
                            <Button size="large" color="primary" onClick={() => setPressedButton('about')}>
                               <Typography variant="h4">
                                   About Me
                               </Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button size="large" color="primary" onClick={() => setPressedButton('myStack')}>
                                <Typography variant="h4">
                                   My Stack
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6}>
                    {renderedComponent}
                </Grid>
            </Grid>
        </div>
    )
}