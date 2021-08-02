import { AppBar, Toolbar, makeStyles, Typography, Grid, } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    toolbar: {
        minHeight: 90,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: 'black',
    },
    links: {
        textDecoration: 'none',
        color: 'black'
    }
}))

export const Header = () => {
    const classes = useStyles()
    return (
        <AppBar elevation={0} position="fixed" className={classes.toolbar} >
            <Toolbar>
               <Grid container justify="space-between" direction="row">
                   <Grid item xs={6}>
                        <Typography variant="h6" align="left">
                            Peter Diosdado
                        </Typography>
                   </Grid>
                   <Grid item>
                       <Grid container justify="center" alignItems="center" direction="row" spacing={4}>
                           <Grid item>
                                <Typography variant="h6">
                                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1D6aNecTOwlf2Rj4iqFFY6eA7uW7U5TOr/view?usp=sharing" className={classes.links}>Resume</a>
                                </Typography>
                           </Grid>
                       </Grid>
                   </Grid>
               </Grid>
            </Toolbar>
        </AppBar>
    )
}