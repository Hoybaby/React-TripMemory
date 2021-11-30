import React from 'react'
import { AppBar, Typography } from '@material-ui/core'

const Navbar = () => {

    const classes = useStlyes();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading }variant="h2" align="center">
                Memories
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </Typography>
        </AppBar>
    )
}

export default Navbar
