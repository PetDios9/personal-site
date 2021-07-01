import { AppBar, Toolbar, makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    toolbar: {
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center'
    },
    name: {
    }
}))

export const Header = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.toolbar} >
            <Toolbar disableGutters>
               <Grid container justify="center" direction="column" spacing={2}>
                   <Grid item>
                        <Typography variant="h2">
                            Peter Diosdado
                        </Typography>
                   </Grid>
                   <Grid item>
                       <Grid container justify="center" direction="row" spacing={10}>
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