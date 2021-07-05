import React from 'react'
import { Card, CardHeader, Avatar, makeStyles, Typography, CardContent } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import peter2 from '../images/peter2.jpg'

const useStyles = makeStyles(theme => ({
    root: {
       width: 'auto',
       height: 'auto',
    },
    links: {
        textDecoration: 'none',
        color: 'black'
    },
    avatar: {
        width: 56,
        height: 56
    }
}))

export const PeterContactCard = () => {
    const classes = useStyles()
    return(
        <Card className={classes.root} variant="outlined">
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}
                        src={peter2}
                        alt="Peter Diosdado"
                        >
                        P
                    </Avatar>
                }
                title={<Typography variant="h6">Peter Diosdado</Typography>}
                />
                <CardContent >
                    <Typography variant='body1' paragraph={true}>
                        Contact me by clicking any of the options below!
                    </Typography>
                    <a href="tel: 209-479-0926" className={classes.links}>
                        <PhoneIcon />
                        <Typography variant="body1" paragraph={true}>
                                209-479-0926
                        </Typography>
                    </a>
                    <a href="mailto: diosdadopeter@gmail.com" className={classes.links}>
                        <EmailIcon />
                        <Typography variant="body1" paragraph={true} >
                                diosdadopeter@gmail.com
                        </Typography>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="http://linkedin.com/in/peter-diosdado" className={classes.links}>
                        <LinkedInIcon />
                        <Typography variant="body1"  paragraph={true} >
                                www.linkedin.com/in/peter-diosdado
                        </Typography>
                    </a>
                </CardContent>
        </Card>
    )
}