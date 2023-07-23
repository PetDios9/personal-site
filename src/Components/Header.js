import { AppBar, Toolbar, makeStyles, Typography, Grid, } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';

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
                                    <a 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href="https://drive.google.com/file/d/1h4h8Rxbo8QgPx3vK__8GV47ikiEJAqBn/view?usp=sharing" 
                                    className={classes.links}
                                        >
                                        Resume
                                    </a>
                                </Typography>
                           </Grid>
                           <Grid item>
                           <a
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href="https://github.com/petdios9" 
                            className={classes.links}
                                >
                                <GitHubIcon />
                            </a>
                           </Grid>
                       </Grid>
                   </Grid>
               </Grid>
            </Toolbar>
        </AppBar>
    )
}
