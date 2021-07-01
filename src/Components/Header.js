import { AppBar, Toolbar, makeStyles, Typography, Grid, } from "@material-ui/core";
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    toolbar: {
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: red[500],
    },
    links: {
        textDecoration: 'none',
        color: red[500]
    }
}))

export const Header = () => {
    const classes = useStyles()
    return (
        <AppBar elevation={0} position="absolute" className={classes.toolbar} >
            <Toolbar >
               <Grid container justify="space-between" direction="row" spacing={0}>
                   <Grid item>
                        <Typography variant="h6">
                            Peter Diosdado
                        </Typography>
                   </Grid>
                   <Grid item>
                       <Grid container justify="center" direction="row" spacing={6}>
                            <Grid item>
                                <Typography variant="h6" >
                                    About
                                </Typography>
                            </Grid>
                           <Grid item>
                                <Typography variant="h6" >
                                    Resume
                                </Typography>
                           </Grid>
                           <Grid item>
                                <Typography variant="h6">
                                <a target="_blank" rel="noopener noreferrer" href="http://linkedin.com/in/peter-diosdado" className={classes.links}>LinkedIn</a>
                                </Typography>
                           </Grid>
                           <Grid item>
                                <Typography variant="h6" >
                                    Contact
                                </Typography>
                           </Grid>
                       </Grid>
                   </Grid>
               </Grid>
            </Toolbar>
        </AppBar>
    )
}